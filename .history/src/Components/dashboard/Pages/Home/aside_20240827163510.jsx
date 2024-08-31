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
import { useDispatch } from "react-redux";
import {
  setOpenCustomerModel,
  setOpenEmployeesModel,
  setOpenGalleryModel,
  setOpenPermissionModelModel,
} from "../../../store/SharedStore";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const dispatch = useDispatch();
  
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="h-screen fixed">
      <Sidebar.Items className="mt-16">
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            icon={HiChartPie}
            label="ادارة العملاء"
            className="bg-gray-300"
          >
            {/* <NavLink to="/dashboard/customer">
              <Sidebar.Item icon={HiUser}>ادارة العملاء</Sidebar.Item>
            </NavLink> */}
            <Sidebar.Item
              href="#"
              icon={HiUser}
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
            {/* <NavLink
              to="employees"
              className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
            >
              ادارة الموظفين
            </NavLink> */}
            <div
              onClick={() => dispatch(setOpenEmployeesModel(true))}
              className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
            >
              <span>اضافه موظف</span>
              <span className="m-auto">
                <FaPlus className="bg-white text-gray-400" />
              </span>
            </div>
            {/* <NavLink
              to="employees/myTask"
              className="grid grid-cols-2 p-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
            >
              المهام
            </NavLink> */}
          </Sidebar.Collapse>

          <Sidebar.Collapse
            icon={HiInbox}
            label="الكتالوج"
            className="bg-gray-300"
          >
            {/* <NavLink to="gallery">
              <Sidebar.Item className="bg-gray-200">اداره الوحدات</Sidebar.Item>
            </NavLink> */}
            {/* <NavLink
              to="/dashboard/villa_200/gallery"
              className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
            >
              <span>فيلا 200-295</span>
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
                <FaPlus className="bg-white text-gray-400" />
              </span>
            </NavLink> */}
            <NavLink
              to="/dashboard/villa_300/gallery"
              className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
            >
              <span>فيلا 300-450</span>
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
                <FaPlus className="bg-white text-gray-400" />
              </span>
            </NavLink>
            <NavLink
              to="/dashboard/apartment/gallery"
              className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
            >
              <span>شقق</span>
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
                <FaPlus className="bg-white text-gray-400" />
              </span>
            </NavLink>
          </Sidebar.Collapse>

          <Sidebar.Collapse
            icon={HiTable}
            label="الخزنه"
            className="bg-gray-300"
          >
            <Sidebar.Item href="#">ادارة الخزنه</Sidebar.Item>
            <Sidebar.Item href="#">رواتب الموظفين</Sidebar.Item>
          </Sidebar.Collapse>

          <Sidebar.Collapse
            icon={HiUser}
            label="الصلاحيات"
            className="bg-gray-300"
          >
            <NavLink to="permisstion">
              <Sidebar.Item className="bg-gray-200">اداره الصلاحيات</Sidebar.Item>
            </NavLink>
            <div
              onClick={() => dispatch(setOpenPermissionModelModel(true))}
              className="grid grid-cols-2 py-2 content-center cursor-pointer bg-gray-200 text-center items-center rounded-lg"
            >
              <span className="bg-gray-200">اضافه صلاحيه</span>
              <span className="m-auto">
                <FaPlus className="bg-white text-gray-400" />
              </span>
            </div>
            <Sidebar.Item className="bg-gray-200" href="#">
              تعديل مستخدم
            </Sidebar.Item>
          </Sidebar.Collapse>

          <NavLink to="/auth">
            <Sidebar.Item
              href="#"
              icon={HiArrowSmRight}
              className="bg-yellow-700 text-gray-100 hover:bg-red-800"
            >
              تسجيل خروج
            </Sidebar.Item>
          </NavLink>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default Aside;
