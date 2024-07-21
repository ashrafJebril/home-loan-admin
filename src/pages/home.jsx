/* eslint-disable no-unused-vars */
import ChartsBox from "../components/Chart/ChartBox";
import ChartBG from "../components/Chart/ChartBG";
import ChartsHeader from "../components/Chart/ChartHeader";
import DashboardHeader from "../components/DashBoardHeader";
import DashboardCard from "../components/DashboardCard";
import NotificationItem from "../components/NotificationItem";
import { connect } from "react-redux";
// import MoneysOutlineIcon from "../assets/icons/NotificationIcon/MoneysOutlineIcon";
// import WalletMinusIcon from "../assets/icons/NotificationIcon/WalletMinusIcon";
import NotificationIcon from "../assets/icons/NotificationIcon";
import { useOutletContext } from "react-router-dom";

const Dashboard = ({ user, userType }) => {
  const colors = {
    mainColor: "#5a3b8d",
  };
  //   const [colors] = useOutletContext();
  return (
    <div className="w-full h-[89.3vh]  flex gap-y-4 flex-col items-center justify-between mt-4  px-1">
      <div
        className="h-[100vh] w-full flex  overflow-hidden justify-center  gap-x-3"
        style={{ borderRadius: "10px" }}
      >
        <div className="w-3/4 h-full flex flex-col justify-between">
          <DashboardHeader colors={colors} />
          <div
            className="h-[76.88%] w-full  rounded-20 shadow-nav flex justify-center items-center"
            style={{
              background: "white",
            }}
          >
            <div className="w-[89.54%] h-[85.63%] flex flex-col justify-between ">
              <ChartsHeader colors={colors} />
              <div className="h-[72.84%] w-full  relative">
                <ChartBG colors={colors} />
                <ChartsBox colors={colors} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-full   flex flex-col justify-between">
          <div className="h-[20.52%] w-full  flex justify-between">
            <DashboardCard colors={colors} />
            <DashboardCard colors={colors} />
          </div>
          <div className="h-[28.47%] w-full bg-white  rounded-20">
            <div className="h-full w-full px-[4.15%] relative shadow-nav rounded-20 bg-white bg-opacity-30 overflow-hidden flex justify-start items-center">
              <div className="h-[79.6%] w-full z-10 flex flex-col justify-between ">
                <div className="h-[33.668%] w-full flex gap-6 ">
                  <div
                    style={{
                      background: colors?.mainColor,
                    }}
                    className="h-full aspect-square rounded-full shadow-md flex justify-center items-center"
                  >
                    {/* <WalletMinusIcon
                      fill={"#fff"}
                      className={"w-[57%] aspect-square"}
                    /> */}
                  </div>
                  <p className="text-base">
                    Statistics <br />
                    <span
                      style={{
                        color: colors?.mainColor,
                      }}
                      className="text-lg font-bold"
                    >
                      Weekly Revenue
                    </span>
                  </p>
                </div>
                <div className="w-full  h-[42.73%] flex gap-x-2 ">
                  <h3
                    style={{
                      color: "#8F90A6",
                    }}
                    st
                    className="text-5xl font-bold "
                  >
                    $10,675
                  </h3>
                  <div className="h-[35.9%] flex justify-center items-center aspect-video bg-red-500 rounded-md shadow-nav text-center text-white">
                    -%10
                  </div>
                </div>
                <span className="text-sm font-normal ">last week</span>
              </div>
              {/* <MoneysOutlineIcon
                fill={"#E4E4EB"}
                className="absolute h-[125%] aspect-square -right-[5%] top-0"
              /> */}
            </div>
          </div>
          <div className="h-[45.67%] w-full rounded-20 flex justify-center items-center bg-white  ">
            <div className="h-[82.54%] w-[88.53%] flex flex-col justify-between">
              <div className="h-[20.24%] w-full flex items-center gap-[4.5%]">
                <div
                  style={{
                    background: colors?.mainColor,
                  }}
                  className="h-full aspect-square rounded-full shadow-md flex justify-center items-center"
                >
                  <NotificationIcon
                    fill={"#fff"}
                    className={"w-[57%] aspect-square"}
                  />
                </div>
                <p className="text-base">
                  Statistics <br />
                  <span
                    style={{
                      color: colors?.mainColor,
                    }}
                    className="text-lg font-bold"
                  >
                    Weekly Revenue
                  </span>
                </p>
              </div>
              <div className="h-[67.67%] w-full  flex flex-col justify-between">
                <div className="h-[26.78%] w-full ">
                  <NotificationItem />
                </div>
                <div className="h-[26.78%] w-full ">
                  <NotificationItem />
                </div>
                <div className="h-[26.78%] w-full ">
                  <NotificationItem />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
