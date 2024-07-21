import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

import { motion } from "framer-motion";
import loginImg from "../assets/images/main.jpg";
import { ImageZoomAnimation } from "../utils/motion";
import { useNavigate } from "react-router-dom";

const Login = ({ login, logged }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [logged]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="flex h-screen p-8 gap-x-44">
      <div
        style={{
          filter:
            "drop-shadow(394px 394px 223px rgba(39, 0, 97, 0.01)) drop-shadow(221px 222px 188px rgba(39, 0, 97, 0.05)) drop-shadow(98px 98px 139px rgba(39, 0, 97, 0.09)) drop-shadow(25px 25px 77px rgba(39, 0, 97, 0.1)) drop-shadow(0px 0px 0px rgba(39, 0, 97, 0.1))",
        }}
        className="h- w-1/2 bg-red-400  rounded-2xl overflow-hidden relative shadow-md"
      >
        <motion.img
          animate={ImageZoomAnimation}
          src={loginImg}
          alt="login"
          className="h-full  rounded-xl z-10 absolute  object-cover"
        />
        <div className="loginGradiant h-3/4 w-full absolute bottom-0 z-20 flex items-end justify-between p-16 ">
          <div className="flex flex-col  w-2/5">
            <h1 className="text-3xl font-black text-white ">Home Loan</h1>
            <h1 className="text-2xl font-normal text-white ">
              MANAGMENT PLATFORM{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="h-full justify-center  w-1/4 flex  flex-col items-start  ">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-black text-purple-700 font-Montserrat">
            WELCOME
          </h1>
          <p>
            PURE SALES POWER <br />
            The premier advertising platform for digital signage owners and
            their advertisers.
          </p>
          <h1 className="text-3xl font-black">Login</h1>
        </div>
        <div className=" w-full ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                placeholder="Email"
                className="border w-full mt-6 shaodw bg-white h-10 px-2 rounded-lg "
                id="email"
                {...register("email", { required: true })}
              />
              {errors.username && <span>This field is required</span>}
            </div>
            <div>
              <input
                className="border w-full shaodw mt-6 bg-white h-10 px-2 rounded-lg "
                placeholder="Password"
                id="password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="w-full h-14 mt-9 bg BTN-purple-gradient rounded-2xl text-white font-bold font-Montserrat"
            >
              Login Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  login: (data) => dispatch.user.login(data),
});
const mapState = (state) => ({
  logged: state.user.logged,
});
export default connect(mapState, mapDispatch)(Login);
