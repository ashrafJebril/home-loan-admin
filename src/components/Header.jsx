import PersonIcon from "../assets/icons/UserProfile";
import NotificationsIcon from "../assets/icons/NotificationIcon";
const Header = () => {
  return (
    <div className="h-16 w-full flex items-center justify-end bg-white rounded-[20px] px-7">
      <div className="flex items-center gap-x-4 justify-end min-w-[31%] ">
        <div className="flex items-center gap-x-2 flex-r">
          <div className="w-8 h-8 rounded-full flex justify-center items-center">
            <NotificationsIcon className={"w-6 h-6"} fill={"#5a3b8d"} />
            <div className="bg-red-600 w-4 h-4 -mt-4 -mr-4 rounded-full absolute flex justify-center items-center text-white text-xs font-bold">
              2
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="border p-1 border-gray-400 rounded-full">
            <PersonIcon className={"w-4 h-4"} fill={"#5a3b8d"} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
