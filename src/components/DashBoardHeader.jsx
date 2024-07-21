import React from "react";

function DashboardHeader({ colors }) {
  const name = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "";
  return (
    <div
      style={{
        background: colors?.mainColor,
      }}
      className="h-[20.38%] w-full   rounded-20 flex items-center overflow-hidden relative shadow-nav"
    >
      <div className="h-[65.36%] w-[27.31%]  flex justify-center">
        <div className="h-full  min-w-[69.32%]  flex flex-col justify-between font-Montserrat">
          <h3 className="text-2xl font-bold text-white">DASHBOARD</h3>
          <p className="text-lg font-normal text-white">
            Hello Ashraf
            <br />
            <span className="text-xl font-bold text-white">{name.name}</span>
          </p>
        </div>
      </div>
      {/* <img
        alt="Savy Display Header"
        className="absolute right-[-10%] mix-blend-lighten"
        src={DashboardHeaderImg}
      /> */}
    </div>
  );
}

export default DashboardHeader;
