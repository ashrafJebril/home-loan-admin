import React from "react";

function NotificationItem() {
  return (
    <div
      style={{
        color: "#8F90A6",
      }}
      className="h-full w-full flex items-center justify-between"
    >
      <img
        alt="user profile"
        src="https://www.shutterstock.com/image-photo/head-shot-portrait-attractive-young-600w-1944828682.jpg"
        className="h-full aspect-square rounded-full object-cover"
      />
      <h3 className="text-sm font-bold border-r-2 pr-2">
        <div> Home Loan</div>

        <div className="text-xs font-normal">test@email.com</div>
      </h3>
      <h3 className="text-xs  border-r-2 pr-2 ">
        Invited a new broker <br />{" "}
        <span className="text-[10px] font-normal">05 Jan 2023 at 03:30PM</span>
      </h3>
      <div className="h-full aspect-video flex  items-center ">
        <p className="bg-green-200  px-3 py-2 text-[#5A3B8C] font-bold rounded-full flex text-xs justify-center items-center ">
          Active
        </p>
      </div>
    </div>
  );
}

export default NotificationItem;
