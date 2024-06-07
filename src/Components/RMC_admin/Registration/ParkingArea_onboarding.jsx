import React from "react";
import { useNavigate } from "react-router-dom";
import parking_lot from "../../../assets/icons/Parking/Images/parking-lot.png";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const handle_Image_upload = async (
  file,
  type,
  setUploadedFiles,
  setUploading
) => {
  const formData = new FormData();
  formData.append("img", file);
};

const FILE_SIZE = 2 * 1024 * 1024; // 2MB

const initialValues = {
  Address: "",
  Parking_Station_Name: "",
  Two_wheeler_Parking_Capacity: "",
  Total_Parking_Area: "",
  Type_of_Parking_Space: "",
  ZIP_Postcode: "",
  Landmark: "",
  Four_wheeler_Parking_Capacity: "",
  Agreement_Doc: "",
};

const validationSchema = Yup.object({
  Address: Yup.string().required("Address Number is required"),
  Parking_Station_Name: Yup.string().required(
    "Parking Station Name is required"
  ),
  Two_wheeler_Parking_Capacity: Yup.string().required(
    "Two Wheeler Parking Capacity is required"
  ),
  Total_Parking_Area: Yup.string().required("Total Parking Area is required"),
  Type_of_Parking_Space: Yup.string().required(
    "Type of Parking Space is required"
  ),
  ZIP_Postcode: Yup.string().required("Zip/Post code is required"),
  Landmark: Yup.string().required("Landmark is required"),
  Four_wheeler_Parking_Capacity: Yup.string().required(
    "Four Wheeler Parking Capacity is required"
  ),
  Agreement_Doc: Yup.string().required("Agreement Doc is required"),
});

