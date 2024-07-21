import SideMenu from "./SideMenu";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div>
      {" "}
      <Header />
      <div className="flex">
        <div className="mt-16 mb-4">
          <SideMenu />
        </div>
        <div className="w-full ml-[25rem] mt-3 ">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
