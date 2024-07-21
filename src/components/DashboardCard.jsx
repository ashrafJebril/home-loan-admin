import React from "react";
// import MonitorIcon from "../../Assets/icons/IconsJsx/MonitorIcon";

function DashboardCard({ colors }) {
  return (
    <div
      style={{
        background: "white",
      }}
      className="w-[47.9%] h-full rounded-20  overflow-hidden  shadow-nav relative"
    >
      <div className="w-full h-full  absolute top-0 left-0 z-10 flex justify-center items-center">
        <div className="w-[77.45%]  h-[78.33%]  flex flex-col justify-between">
          <div className="w-full flex h-[38.29%]  items-center gap-x-2">
            <div
              style={{
                background: colors?.mainColor,
              }}
              className="h-full aspect-square rounded-full shadow-md flex justify-center items-center"
            >
              {/* <MonitorIcon fill={"#fff"} className={"w-[57%] aspect-square"} /> */}
            </div>
            <p className="text-xs">
              Statistics <br />
              <span
                style={{
                  color: colors?.mainColor,
                }}
                className="text-sm font-bold"
              >
                Users
              </span>
            </p>
          </div>
          <div className="h-[51.77%] w-full flex flex-col">
            <p className="text-5xl font-bold text-gray-400 ">262</p>
            <p className="text-xs text-black font-normal">Registered</p>
          </div>
        </div>
      </div>

      {/* <MonitorIcon
        fill={"#E4E4EB"}
        className={"absolute h-[115%] w-[115%]  -right-[35%] -bottom-[25%] "}
      /> */}
    </div>
  );
}

export default DashboardCard;
//this the page for
