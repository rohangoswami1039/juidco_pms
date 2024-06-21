import React, { useState } from "react";
import RMC_logo from "../../assets/icons/Parking/Images/RMC_LOGO.png";
import bus from "../../assets/icons/Parking/Images/bus.png";
import { useNavigate } from "react-router-dom";
import background_image from "../../assets/background_image.png";
import { Formik, Form, Field, ErrorMessage } from "formik";

import moment from "moment";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const initialValues = {
  vehicle_type: "",
  vehicle_no: "",
  in_time: "",
  out_time: "",
};
const validationSchema = Yup.object({
  vehicle_type: Yup.string().required("Vehicle type is Required"),
  vehicle_no: Yup.string().required("Required"),
  in_time: Yup.string().required("Required"),
  out_time: Yup.string().required("Required"),
  //amount: Yup.number().required("Required"),
});
function generateTimeOptions(intervalMinutes) {
  const timeOptions = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += intervalMinutes) {
      const hourString = hour.toString().padStart(2, "0");
      const minuteString = minute.toString().padStart(2, "0");
      timeOptions.push(`${hourString}:${minuteString}`);
    }
  }
  return timeOptions;
}

const timeOptions = generateTimeOptions(15);
export default function Organised_ticket_check({
  type_parking_space,
  area_id,
}) {
  console.log(type_parking_space, area_id);

  const navigate = useNavigate();
  const InchargeId = localStorage.getItem("InchargeId");
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const printTextData = (data) => {
    const date = moment(data?.created_at).format("DD-MM-YYYY");
    // const time = moment(data?.date).format('hh:mm'); am pm formate
    const time = moment(data?.created_at).format("HH:mm");
    const printTxt =
      "[C]" +
      "Ranchi Municipal Corporation" +
      "\n" +
      "[C]" +
      "Parking" +
      "\n \n" +
      "Date: " +
      date +
      "\n \n" +
      "In-Time:: " +
      data?.in_time +
      "\n \n" +
      "Out-Time :" +
      data?.out_time +
      "\n \n" +
      "Amount: " +
      data?.amount +
      " /-" +
      "\n \n" +
      "Vehicle No: " +
      data?.vehicle_no +
      "\n \n" +
      "Address: " +
      data?.address +
      "\n \n" +
      "Receipt: " +
      data?.receipt_no +
      "\n" +
      "\n \n" +
      "*******************************";

    return printTxt;
  };

  const printToBTPrinter = (data) => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          Key: "PRINT_FOR_BT_PRINTER",
          keyData: {
            charPerLine: 32,
            printTxt: printTextData(data),
          },
        })
      );
    }
  };

  const onSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    const response = await axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/receipt-create`,
        {
          vehicle_type: values.vehicle_type == "Two_Wheeler" ? 0 : 1,
          vehicle_no: values.vehicle_no,
          in_time: values.in_time,
          out_time: values.out_time,
          type_parking_space: type_parking_space == "UnOrganized" ? 1 : 0,
          incharge_id: InchargeId,
          area_id: area_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        toast.success(
          "Ticket generated successfully of amount:",
          values.amount
        );
        console.log(res.data?.data);
        const res_data = res.data?.data;
        const data = {
          receipt_no: res_data?.receipt_no,
          address: res_data?.area_id,
          created_at: new Date(res_data?.date),
          in_time: res_data?.in_time,
          out_time: res_data?.out_time,
          amount: res_data?.amount,
          vehicle_no: res_data?.vehicle_no,
        };
        printToBTPrinter(data);
        window.alert(
          `Ticket generated successfully of amount: ${res_data.amount}`
        );
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="flex items-center justify-between h-screen w-screen">
      <div className="flex flex-1 flex-col justify-between bg-white h-screen ">
        <div
          onClick={() => navigate(-1)}
          className="absolute w-fit h-fit top-4 left-4 md:hidden"
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 96 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54 15.1515L45.8098 8L0 48L45.8098 88L54 80.8485L16.3805 48L54 15.1515Z"
              fill="#414141"
            />
          </svg>
        </div>
        <div className="flex h-[250px] md:h-[100px] pb-8  justify-center items-center md:justify-start rounded-b-[30px] border-b-[3px] border-l-0 border-r-0 shadow-md border-t-0">
          <div className="flex flex-1 flex-col md:flex-row  justify-between  items-center">
            <div className="flex  flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row">
                <div className="flex mt-8 justify-center items-center">
                  <img
                    src={RMC_logo}
                    alt="RMC Logo"
                    className=" flex max-w-full mt-5 ml-5 mr-5 h-auto md:h-1/2"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex mt-5 ">
                    <h2
                      style={{ fontWeight: 500, fontSize: 20 }}
                      className="text-[#585858]"
                    >
                      Ranchi Municipal Corporation
                    </h2>
                  </div>
                  <div className="flex mt-2 flex-row ">
                    <h1 className="text-md font-bold break-words text-[#1436C3]">
                      Parking Management System
                    </h1>
                    <img
                      src={bus}
                      alt="Bus"
                      className="ml-2 max-w-full h-full  md:h-5"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex cursor-pointer h-10 w-10 m-5 rounded-xl shadow-md justify-center items-center bg-[#5457D6] ml-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.59143 12.5274H3.75852C3.83821 12.5274 3.91291 12.5622 3.96272 12.6237C4.07893 12.7648 4.20344 12.9009 4.33459 13.0304C4.871 13.5673 5.50638 13.9952 6.20559 14.2905C6.92999 14.5964 7.70858 14.7534 8.49494 14.752C9.29016 14.752 10.0605 14.5959 10.7843 14.2905C11.4835 13.9952 12.1189 13.5673 12.6553 13.0304C13.1927 12.4953 13.6211 11.861 13.917 11.1627C14.2241 10.4389 14.3785 9.67024 14.3785 8.87503C14.3785 8.07981 14.2225 7.31116 13.917 6.58733C13.6215 5.8884 13.1965 5.2592 12.6553 4.71965C12.1141 4.1801 11.4849 3.7551 10.7843 3.4596C10.0605 3.15413 9.29016 2.99807 8.49494 2.99807C7.69973 2.99807 6.92942 3.15247 6.20559 3.4596C5.505 3.7551 4.8758 4.1801 4.33459 4.71965C4.20344 4.85081 4.08059 4.98694 3.96272 5.12639C3.91291 5.18782 3.83654 5.22268 3.75852 5.22268H2.59143C2.48684 5.22268 2.42209 5.10647 2.4802 5.01848C3.75354 3.03958 5.98147 1.72971 8.51321 1.73635C12.4909 1.74631 15.6801 4.97532 15.6403 8.94807C15.6004 12.8577 12.4162 16.0137 8.49494 16.0137C5.96984 16.0137 3.75188 14.7055 2.4802 12.7316C2.42375 12.6436 2.48684 12.5274 2.59143 12.5274ZM1.11555 8.77044L3.47131 6.91106C3.5593 6.84133 3.68713 6.90442 3.68713 7.01565V8.27737H8.90002C8.97307 8.27737 9.03283 8.33713 9.03283 8.41018V9.33987C9.03283 9.41292 8.97307 9.47268 8.90002 9.47268H3.68713V10.7344C3.68713 10.8456 3.55764 10.9087 3.47131 10.839L1.11555 8.97962C1.09967 8.96719 1.08684 8.95132 1.07801 8.9332C1.06918 8.91508 1.06459 8.89518 1.06459 8.87503C1.06459 8.85487 1.06918 8.83497 1.07801 8.81685C1.08684 8.79873 1.09967 8.78286 1.11555 8.77044Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative w-full flex-col overflow-y-auto">
          <div className="flex flex-col w-full h-fit justify-center ">
            <div className="flex flex-1 justify-center items-center">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ values, setFieldValue, isSubmitting }) => (
                  <Form className="flex flex-col flex-1">
                    <div className="flex flex-1 flex-row m-4 justify-center items-center gap-8">
                      <div className="flex">
                        <Field
                          id="Two_Wheeler"
                          type="radio"
                          name="vehicle_type"
                          value="Two_Wheeler"
                        />
                        <label htmlFor="Two_Wheeler">Two Wheeler</label>
                      </div>
                      <div className="flex">
                        <Field
                          id="Four_Wheeler"
                          type="radio"
                          name="vehicle_type"
                          value="Four_Wheeler"
                        />
                        <label htmlFor="Four_Wheeler">Four Wheeler</label>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-center items-center">
                      <ErrorMessage
                        name="vehicle_type"
                        component="div"
                        className="text-red-500 ml-4"
                      />
                    </div>
                    <div className="flex flex-1 flex-col m-2">
                      <label className="mb-2 ml-4" htmlFor="vehicle_no">
                        Vehicle Number
                      </label>
                      <Field
                        type="text"
                        id="vehicle_no"
                        name="vehicle_no"
                        placeholder="Vehicle Number"
                        className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-full"
                        style={{ boxShadow: "0 1px 4px #fff" }}
                        onFocus={(e) =>
                          (e.target.style.boxShadow = "0 1px 4px #000")
                        }
                        onBlur={(e) => (e.target.style.boxShadow = "none")}
                      />
                      <ErrorMessage
                        name="vehicle_no"
                        component="div"
                        className="text-red-500 ml-4"
                      />
                    </div>

                    <div className="flex flex-1 flex-row m-2 ">
                      <div className="flex flex-1 ">
                        <div className="flex flex-1 flex-col  m-2">
                          <label htmlFor="in_time">In Time </label>
                          <Field
                            as="select"
                            id="in_time"
                            name="in_time"
                            className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-auto"
                            style={{ boxShadow: "0 1px 4px #fff" }}
                            onFocus={(e) =>
                              (e.target.style.boxShadow = "0 1px 4px #000")
                            }
                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                          >
                            <option value="">-Please Select-</option>
                            {timeOptions.map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </Field>

                          <ErrorMessage
                            name="in_time"
                            component="div"
                            className="text-red-500 ml-4"
                          />
                        </div>
                      </div>
                      <div className="flex flex-1">
                        <div className="flex flex-1 flex-col m-2">
                          <label htmlFor="out_time">Out Time </label>
                          <Field
                            as="select"
                            id="out_time"
                            name="out_time"
                            className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-auto"
                            style={{ boxShadow: "0 1px 4px #fff" }}
                            onFocus={(e) =>
                              (e.target.style.boxShadow = "0 1px 4px #000")
                            }
                            onBlur={(e) => (e.target.style.boxShadow = "none")}
                          >
                            <option value="">-Please Select-</option>
                            {timeOptions.map((time, index) => (
                              <option key={index} value={time}>
                                {time}
                              </option>
                            ))}
                          </Field>

                          <ErrorMessage
                            name="out_time"
                            component="div"
                            className="text-red-500 ml-4"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex m-4 flex-row w-[90%] text-lg md:text-xl lg:text-2xl xl:text-3xl border-2 border-[#4338CA] hover:bg-[#4338CA] hover:text-white text-black font-md p-2 rounded-md justify-center items-center`}
                    >
                      {loading ? "Loading..." : "Book Ticket"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>

          <div className="flex flex-1 justify-center items-center">
            <div className="flex mt-10 mb-5 w-fit justify-center items-center bg-white">
              <img
                src={background_image}
                className="flex flex-1 max-w-full h-auto md:w-fit md:h-[50vh] object-cover"
                alt="Background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
