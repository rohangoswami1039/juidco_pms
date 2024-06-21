import React from "react";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";

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

const cookie = Cookies.get("accesstoken");

const initialValues = {
  address: "",
  station: "",
  two_wheeler_capacity: "",
  total_parking_area: "",
  type_parking_space: "",
  zip_code: "",
  landmark: "",
  four_wheeler_capacity: "",
  agreement_doc: "",
  two_wheeler_rate: "",
  four_wheeler_rate: "",
};

const validationSchema = Yup.object({
  address: Yup.string().required("Address Number is required"),
  station: Yup.string().required("Parking Station Name is required"),
  two_wheeler_capacity: Yup.string().required(
    "Two Wheeler Parking Capacity is required"
  ),
  total_parking_area: Yup.string().required("Total Parking Area is required"),
  type_parking_space: Yup.string().required(
    "Type of Parking Space is required"
  ),
  zip_code: Yup.string().required("Zip/Post code is required"),
  landmark: Yup.string().required("Landmark is required"),
  four_wheeler_capacity: Yup.string().required(
    "Four Wheeler Parking Capacity is required"
  ),
  agreement_doc: Yup.string().required("Agreement Doc is required"),
  two_wheeler_rate: Yup.string().required("Two Wheeler Rate is required"),
  four_wheeler_rate: Yup.string().required("Four Wheeler Rate is required"),
});

export default function Area_form() {
  const [uploadedFiles, setUploadedFiles] = React.useState({});
  const [uploading, setUploading] = React.useState({
    agreement_doc: false,
  });

  const [loading, set_loading] = React.useState(false);

  const onSubmit = async (values) => {
    set_loading(true);
    console.log(values);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/onboard-parking-area`,
        values,
        {
          headers: {
            Authorization: `Bearer ${cookie}`,
          },
        }
      );

      if (response?.data?.status === true) {
        set_loading(false); 
        toast.success("Parking area added suucessfully");
        window.location.replace("/parking/parkingArea");
        return response.data;
      } else {
        set_loading(false);
        toast.error("Failed to add parking area");
      }
    } catch (error) {
      console.error("There was an error onboarding the parking area!", error);
    } 
  };

  return (
    <>
      <Toaster />
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
                  <label className="mb-2 ml-4" htmlFor="address">
                    Address
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    maxLength={30}
                    onKeyPress={(e) => {
                      if (
                        !(
                          e.key <= "a" ||
                          e.key <= "z" ||
                          e.key <= "A" ||
                          e.key <= "Z" ||
                          (e.key = "")
                        )
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>
                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="station">
                    Parking Station Name
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="station"
                    name="station"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    maxLength={30}
                    onKeyPress={(e) => {
                      if (
                        !(
                          e.key <= "a" ||
                          e.key <= "z" ||
                          e.key <= "A" ||
                          e.key <= "Z" ||
                          (e.key = "")
                        )
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage
                    name="station"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>
                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="two_wheeler_capacity">
                    Two wheeler Parking Capacity
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="two_wheeler_capacity"
                    name="two_wheeler_capacity"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    maxLength={10}
                    onKeyPress={(e) => {
                      if (!(e.key <= "0" || e.key <= "9")) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage
                    name="two_wheeler_capacity"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>
                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="total_parking_area">
                    Total Parking Area
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="total_parking_area"
                    name="total_parking_area"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    maxLength={10}
                    onKeyPress={(e) => {
                      if (!(e.key <= "0" || e.key <= "9")) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage
                    name="total_parking_area"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>
                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="type_parking_space">
                    Type of Parking Space
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    id="type_parking_space"
                    name="type_parking_space"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    // value={locationId}
                    // onChange={(e) => setLocationID(e.target.value)}
                  >
                    <option value="">Select Location</option>
                    <option value="0">Organised</option>
                    <option value="1">UnOrganised</option>
                  </Field>
                  <ErrorMessage
                    name="type_parking_space"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="zip_code">
                    ZIP/Postcode
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    maxLength={6}
                    onKeyPress={(e) => {
                      if (!(e.key <= "0" || e.key <= "9")) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage
                    name="zip_code"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>
                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="landmark">
                    Landmark
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="landmark"
                    name="landmark"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    maxLength={30}
                    onKeyPress={(e) => {
                      if (
                        !(
                          e.key <= "a" ||
                          e.key <= "z" ||
                          e.key <= "A" ||
                          e.key <= "Z" ||
                          (e.key = "")
                        )
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage
                    name="landmark"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>
                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="four_wheeler_capacity">
                    Four wheeler Parking Capacity
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="four_wheeler_capacity"
                    name="four_wheeler_capacity"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    maxLength={10}
                    onKeyPress={(e) => {
                      if (!(e.key <= "0" || e.key <= "9")) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage
                    name="four_wheeler_capacity"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>

                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="two_wheeler_rate">
                    Two wheeler Rate
                    <span className="text-red-500">*</span>
                  </label>

                  <Field
                    type="text"
                    id="two_wheeler_rate"
                    name="two_wheeler_rate"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    maxLength={10}
                    onKeyPress={(e) => {
                      if (!(e.key <= "0" || e.key <= "9")) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage
                    name="two_wheeler_rate"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>

                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="four_wheeler_rate">
                    Four wheeler Rate
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="four_wheeler_rate"
                    name="four_wheeler_rate"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                    maxLength={30}
                    onKeyPress={(e) => {
                      if (!(e.key <= "0" || e.key <= "9")) {
                        e.preventDefault();
                      }
                    }}
                  />
                  <ErrorMessage
                    name="four_wheeler_rate"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                </div>

                <div className="flex flex-1 flex-col mt-4">
                  <label className="mb-2 ml-4" htmlFor="agreement_doc">
                    Agreement Doc
                    <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="file"
                    id="agreement_doc"
                    name="agreement_doc"
                    className="border border-gray-300 px-3 py-4 rounded-md focus:outline-none ml-4 mr-4 transition duration-300"
                    style={{ boxShadow: "0 1px 4px #fff" }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = "0 1px 4px #000")
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                  />
                  <ErrorMessage
                    name="agreement_doc"
                    component="div"
                    className="text-red-500 ml-4"
                  />
                  {values.agreement_doc && (
                    <div className="flex flex-1 justify-end mr-8 ml-8 mt-2">
                      <button
                        type="button"
                        className="flex justify-end items-end ml-4 px-4 w-fit py-2 bg-[#4245D9] text-white rounded"
                        onClick={() =>
                          handle_Image_upload(
                            values.agreement_doc,
                            "agreement_doc",
                            setUploadedFiles,
                            setUploading
                          )
                        }
                        disabled={uploading.agreement_doc}
                      >
                        {uploading.agreement_doc ? "Uploading..." : "Upload"}
                      </button>
                    </div>
                  )}
                  {uploadedFiles.agreement_doc && (
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
    </>
  );
}
