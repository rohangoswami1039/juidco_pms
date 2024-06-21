import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RMC_logo from "../../../assets/RMC_LOGO.png";
import bus from "../../../assets/icons/Parking/Images/bus.png";
import background_image from "../../../assets/background_image.png";
import two_wheeler from "../../../assets/two 1.jpg";
import four_wheeler from "../../../assets/car 1.jpg";

export default function Report_page() {
  const navigate = useNavigate();
  const location = useLocation();
  const report_data = location.state;

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
        <div className="flex h-[250px] md:h-[100px] pb-8 justify-center items-center md:justify-start rounded-b-[30px] border-b-[3px] border-l-0 border-r-0 shadow-md border-t-0">
          <div className="flex flex-1 flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row">
                <div className="flex mt-8 justify-center items-center">
                  <img
                    src={RMC_logo}
                    alt="RMC Logo"
                    className="flex max-w-full mt-5 ml-5 mr-5 h-auto md:h-1/2"
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
                      className="ml-2 max-w-full h-full md:h-5"
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

        <div className="flex flex-1 mt-5 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-around w-full px-10 gap-4">
              <div className="flex flex-col justify-center items-center bg-white p-2 border-2 border-blue-400 rounded-md shadow-md">
                <img src={two_wheeler} alt="Two Wheeler" />
                <h2 className="text-md text-blue-400 font-bold">Two Wheeler</h2>
                <div className="flex flex-col flex-1 justify-center items-center mt-2">
                  <p>Total Collection</p>
                  <p className="text-lg text-green-800 font-bold">
                    Rs. {report_data?.total_two_wheeler_collection}/-
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-white p-2 border-2 border-blue-400 rounded-md shadow-md">
                <img src={four_wheeler} alt="Two Wheeler" />
                <h2 className="text-md text-blue-400 font-bold">
                  Four Wheeler
                </h2>
                <div className="flex flex-col flex-1 justify-center items-center mt-2">
                  <p>Total Collection</p>
                  <p className="text-lg text-green-800 font-bold">
                    Rs. {report_data?.total_four_wheeler_collection}/-
                  </p>
                </div>
              </div>

              {/* <div className="flex flex-col justify-center items-center bg-gray-200 p-5 rounded-md shadow-md">
                <h2 className="text-xl font-bold">Four-Wheeler Collection</h2>
                <p className="text-lg">
                  {report_data.total_four_wheeler_collection}
                </p>
                </div>
              */}
            </div>
            <div className="flex flex-col justify-center items-center bg-white p-4 rounded-md shadow-md mt-8">
              <h2 className="text-xl text-blue-400 font-bold">Total Amount</h2>
              <p className="text-lg text-green-800 font-bold">
                Rs. {report_data?.total_amount} /-
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full h-fit justify-center ">
          <div className="flex flex-1 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
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
    </div>
  );
}
