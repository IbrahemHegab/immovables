import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiTable,
  HiUser,
  HiCheckCircle,
} from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenCustomerModel,
  setOpenEmployeesModel,
  setOpenGalleryModel,
  setOpenPermissionModelModel,
} from "../../../store/SharedStore";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const dispatch = useDispatch();
  const { SideBar } = useSelector((state) => state.sharedStore);
  const auth = useSelector((state) => state.auth);
  return (
    <div
      className={`xl:col-span-2 lg:col-span-2 md:col-span-3 xl:static lg:static md:static h-screen ${
        !SideBar ? "sm:hidden md:block hidden" : "fixed lg:static md:static"
      }  z-10 col-span-10 bg-gray-900 `}
    >
      {" "}
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className=" w-100"
      >
        <Sidebar.Items className="mt-16">
          <Sidebar.ItemGroup>
            <Sidebar.Collapse
              icon={HiChartPie}
              label="ادارة العملاء"
              className="bg-gray-300"
            >
              <Sidebar.Item to="/dashboard/customer" as={NavLink} icon={HiUser}>
                ادارة العملاء
              </Sidebar.Item>

              <Sidebar.Item
                icon={FaPlus}
                onClick={() => dispatch(setOpenCustomerModel(true))}
              >
                اضافه العملاء
              </Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse
              icon={HiCheckCircle}
              label="ادارة العقود"
              className="bg-gray-300"
            >
              <Sidebar.Item href="#">ادارة العقود</Sidebar.Item>
            </Sidebar.Collapse>

            <Sidebar.Collapse
              icon={HiInbox}
              label="ادارة الموظفين"
              className="bg-gray-300"
            >
              <NavLink
                to="employees"
                className="grid grid-cols-1 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
              >
                ادارة الموظفين
              </NavLink>
              {auth.user?.role === "manager" && (
                <div
                  onClick={() => dispatch(setOpenEmployeesModel(true))}
                  className="grid grid-cols-3 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
                >
                  <span className="col-span-2">اضافه موظف</span>
                  <span className="m-auto">
                    <FaPlus className=" text-gray-500" />
                  </span>
                </div>
              )}

              <NavLink
                to="employees/myTask"
                className="grid grid-cols-3 p-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
              >
                المهام
              </NavLink>
            </Sidebar.Collapse>

            <Sidebar.Collapse
              icon={HiInbox}
              label="الكتالوج"
              className="bg-gray-300"
            >
              <Sidebar.Item as={NavLink} to="gallery" className="bg-gray-200">
                اداره الوحدات
              </Sidebar.Item>

              <NavLink
                to="/dashboard/villa_200/gallery"
                className="grid grid-cols-3 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
              >
                <span className="col-span-2">فيلا 200-295</span>
                <span
                  className="m-auto"
                  onClick={() =>
                    dispatch(
                      setOpenGalleryModel({
                        status: true,
                        data: { kind: "villa-200-295" },
                      })
                    )
                  }
                >
                  {auth.user?.role === "manager" && (
                    <FaPlus className=" text-gray-500" />
                  )}
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/villa_300/gallery"
                className="grid grid-cols-3 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
              >
                <span className="col-span-2">فيلا 300-450</span>
                <span
                  className="m-auto"
                  onClick={() =>
                    dispatch(
                      setOpenGalleryModel({
                        status: true,
                        data: { kind: "villa-300-450" },
                      })
                    )
                  }
                >
                  {auth.user?.role === "manager" && (
                    <FaPlus className=" text-gray-500" />
                  )}
                </span>
              </NavLink>
              <NavLink
                to="/dashboard/apartment/gallery"
                className="grid grid-cols-3 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
              >
                <span className="col-span-2">شقق</span>
                <span
                  className="m-auto"
                  onClick={() =>
                    dispatch(
                      setOpenGalleryModel({
                        status: true,
                        data: { kind: "apartment" },
                      })
                    )
                  }
                >
                  {auth.user?.role === "manager" && (
                    <FaPlus className=" text-gray-500" />
                  )}
                </span>
              </NavLink>
            </Sidebar.Collapse>
            {auth.user?.role !== "supervisor" && (
              <Sidebar.Collapse
                icon={HiTable}
                label="الخزنه"
                className="bg-gray-300"
              >
                <Sidebar.Item href="#">ادارة الخزنه</Sidebar.Item>
                <Sidebar.Item href="#">رواتب الموظفين</Sidebar.Item>
              </Sidebar.Collapse>
            )}

            {auth.user?.role !== "manager" && (
              <Sidebar.Collapse
                icon={HiUser}
                label="الصلاحيات"
                className="bg-gray-300"
              >
                <Sidebar.Item
                  className="bg-gray-200"
                  as={NavLink}
                  to="permisstion"
                >
                  اداره الصلاحيات
                </Sidebar.Item>

                <div
                  onClick={() => dispatch(setOpenPermissionModelModel(true))}
                  className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
                >
                  <span className="bg-gray-200">اضافه صلاحيه</span>
                  <span className="m-auto">
                    <FaPlus className=" text-gray-500" />
                  </span>
                </div>
                <Sidebar.Item className="bg-gray-200" href="#">
                  تعديل مستخدم
                </Sidebar.Item>
              </Sidebar.Collapse>
            )}

            <Sidebar.Item
              to="/auth"
              as={NavLink}
              icon={HiArrowSmRight}
              className="bg-yellow-700 text-gray-100 hover:bg-red-800"
            >
              تسجيل خروج
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Aside;
