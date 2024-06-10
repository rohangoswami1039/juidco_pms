import React from "react";

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
export default function Area_form() {
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
                <label className="mb-2 ml-4" htmlFor="Parking_Station_Name">
                  Parking Station Name
                  <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  id="Parking_Station_Name"
                  name="Parking_Station_Name"
                  className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
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
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
                <ErrorMessage
                  name="Two_wheeler_Parking_Capacity"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <label className="mb-2 ml-4" htmlFor="Total_Parking_Area">
                  Total Parking Area
                  <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  id="Total_Parking_Area"
                  name="Total_Parking_Area"
                  className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
                <ErrorMessage
                  name="Total_Parking_Area"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <label className="mb-2 ml-4" htmlFor="Type_of_Parking_Space">
                  Type of Parking Space
                  <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  id="Type_of_Parking_Space"
                  name="Type_of_Parking_Space"
                  className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
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
                <label className="mb-2 ml-4" htmlFor="ZIP_Postcode">
                  ZIP/Postcode
                  <span className="text-red-500">*</span>
                </label>
                <Field
                  type="text"
                  id="ZIP_Postcode"
                  name="ZIP_Postcode"
                  className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
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
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
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
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                />
                <ErrorMessage
                  name="Four_wheeler_Parking_Capacity"
                  component="div"
                  className="text-red-500 ml-4"
                />
              </div>
              <div className="flex flex-1 flex-col mt-4">
                <label className="mb-2 ml-4" htmlFor="Agreement_Doc">
                  Agreement Doc
                  <span className="text-red-500">*</span>
                </label>
                <Field
                  type="file"
                  id="Agreement_Doc"
                  name="Agreement_Doc"
                  className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                  style={{ boxShadow: "0 1px 4px #fff" }}
                  onFocus={(e) => (e.target.style.boxShadow = "0 1px 4px #000")}
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
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
                      {uploading.Agreement_Doc ? "Uploading..." : "Upload"}
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
