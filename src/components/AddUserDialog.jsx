import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function HeadlessDemo({ visible, setVisible, func }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dataWithRole = { ...data, role: "broker" }; // Add role to the data
    func(dataWithRole);
    setVisible(false);
  };

  return (
    <div className="card flex justify-content-center ">
      <Dialog
        className="bg-red-400"
        visible={visible}
        modal
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        style={{ width: "20vw" }} // Set custom width here
        content={({ hide }) => (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col px-8 py-5 gap-4 bg-white rounded-lg w-full"
          >
            <div className="gap-2">
              <label htmlFor="username" className="text-primary-50  text-main">
                Username
              </label>
              <input
                {...register("name", { required: "Username is required" })}
                className="border w-full h-10 px-2"
              />
              {errors.username && (
                <span className="text-red-500 text-sm w-1/2">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="gap-2">
              <label htmlFor="email" className="text-primary-50 text-main">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid",
                  },
                })}
                className="border w-full h-10 px-2"
              />
              {errors.email && (
                <span className="text-red-500 text-sm w-1/2">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="gap-2">
              <label htmlFor="password" className="text-primary-50 text-main">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters px-2",
                  },
                })}
                type="password"
                className="border w-full h-10"
              />
              {errors.password && (
                <span className="text-red-500 text-sm w-1/2">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex align-items-center gap-2 mt-4">
              <Button
                label="Add"
                type="submit"
                text
                className="p-3 w-full text-primary-50 border-1 bg-main text-white border-white-alpha-30 hover:bg-red"
              ></Button>
              <Button
                label="Cancel"
                onClick={() => setVisible(false)}
                text
                className="p-3 w-full text-primary-50 border-1 bg-main text-white border-white-alpha-30 hover:bg-white-alpha-10"
              ></Button>
            </div>
          </form>
        )}
      ></Dialog>
    </div>
  );
}
