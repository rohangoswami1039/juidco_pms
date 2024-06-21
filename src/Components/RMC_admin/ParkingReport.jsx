import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import parkingStop from "../../assets/parking-stop.png";
import icon from "../../assets/two 1.jpg";
import car from "../../assets/car 1.jpg";
import createApiInstance from "../../AxiosInstance";
import axios from "axios";
import Cookies from "js-cookie";

export default function ParkingReport() {
  const navigate = useNavigate();
  // const date = new Date().toLocaleDateString();

  const newDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    newDate
  );
  const [data, setData] = useState();
  const [location, setLocation] = useState();
  const [locationId, setLocationID] = useState();

  const token = localStorage.getItem("token");

  const fetchData = async (values, resetForm) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/report/collection`,
        {
          area_id: locationId || 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(response.data.data);
    } catch (error) {
      console.error("There was an error onboarding the parking area!", error);
    }
  };

  const fetchLocation = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/get-all-parking-area`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLocation(response.data.data);
    } catch (error) {
      console.error("There was an error onboarding the parking area!", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [locationId]);

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <>
      <div className="flex flex-1 overflow-scroll ">
        <div className="flex flex-col flex-1 bg-[#F9FAFC]">
          <div className="flex h-10 justify-between items-center mt-5 p-4">
            <div className="flex ml-4 ">
              <div
                onClick={() => {
                  navigate(-1);
                }}
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
            <div className="flex text-xl font-semibold  mr-4">
              Parking Report
            </div>
          </div>

          <div className="flex h-[100px] bg-white border-2 shadow-md mt-4 ml-4 mr-4 mb-2 p-8">
            <div className="flex flex-row flex-1 m-1">
              <div className="flex  justify-center items-center">
                <img
                  className="h-[60px] w-[60px]"
                  src={parkingStop}
                  alt="img"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center items-start ml-4">
                <div className="flex flex-1 font-semibold mb-2 ">
                  Search Filter
                </div>
                <div className="flex flex-1 w-full">
                  <Formik
                    initialValues={{ location: "", inChargeId: "", name: "" }}
                    onSubmit={(values) => {
                      console.log(values);
                    }}
                  >
                    {() => (
                      <Form className="w-full">
                        <div className="flex flex-row">
                          <div className="flex flex-1 mr-2">
                            <Field
                              as="select"
                              name="location"
                              className=" border-2 rounded p-2 "
                              value={locationId}
                              onChange={(e) => setLocationID(e.target.value)}
                            >
                              <option value={null}>Select Location</option>
                              {location?.data?.map((loc) => (
                                <option value={loc?.id}>
                                  {loc?.address} - {loc?.station}
                                </option>
                              ))}
                            </Field>
                          </div>
                          {/* <div className="flex flex-1 mr-2">
                            <Field
                              type="text"
                              name="inChargeId"
                              placeholder="In-Charge ID"
                              className="w-full border-2 rounded p-2"
                            />
                          </div>
                          <div className="flex flex-1 mr-2 ">
                            <Field
                              type="text"
                              name="name"
                              placeholder="Name"
                              className="w-full border-2 rounded p-2"
                            />
                          </div>


                          <div className="flex flex-1">
                            <button
                              type="submit"
                              className="w-full bg-[#6366F1] shadow-md border-2  text-white p-2 rounded-md"
                            >
                              Search Filter
                            </button>
                          </div> */}
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-y-scroll">
            <div className="flex flex-1 justify-center items-center">
              <div className="flex flex-col h-[370px] w-[700px] justify-start items-center border-2 shadow-md rounded-md  bg-white m-4">
                <div className="flex flex-row w-full h-[50px] justify-between p-5">
                  <div>
                    <h5 className="p-1">
                      Parking Type -{" "}
                      {data?.location_info[0]?.type_parking_space}
                    </h5>
                    <h5 className="p-1">
                      Parking Name - {data?.location_info[0]?.address},{" "}
                      {data?.location_info[0]?.station}{" "}
                    </h5>
                    <h5 className="p-1">
                      Land Mark - {data?.location_info[0]?.landmark}{" "}
                    </h5>
                    <h5 className="p-1">
                      Pin Code - {data?.location_info[0]?.zip_code}{" "}
                    </h5>
                    <h5 className="p-1">
                      Parking Capacity -{" "}
                      {data?.location_info[0]?.two_wheeler_capacity +
                        data?.location_info[0]?.four_wheeler_capacity || 0}
                    </h5>
                    <h5 className="p-1">
                      In-charge Name -
                      <div className="flex grid-cols-3 gap-2 mt-2">
                        <div className="flex flex-col shadow-lg p-4 justify-between items-center">
                          <img
                            className="h-[20px] w-[20px]"
                            src={parkingStop}
                            alt="img"
                          />
                          <p>
                            {data?.incharge[0]?.first_name}{" "}
                            {data?.incharge[0]?.last_name}
                          </p>
                          <span className="text-xs">
                            Total Collection - {data?.incharge[0]?.sum}/-
                          </span>
                        </div>
                      </div>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[370px] w-[700px] justify-start items-center border-2 shadow-md rounded-md bg-white m-4">
                <div className="flex flex-row w-full h-[50px] justify-between">
                  <div className="flex flex-1 items-center mt-6 ml-5 flex-row gap-1">
                    <div className="flex h-fit w-fit p-2 bg-[#665DD9] rounded-md">
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8817 0.956787C18.8606 0.956787 21.3554 3.26581 21.3554 6.99251V9.23363L21.3482 9.33384C21.2957 9.69433 20.9643 9.97217 20.5633 9.97217H20.5542L20.4291 9.96283C20.2647 9.93808 20.1119 9.86486 19.994 9.75238C19.8466 9.61177 19.7662 9.42169 19.7712 9.22514V6.99251C19.7712 4.0553 18.0321 2.43388 14.8817 2.43388H7.12426C3.96481 2.43388 2.23486 4.0553 2.23486 6.99251V14.2337C2.23486 17.1709 3.97392 18.7838 7.12426 18.7838H14.8817C18.0412 18.7838 19.7712 17.1624 19.7712 14.2337C19.7712 13.8258 20.1258 13.4951 20.5633 13.4951C21.0008 13.4951 21.3554 13.8258 21.3554 14.2337C21.3554 17.9519 18.8789 20.2609 14.8909 20.2609H7.12426C3.12715 20.2609 0.650581 17.9519 0.650581 14.2337V6.99251C0.650581 3.26581 3.12715 0.956787 7.12426 0.956787H14.8817ZM6.60527 8.24889C6.8154 8.25553 7.01408 8.33979 7.15754 8.48309C7.301 8.6264 7.37747 8.817 7.3701 9.01291V15.1845C7.35501 15.5924 6.98813 15.9116 6.55064 15.8975C6.11316 15.8835 5.77073 15.5414 5.78582 15.1335V8.95349L5.79993 8.83799C5.8317 8.6866 5.91436 8.54739 6.03756 8.44147C6.19155 8.30906 6.39602 8.2397 6.60527 8.24889ZM11.0394 5.35412C11.4769 5.35412 11.8316 5.68478 11.8316 6.09267V15.142C11.8316 15.5499 11.4769 15.8806 11.0394 15.8806C10.6019 15.8806 10.2473 15.5499 10.2473 15.142V6.09267C10.2473 5.68478 10.6019 5.35412 11.0394 5.35412ZM15.4281 11.5087C15.8655 11.5087 16.2202 11.8394 16.2202 12.2472V15.1335C16.2202 15.5414 15.8655 15.8721 15.4281 15.8721C14.9906 15.8721 14.6359 15.5414 14.6359 15.1335V12.2472C14.6359 11.8394 14.9906 11.5087 15.4281 11.5087Z"
                          fill="white"
                          fill-opacity="0.92"
                        />
                      </svg>
                    </div>
                    <div className="flex font-semibold">Collection Report</div>
                  </div>
                  <div className="flex flex-1 mr-2 justify-end items-center">
                    <div className="flex flex-row justify-center items-center gap-2">
                      <div className="flex h-fit w-fit p-2 bg-[#665DD9] rounded-md">
                        <svg
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.19885 4.32198H11.6973M9.36428 6.65577L3.53183 6.65495M5.47596 8.98822L3.53183 8.98793M3.53183 0.82251V1.989M9.36428 0.82251V1.989M3.06523 11.3209H9.83087C10.4842 11.3209 10.8108 11.3209 11.0604 11.1938C11.2798 11.082 11.4583 10.9035 11.5701 10.684C11.6973 10.4345 11.6973 10.1078 11.6973 9.45453V3.85538C11.6973 3.20208 11.6973 2.87544 11.5701 2.62591C11.4583 2.40642 11.2798 2.22797 11.0604 2.11614C10.8108 1.989 10.4842 1.989 9.83087 1.989H3.06523C2.41194 1.989 2.08529 1.989 1.83577 2.11614C1.61627 2.22797 1.43783 2.40642 1.32599 2.62591C1.19885 2.87544 1.19885 3.20208 1.19885 3.85538V9.45453C1.19885 10.1078 1.19885 10.4345 1.32599 10.684C1.43783 10.9035 1.61627 11.082 1.83577 11.1938C2.08529 11.3209 2.41194 11.3209 3.06523 11.3209Z"
                            stroke="white"
                            stroke-width="0.627163"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex font-semibold">
                        <h3> {formattedDate} </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center items-center w-full h-full">
                  <div className="flex text-center grid-cols-2 gap-3 justify-center">
                    <div className="border-r-2	">
                      <p className="text-4xl font-bold text-green-500">
                        {data?.all[0]?.count || 0}
                      </p>
                      <p className="w-40">Total No. of Vehicle Count</p>
                    </div>

                    <div>
                      <p className="text-4xl font-bold text-green-500">
                        {data?.all[0]?.sum || 0} /-
                      </p>
                      <p className="w-40">Total Amount of Vehicle Collection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
              <div className="flex flex-col h-[370px] w-[700px] justify-start items-center border-2 shadow-md rounded-md bg-white m-4 relative">
                <div className="flex flex-row w-full h-[50px] justify-between">
                  <div className="flex flex-1 items-center mt-6 ml-5 flex-row gap-1">
                    <div className="flex h-fit w-fit p-2 bg-[#665DD9] rounded-md">
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8817 0.956787C18.8606 0.956787 21.3554 3.26581 21.3554 6.99251V9.23363L21.3482 9.33384C21.2957 9.69433 20.9643 9.97217 20.5633 9.97217H20.5542L20.4291 9.96283C20.2647 9.93808 20.1119 9.86486 19.994 9.75238C19.8466 9.61177 19.7662 9.42169 19.7712 9.22514V6.99251C19.7712 4.0553 18.0321 2.43388 14.8817 2.43388H7.12426C3.96481 2.43388 2.23486 4.0553 2.23486 6.99251V14.2337C2.23486 17.1709 3.97392 18.7838 7.12426 18.7838H14.8817C18.0412 18.7838 19.7712 17.1624 19.7712 14.2337C19.7712 13.8258 20.1258 13.4951 20.5633 13.4951C21.0008 13.4951 21.3554 13.8258 21.3554 14.2337C21.3554 17.9519 18.8789 20.2609 14.8909 20.2609H7.12426C3.12715 20.2609 0.650581 17.9519 0.650581 14.2337V6.99251C0.650581 3.26581 3.12715 0.956787 7.12426 0.956787H14.8817ZM6.60527 8.24889C6.8154 8.25553 7.01408 8.33979 7.15754 8.48309C7.301 8.6264 7.37747 8.817 7.3701 9.01291V15.1845C7.35501 15.5924 6.98813 15.9116 6.55064 15.8975C6.11316 15.8835 5.77073 15.5414 5.78582 15.1335V8.95349L5.79993 8.83799C5.8317 8.6866 5.91436 8.54739 6.03756 8.44147C6.19155 8.30906 6.39602 8.2397 6.60527 8.24889ZM11.0394 5.35412C11.4769 5.35412 11.8316 5.68478 11.8316 6.09267V15.142C11.8316 15.5499 11.4769 15.8806 11.0394 15.8806C10.6019 15.8806 10.2473 15.5499 10.2473 15.142V6.09267C10.2473 5.68478 10.6019 5.35412 11.0394 5.35412ZM15.4281 11.5087C15.8655 11.5087 16.2202 11.8394 16.2202 12.2472V15.1335C16.2202 15.5414 15.8655 15.8721 15.4281 15.8721C14.9906 15.8721 14.6359 15.5414 14.6359 15.1335V12.2472C14.6359 11.8394 14.9906 11.5087 15.4281 11.5087Z"
                          fill="white"
                          fill-opacity="0.92"
                        />
                      </svg>
                    </div>
                    <div className="flex font-semibold">Two Wheeler</div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center items-center w-full h-full">
                  <div className="flex text-center grid-cols-2 gap-3 justify-center">
                    <div className="border-r-2">
                      <p className="text-4xl font-bold text-green-500">
                        {data?.two_wheeler[0]?.count || 0}
                      </p>
                      <p className="w-40">Total No. of Vehicle Count</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-green-500">
                        {data?.two_wheeler[0]?.sum || 0} /-
                      </p>
                      <p className="w-40">Total Amount of Vehicle Collection</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <img className="h-[150px] w-[150px]" src={icon} alt="img" />
                </div>
              </div>

              <div className="flex flex-col h-[370px] w-[700px] justify-start items-center border-2 shadow-md rounded-md bg-white m-4 relative">
                <div className="flex flex-row w-full h-[50px] justify-between">
                  <div className="flex flex-1 items-center mt-6 ml-5 flex-row gap-1">
                    <div className="flex h-fit w-fit p-2 bg-[#665DD9] rounded-md">
                      <svg
                        width="22"
                        height="21"
                        viewBox="0 0 22 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8817 0.956787C18.8606 0.956787 21.3554 3.26581 21.3554 6.99251V9.23363L21.3482 9.33384C21.2957 9.69433 20.9643 9.97217 20.5633 9.97217H20.5542L20.4291 9.96283C20.2647 9.93808 20.1119 9.86486 19.994 9.75238C19.8466 9.61177 19.7662 9.42169 19.7712 9.22514V6.99251C19.7712 4.0553 18.0321 2.43388 14.8817 2.43388H7.12426C3.96481 2.43388 2.23486 4.0553 2.23486 6.99251V14.2337C2.23486 17.1709 3.97392 18.7838 7.12426 18.7838H14.8817C18.0412 18.7838 19.7712 17.1624 19.7712 14.2337C19.7712 13.8258 20.1258 13.4951 20.5633 13.4951C21.0008 13.4951 21.3554 13.8258 21.3554 14.2337C21.3554 17.9519 18.8789 20.2609 14.8909 20.2609H7.12426C3.12715 20.2609 0.650581 17.9519 0.650581 14.2337V6.99251C0.650581 3.26581 3.12715 0.956787 7.12426 0.956787H14.8817ZM6.60527 8.24889C6.8154 8.25553 7.01408 8.33979 7.15754 8.48309C7.301 8.6264 7.37747 8.817 7.3701 9.01291V15.1845C7.35501 15.5924 6.98813 15.9116 6.55064 15.8975C6.11316 15.8835 5.77073 15.5414 5.78582 15.1335V8.95349L5.79993 8.83799C5.8317 8.6866 5.91436 8.54739 6.03756 8.44147C6.19155 8.30906 6.39602 8.2397 6.60527 8.24889ZM11.0394 5.35412C11.4769 5.35412 11.8316 5.68478 11.8316 6.09267V15.142C11.8316 15.5499 11.4769 15.8806 11.0394 15.8806C10.6019 15.8806 10.2473 15.5499 10.2473 15.142V6.09267C10.2473 5.68478 10.6019 5.35412 11.0394 5.35412ZM15.4281 11.5087C15.8655 11.5087 16.2202 11.8394 16.2202 12.2472V15.1335C16.2202 15.5414 15.8655 15.8721 15.4281 15.8721C14.9906 15.8721 14.6359 15.5414 14.6359 15.1335V12.2472C14.6359 11.8394 14.9906 11.5087 15.4281 11.5087Z"
                          fill="white"
                          fill-opacity="0.92"
                        />
                      </svg>
                    </div>
                    <div className="flex font-semibold">Four Wheeler</div>
                  </div>
                </div>
                <div className="flex flex-1 justify-center items-center w-full h-full">
                  <div className="flex text-center grid-cols-2 gap-3 justify-center">
                    <div className="border-r-2">
                      <p className="text-4xl font-bold text-green-500">
                        {data?.four_wheeler[0]?.count || 0}{" "}
                      </p>
                      <p className="w-40">Total No. of Vehicle Count</p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-green-500">
                        {data?.four_wheeler[0]?.sum || 0} /-
                      </p>
                      <p className="w-40">Total Amount of Vehicle Collection</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 p-2">
                  <img className="h-[150px] w-[150px]" src={car} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
