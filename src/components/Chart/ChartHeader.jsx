import React from "react";
import MoneySend from "../../assets/icons/moneySend";

function ChartsHeader({ colors }) {
  return (
    <div className="h-[16.435%] w-full  flex justify-between items-center">
      <div className="w-[38.44%] h-full  flex justify-between">
        <div
          style={{
            background: colors?.mainColor,
          }}
          className="h-full aspect-square rounded-full shadow-md flex justify-center items-center"
        >
          <MoneySend fill={"#fff"} className={"w-[57%] aspect-square"} />
        </div>
        <div className="min-w-[62%] h-full flex flex-col justify-center items-start">
          <p className="text-base text-black">Statistics</p>
          <p
            style={{
              color: colors?.mainColor,
            }}
            className=" text-lg font-bold "
          >
            Revenue Breakdown
          </p>
        </div>
      </div>
      <select
        defaultValue={"Last week"}
        className="h-[47%] w-[18.5%] rounded-lg border border-gray-300 bg-transparent text-center"
      >
        <option value={"Last week"}>Last week</option>
      </select>
    </div>
  );
}

export default ChartsHeader;
