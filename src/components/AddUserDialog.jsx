import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function HeadlessDemo({ visible, setVisible }) {
  return (
    <div className="card flex justify-content-center">
      <Dialog
        visible={visible}
        modal
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        content={({ hide }) => (
          <div className="flex flex-col  px-8 py-5 gap-4 bg-white rounded-lg">
            <div className="  gap-2">
              <label htmlFor="username" className="text-primary-50  text-main">
                Username
              </label>
              <input className="border w-full h-10"></input>
            </div>
            <div className="  gap-2">
              <label htmlFor="username" className="text-primary-50  text-main">
                Email
              </label>
              <input className="border w-full h-10"></input>
            </div>
            <div className="  gap-2">
              <label htmlFor="username" className="text-primary-50  text-main">
                Password
              </label>
              <input className="border w-full h-10"></input>
            </div>
            <div className="flex align-items-center gap-2 mt-4">
              <Button
                label="Add"
                onClick={(e) => setVisible(false)}
                text
                className="p-3 w-full text-primary-50  border-1 bg-main text-white border-white-alpha-30 hover:bg-red"
              ></Button>
              <Button
                label="Cancel"
                onClick={(e) => hide(e)}
                text
                className="p-3 w-full text-primary-50 border-1 bg-main text-white border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
            </div>
          </div>
        )}
      ></Dialog>
    </div>
  );
}
