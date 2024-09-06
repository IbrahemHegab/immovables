import logo from "../../assets/logo.png";
import preson from "../../assets/available/preson.png";
import OutletDashboard from "./Pages/Home/Outlet";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "../store/SharedStore";
import { Dropdown } from "flowbite-react";
import { NavLink } from "react-router-dom";
import {
  deleteNotifcation,
  getEmployees,
} from "../store/Employees/employeesSlice";
import { useEffect } from "react";
import { getMe } from "../store/auth/authSlice";
import ToastModal from "../utils/ToastModal";
import { getCustomer } from "../store/Customers/customerSlice";

// import Aside from "./Pages/aside";
const Dashboard = () => {
  const { SideBar, status } = useSelector((state) => state.sharedStore);
  const { user, token } = useSelector((state) => state.auth);
  const showNotifcationTask = (ele) => {
    dispatch(
      deleteNotifcation({
        id: ele._id,
      })
    );
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
    dispatch(getCustomer());
    dispatch(getEmployees());
  }, [dispatch, token]);
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between md:mx-5">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={() => {
                  dispatch(setOpenSideBar(!SideBar));
                }}
                className=" items-center p-2 text-sm text-gray-500 rounded-lg sm:block block xl:hidden lg:hidden md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <NavLink to="/" className="flex ms-2 md:me-24">
                <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
              </NavLink>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div className="flex">
                  <Dropdown
                    label={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-5 cursor-pointer"
                        width={20}
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                      </svg>
                    }
                    arrowIcon={false}
                    inline
                  >
                    <Dropdown.Header>
                      <span className="block truncate text-sm font-medium">
                        الاشعارات بالمهمات المرسله اليك
                      </span>
                    </Dropdown.Header>

                    {user
                      ? user.notifications.map((e, inx) => (
                          <Dropdown.Item
                            value={e._id}
                            key={inx}
                            className="bg-gray-300 p-3"
                            // as={NavLink}
                            // to={"employees/myTask"}
                            onClick={() => showNotifcationTask(e)}
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="mx-2 cursor-pointer"
                              width={20}
                              viewBox="0 0 448 512"
                            >
                              <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
                            </svg>
                            {`تم استلام مهمه جديده من:- ${e.assignedBy}`}
                          </Dropdown.Item>
                        ))
                      : ""}

                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to={"employees/myTask"}>
                      الذهاب الي المهمات
                    </Dropdown.Item>
                  </Dropdown>
                  <div className="flex flex-col justify-center items-center">
                    <div className="relative">
                      <img
                        className="rounded-full"
                        style={{ width: "40px", height: "40px" }}
                        src={preson}
                        alt="user photo"
                      />
                      <span className="absolute bg-green-600 rounded-full w-5 h-5 text-gray-50 flex items-center justify-center text-xs" style={{top:"-10px" , right:"-10px"}}>
                        10
                      </span>
                    </div>

                    <span>{user?.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <OutletDashboard />
      {status.toggel ? <ToastModal msg={status.msg} /> : null}
    </div>
  );
};

export default Dashboard;
