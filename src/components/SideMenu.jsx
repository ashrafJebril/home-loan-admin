import { useNavigate } from "react-router-dom";
import Leads from "../assets/icons/Leads.jsx";
import { useDispatch } from "react-redux";

import Users from "../assets/icons/User.jsx";
import Dashboard from "../assets/icons/DashBord.jsx";

import LogoutIcon from "../assets/icons/LogoutIcon";
import Content from "../assets/icons/Content.jsx";
import Account from "../assets/icons/Account";
import AccountManagment from "../assets/icons/AccountManagment.jsx";

const SideMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch.user.logoutReducer();

    navigate("/login");
  };

  const admin = [
    {
      title: "Main Menu",
      userType: "",
      sublinks: [
        {
          title: "Dashboard",
          icon: <Dashboard className={"w-4 h-4"} fill={"gray"} />,
          userType: "",
          link: "/",
        },
        {
          title: "Users",
          icon: <Users className={"w-4 h-4"} fill={"gray"} />,
          userType: "Admin",
          link: "/users",
        },
        {
          title: "Leads",
          userType: "",
          icon: <Leads className={"w-4 h-4"} fill={"gray"} />,
          link: "/leads",
        },
        {
          title: "Content Management",
          userType: "",
          icon: <Content className={"w-4 h-4"} fill={"gray"} />,
          link: "/reports",
        },
      ],
    },
    {
      title: "Settings Menu",
      userType: "",
      sublinks: [
        {
          title: "Account Management",
          icon: <Account className={"w-4 h-4"} fill={"gray"} />,
          userType: "",
          link: "/",
        },
        {
          title: "Account Settings",
          icon: <AccountManagment className={"w-4 h-4"} fill={"gray"} />,
          userType: "Admin",
          link: "/users",
        },
      ],
    },
  ];

  return (
    <div
      className="w-[24rem] fixed bg-white flex flex-col justify-between shadow rounded-[20px] p-8 pl-12"
      style={{ height: "calc(100% - 8rem)", bottom: "8rem", top: "6.5rem" }}
    >
      <div className="mt-8">
        <span className="text-main text-3xl font-bold">Welcome To</span>
        <br></br> <span className="text-lg">YOUR DASHBOARD</span>
        <div>
          {admin.map((mainMenu) => {
            const [firstWord, ...rest] = mainMenu.title.split(" ");
            return (
              <div key={mainMenu.title} className="mt-6">
                <div className="flex gap-x-1">
                  <div className="font-[900] global-font-bold ">
                    {firstWord}
                  </div>{" "}
                  {rest.join(" ")}
                </div>
                <div className="-mt-3">___</div>
                <div className="flex flex-col gap-y-2 mt-3">
                  {mainMenu.sublinks.map((link) => {
                    return (
                      <div
                        className="text-sm flex gap-x-1 cursor-pointer"
                        key={link.title}
                        onClick={() => navigate(link.link)}
                      >
                        <div> {link.icon}</div> <div>{link.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{ color: "#D92C20" }}
        className=" mt-24 w-[100%] self-center flex  justify-between cursor-pointer"
        onClick={() => logout()}
      >
        <div>Logout</div>
        <LogoutIcon fill={"rgb(217, 44, 32)"} className={"h-6 aspect-square"} />
      </div>
    </div>
  );
};

export default SideMenu;
