import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default function MaximizableDemo({ visible, setShowModal }) {
  return (
    <div className="card flex justify-content-center">
      <Dialog
        header="Lead Data"
        visible={visible}
        maximizable
        style={{ width: "50vw", height: "50vh" }}
        onHide={() => {
          if (!visible) return;
          setShowModal(false);
        }}
      >
        <div>
          <div className="grid grid-cols-5 gap-y-6">
            <div className="flex">
              <div className="text-main font-bold mr-1">Lead</div>{" "}
              <div>Lead</div>
            </div>
            <div className="flex">
              <div className="text-main font-bold mr-1">Type</div>{" "}
              <div>Loan</div>
            </div>
            <div className="flex">
              <div className="text-main font-bold mr-1">Usage</div>{" "}
              <div>used</div>
            </div>
            <div className="flex">
              <div className="text-main font-bold mr-1">Term</div>{" "}
              <div> 30 years</div>
            </div>
            <div className="flex">
              <div className="text-main font-bold mr-1">Progress</div>{" "}
              <div> initial</div>
            </div>
            <div className="flex">
              <div className="text-main font-bold mr-1">Amount</div>{" "}
              <div> $300,000</div>
            </div>
            <div className="flex">
              <div className="text-main font-bold mr-1">Balloon Residual</div>{" "}
              <div> $50,000</div>
            </div>
            <div className="flex">
              <div className="text-main font-bold mr-1">Situation</div>{" "}
              <div> approved</div>
            </div>
            <div className="flex">
              <div className="text-main font-bold mr-1">SaleType</div>{" "}
              <div> new</div>
            </div>
            <div className="flex">
              <div className="text-main font-bold mr-1">Lender</div>{" "}
              <div> Bank A</div>
            </div>
          </div>
        </div>
        <p className="m-0 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex mt-6">
          <div className="text-main font-bold mr-1 ">Lender Documents</div>{" "}
          <div className="w-64 h-36 border border-black">
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              className="h-36 w-64"
            ></img>{" "}
          </div>
        </div>
      </Dialog>
    </div>
  );
}
