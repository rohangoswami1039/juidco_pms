import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const FILE_SIZE = 2 * 1024 * 1024; // 2MB
const handle_Image_upload = async (
  file,
  type,
  setUploadedFiles,
  setUploading
) => {
  const formData = new FormData();
  formData.append("img", file);
};

const initialValues = {
  Address: "",
  Zip_postcode: "",
  Incharge_Name: "",
  Incharge_Id: "",
  From_Date: "",
  From_Time: "",
  To_Date: "",
  To_Time: "",
  Schedule_type: "",
};

const validationSchema = Yup.object({
  Address: Yup.string().required("Required"),
  Zip_postcode: Yup.string().required("Required"),
  Incharge_Name: Yup.string().required("Required"),
  Incharge_Id: Yup.string().required("Required"),
  From_Date: Yup.string().required("Required"),
  From_Time: Yup.string().required("Required"),
  To_Date: Yup.string().required("Required"),
  To_Time: Yup.string().required("Required"),
  Schedule_type: Yup.string().required("Required"),
});

export default function Scheduling_form() {
  const [loading, set_loading] = useState(false);
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
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, resetForm }) => (
        <Form className="flex flex-col flex-1 gap-4">
          <div className="flex flex-1 flex-row gap-4 ">
            <div className="flex flex-1 flex-col ">
              <div className="flex flex-1 flex-col mt-4">
                <label htmlFor="Address">Address </label>
                <Field
                  as="input"
                  type="text"
                  id="Address"
                  name="Address"
                  className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-[80vw] md:w-auto"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />

                <ErrorMessage
                  name="Address"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <label htmlFor="Incharge_Name">In-Charge Name </label>
                <Field
                  as="input"
                  type="text"
                  id="Incharge_Name"
                  name="Incharge_Name"
                  className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-[80vw] md:w-auto"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />

                <ErrorMessage
                  name="Incharge_Name"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <label htmlFor="From_Date">From Date </label>
                <Field
                  as="input"
                  type="date"
                  id="From_Date"
                  name="From_Date"
                  className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-[80vw] md:w-auto"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />

                <ErrorMessage
                  name="From_Date"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <label htmlFor="From_Date">To Date </label>
                <Field
                  as="input"
                  type="date"
                  id="To_Date"
                  name="To_Date"
                  className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-[80vw] md:w-auto"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />

                <ErrorMessage
                  name="To_Date"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col ">
              <div className="flex flex-1 flex-col mt-4">
                <label htmlFor="Zip_postcode">Zip/Postcode</label>
                <Field
                  as="input"
                  type="text"
                  //type="select"
                  id="Zip_postcode"
                  name="Zip_postcode"
                  // format="HH:mm"
                  className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-[80vw] md:w-auto"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                ></Field>

                <ErrorMessage
                  name="Zip_postcode"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <label htmlFor="Incharge_Id">In-Charge Id </label>
                <Field
                  as="input"
                  type="text"
                  //type="select"
                  id="Incharge_Id"
                  name="Incharge_Id"
                  // format="HH:mm"
                  className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-[80vw] md:w-auto"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                ></Field>

                <ErrorMessage
                  name="Incharge_Id"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <label htmlFor="From_Time">From Time </label>
                <Field
                  as="select"
                  //type="select"
                  id="From_Time"
                  name="From_Time"
                  // format="HH:mm"
                  className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-[80vw] md:w-auto"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
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
                  name="From_Time"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <label htmlFor="To_Time">To Time</label>
                <Field
                  as="select"
                  //type="select"
                  id="To_Time"
                  name="To_Time"
                  // format="HH:mm"
                  className="border border-gray-300 rounded-md px-3 py-4 mt-1 w-[80vw] md:w-auto"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
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
                  name="To_Time"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-row mt-5">
                <div className="flex flex-1 justify-center items-center ">
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="flex w-20 h-10 md:w-[80%] border border-[#4245D9] rounded-md shadow-md justify-center items-center"
                  >
                    <h2 className="flex text-[#4245D9] font-semibold">
                      Cancel
                    </h2>
                  </button>
                </div>
                <div className="flex flex-1 justify-center items-center ">
                  <button
                    type="button"
                    onClick={() => {
                      resetForm();
                    }}
                    className="flex w-20 h-10 md:w-[80%] border border-[#4245D9] rounded-md shadow-md justify-center items-center"
                  >
                    <h2 className="flex text-[#4245D9] font-semibold">Reset</h2>
                  </button>
                </div>
                <div className="flex flex-1 justify-center items-center ">
                  <button
                    type="submit"
                    className="flex w-20 h-10 md:w-[80%] border bg-[#4245D9] rounded-md shadow-md justify-center items-center"
                  >
                    <h2 className="flex text-white font-semibold">
                      {loading ? "Loading..." : "Save"}
                    </h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
