import { useEffect } from "react";
import { connect } from "react-redux";

function ChartColumn({ percentage, day, colors }) {
  useEffect(() => {}, []);
  return (
    <div className="w-full h-full flex flex-col justify-between items-center">
      <div className="w-full h-[89%] rounded-full bg-gray-100 flex items-end">
        <div
          style={{
            height: `${percentage}%`,
            background: colors?.mainColor,
          }}
          className={`w-full rounded-full`}
        />
      </div>
      <p className="text-lg text-black font-Montserrat">{day}</p>
    </div>
  );
}

export default ChartColumn;