export default function ParkingArea_onboarding() {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = React.useState({});
  const [uploading, setUploading] = React.useState({
    Agreement_Doc: false,
  });
  const [loading, set_loading] = React.useState(false);

  const onSubmit = async (values) => {
    console.log(values);
    set_loading(true);
  };

  return (
    <>
      <div className="flex flex-1 overflow-auto ">
        <div className="flex flex-col flex-1 bg-[#F9FAFC]">
          <div className="flex h-10 justify-between items-center">
            <div className="flex ml-4 ">
              <div
                onClick={() => navigate(-1)}
                className="flex flex-row cursor-pointer"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_3837_9887)">
                    <path
                      d="M10.6736 7.20512L4 13.9135L10.6736 20.6218C10.7339 20.7009 10.8105 20.7662 10.8981 20.8132C10.9858 20.8602 11.0826 20.8878 11.1819 20.8941C11.2812 20.9004 11.3806 20.8854 11.4736 20.8499C11.5666 20.8144 11.6508 20.7594 11.7206 20.6886C11.7905 20.6177 11.8443 20.5327 11.8784 20.4393C11.9125 20.3458 11.9262 20.2461 11.9184 20.147C11.9107 20.0478 11.8817 19.9514 11.8335 19.8644C11.7853 19.7774 11.7189 19.7018 11.6389 19.6426L6.64583 14.6079H19.9306C20.1147 14.6079 20.2914 14.5347 20.4216 14.4045C20.5518 14.2743 20.625 14.0976 20.625 13.9135C20.625 13.7293 20.5518 13.5526 20.4216 13.4224C20.2914 13.2922 20.1147 13.219 19.9306 13.219H6.64583L11.6389 8.18429C11.7687 8.05352 11.8413 7.87653 11.8407 7.69225C11.84 7.50797 11.7662 7.33149 11.6354 7.20165C11.5047 7.0718 11.3277 6.99922 11.1434 6.99987C10.9591 7.00052 10.7826 7.07435 10.6528 7.20512H10.6736Z"
                      fill="#665DD9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3837_9887">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="matrix(0 -1 1 0 0 25)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <div className="ml-2 mt-1 text-[#665DD9]  text-sm text-center">
                  {" "}
                  Back
                </div>
              </div>
            </div>
            <div className="flex text-xl font-normal  mr-4">
              Add new Parking Area
            </div>
          </div>

          <div className="flex flex-1 flex-col border-2 shadow-md rounded-md bg-white m-4 mb-4 p-4">
            <div className="flex  h-fit justify-between items-start">
              <div className="flex flex-row ml-10 mt-6">
                <img src={parking_lot} className="w-10" />
                <div className="flex text-xl font-semibold justify-center items-center ml-4 ">
                  Add new Parking Area
                </div>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-center">
              <div className="flex flex-col w-full  justify-center">
                <div className="flex flex-col w-full  justify-center ">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                  >
                    {({ values, setFieldValue, resetForm }) => (
                      <Form className="flex flex-col flex-1 gap-4">
                        <div className="flex flex-row mt-4">
                          <div className="flex flex-1  flex-col">
                            <div className="flex flex-1 flex-col mt-4">
                              <label className="mb-2 ml-4" htmlFor="Address">
                                Address
                                <span className="text-red-500">*</span>
                              </label>
                              <Field
                                type="text"
                                id="Address"
                                name="Address"
                                className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                                style={{ boxShadow: "0 1px 4px #fff" }}
                                onFocus={(e) =>
                                  (e.target.style.boxShadow = "0 1px 4px #000")
                                }
                                onBlur={(e) =>
                                  (e.target.style.boxShadow = "none")
                                }
                              />
                              <ErrorMessage
                                name="Address"
                                component="div"
                                className="text-red-500 ml-4"
                              />
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                              <label
                                className="mb-2 ml-4"
                                htmlFor="Parking_Station_Name"
                              >
                                Parking Station Name
                                <span className="text-red-500">*</span>
                              </label>
                              <Field
                                type="text"
                                id="Parking_Station_Name"
                                name="Parking_Station_Name"
                                className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                                style={{ boxShadow: "0 1px 4px #fff" }}
                                onFocus={(e) =>
                                  (e.target.style.boxShadow = "0 1px 4px #000")
                                }
                                onBlur={(e) =>
                                  (e.target.style.boxShadow = "none")
                                }
                              />
                              <ErrorMessage
                                name="Parking_Station_Name"
                                component="div"
                                className="text-red-500 ml-4"
                              />
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                              <label
                                className="mb-2 ml-4"
                                htmlFor="Two_wheeler_Parking_Capacity"
                              >
                                Two wheeler Parking Capacity
                                <span className="text-red-500">*</span>
                              </label>
                              <Field
                                type="text"
                                id="Two_wheeler_Parking_Capacity"
                                name="Two_wheeler_Parking_Capacity"
                                className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                                style={{ boxShadow: "0 1px 4px #fff" }}
                                onFocus={(e) =>
                                  (e.target.style.boxShadow = "0 1px 4px #000")
                                }
                                onBlur={(e) =>
                                  (e.target.style.boxShadow = "none")
                                }
                              />
                              <ErrorMessage
                                name="Two_wheeler_Parking_Capacity"
                                component="div"
                                className="text-red-500 ml-4"
                              />
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                              <label
                                className="mb-2 ml-4"
                                htmlFor="Total_Parking_Area"
                              >
                                Total Parking Area
                                <span className="text-red-500">*</span>
                              </label>
                              <Field
                                type="text"
                                id="Total_Parking_Area"
                                name="Total_Parking_Area"
                                className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                                style={{ boxShadow: "0 1px 4px #fff" }}
                                onFocus={(e) =>
                                  (e.target.style.boxShadow = "0 1px 4px #000")
                                }
                                onBlur={(e) =>
                                  (e.target.style.boxShadow = "none")
                                }
                              />
                              <ErrorMessage
                                name="Total_Parking_Area"
                                component="div"
                                className="text-red-500 ml-4"
                              />
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                              <label
                                className="mb-2 ml-4"
                                htmlFor="Type_of_Parking_Space"
                              >
                                Type of Parking Space
                                <span className="text-red-500">*</span>
                              </label>
                              <Field
                                type="text"
                                id="Type_of_Parking_Space"
                                name="Type_of_Parking_Space"
                                className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                                style={{ boxShadow: "0 1px 4px #fff" }}
                                onFocus={(e) =>
                                  (e.target.style.boxShadow = "0 1px 4px #000")
                                }
                                onBlur={(e) =>
                                  (e.target.style.boxShadow = "none")
                                }
                              />
                              <ErrorMessage
                                name="Type_of_Parking_Space"
                                component="div"
                                className="text-red-500 ml-4"
                              />
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex flex-1 flex-col mt-4">
                              <label
                                className="mb-2 ml-4"
                                htmlFor="ZIP_Postcode"
                              >
                                ZIP/Postcode
                                <span className="text-red-500">*</span>
                              </label>
                              <Field
                                type="text"
                                id="ZIP_Postcode"
                                name="ZIP_Postcode"
                                className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                                style={{ boxShadow: "0 1px 4px #fff" }}
                                onFocus={(e) =>
                                  (e.target.style.boxShadow = "0 1px 4px #000")
                                }
                                onBlur={(e) =>
                                  (e.target.style.boxShadow = "none")
                                }
                              />
                              <ErrorMessage
                                name="ZIP_Postcode"
                                component="div"
                                className="text-red-500 ml-4"
                              />
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                              <label className="mb-2 ml-4" htmlFor="Landmark">
                                Landmark
                                <span className="text-red-500">*</span>
                              </label>
                              <Field
                                type="text"
                                id="Landmark"
                                name="Landmark"
                                className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                                style={{ boxShadow: "0 1px 4px #fff" }}
                                onFocus={(e) =>
                                  (e.target.style.boxShadow = "0 1px 4px #000")
                                }
                                onBlur={(e) =>
                                  (e.target.style.boxShadow = "none")
                                }
                              />
                              <ErrorMessage
                                name="Landmark"
                                component="div"
                                className="text-red-500 ml-4"
                              />
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                              <label
                                className="mb-2 ml-4"
                                htmlFor="Four_wheeler_Parking_Capacity"
                              >
                                Four wheeler Parking Capacity
                                <span className="text-red-500">*</span>
                              </label>
                              <Field
                                type="text"
                                id="Four_wheeler_Parking_Capacity"
                                name="Four_wheeler_Parking_Capacity"
                                className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                                style={{ boxShadow: "0 1px 4px #fff" }}
                                onFocus={(e) =>
                                  (e.target.style.boxShadow = "0 1px 4px #000")
                                }
                                onBlur={(e) =>
                                  (e.target.style.boxShadow = "none")
                                }
                              />
                              <ErrorMessage
                                name="Four_wheeler_Parking_Capacity"
                                component="div"
                                className="text-red-500 ml-4"
                              />
                            </div>
                            <div className="flex flex-1 flex-col mt-4">
                              <label
                                className="mb-2 ml-4"
                                htmlFor="Agreement_Doc"
                              >
                                Agreement Doc
                                <span className="text-red-500">*</span>
                              </label>
                              <Field
                                type="file"
                                id="Agreement_Doc"
                                name="Agreement_Doc"
                                className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                                style={{ boxShadow: "0 1px 4px #fff" }}
                                onFocus={(e) =>
                                  (e.target.style.boxShadow = "0 1px 4px #000")
                                }
                                onBlur={(e) =>
                                  (e.target.style.boxShadow = "none")
                                }
                              />
                              <ErrorMessage
                                name="Agreement_Doc"
                                component="div"
                                className="text-red-500 ml-4"
                              />
                              {values.Agreement_Doc && (
                                <div className="flex flex-1 justify-end mr-8 ml-8 mt-2">
                                  <button
                                    type="button"
                                    className="flex justify-end items-end ml-4 px-4 w-fit py-2 bg-[#4245D9] text-white rounded"
                                    onClick={() =>
                                      handle_Image_upload(
                                        values.Agreement_Doc,
                                        "Agreement_Doc",
                                        setUploadedFiles,
                                        setUploading
                                      )
                                    }
                                    disabled={uploading.Agreement_Doc}
                                  >
                                    {uploading.Agreement_Doc
                                      ? "Uploading..."
                                      : "Upload"}
                                  </button>
                                </div>
                              )}
                              {uploadedFiles.Agreement_Doc && (
                                <div className="text-green-500 ml-4 mt-2">
                                  Agreement Doc Card Uploaded
                                </div>
                              )}
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
                                    setUploadedFiles({});
                                  }}
                                  className="flex w-20 h-10 md:w-[80%] border border-[#4245D9] rounded-md shadow-md justify-center items-center"
                                >
                                  <h2 className="flex text-[#4245D9] font-semibold">
                                    Reset
                                  </h2>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
