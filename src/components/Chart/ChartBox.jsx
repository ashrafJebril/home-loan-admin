import React from "react";
import ChartColumn from "./ChartColumn";

function ChartsBox({ colors }) {
  return (
    <div className="w-full h-full absolute top-0 left-0  flex justify-end">
      <div className="w-[86.7%] h-full  flex  justify-between">
        <div className="h-full w-[3.58%]">
          <ChartColumn percentage={50} day={"MO"} colors={colors} />
        </div>
        <div className="h-full w-[3.58%]">
          <ChartColumn percentage={25} day={"MO"} colors={colors} />
        </div>
        <div className="h-full w-[3.58%]">
          <ChartColumn percentage={70} day={"MO"} colors={colors} />
        </div>
        <div className="h-full w-[3.58%]">
          <ChartColumn percentage={30} day={"MO"} colors={colors} />
        </div>
        <div className="h-full w-[3.58%]">
          <ChartColumn percentage={50} day={"MO"} colors={colors} />
        </div>
        <div className="h-full w-[3.58%]">
          <ChartColumn percentage={50} day={"MO"} colors={colors} />
        </div>
        <div className="h-full w-[3.58%]">
          <ChartColumn percentage={100} day={"MO"} colors={colors} />
        </div>
      </div>
    </div>
  );
}

export default ChartsBox;
