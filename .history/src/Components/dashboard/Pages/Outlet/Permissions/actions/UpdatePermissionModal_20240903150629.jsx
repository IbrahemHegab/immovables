import { Button, Modal, Label, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPermissionModelModel } from "../../../../../store/SharedStore";
import { useState } from "react";

import { Form, Formik, Field } from "formik";
import { updateEmployees } from "../../../../../store/Employees/employeesSlice";

const UpdatePermissionModal = () => {
 
  const { update, data } = useSelector(
    (state) => state.sharedStore.PermissionModel
  );
  const initstate = {
    name: data && data.name ? data.name : "---",
    username: data && data.username ? data.username : "---",
    password: data && data.password ? data.password : "---",
    phone: data && data.phone ? data.phone : "---",
    identity: data && data.identity ? data.identity : "---",
    role: data && data.role ? data.role : "---",
    id: data && data._id ? data._id : "---",
  };

  const dispatch = useDispatch();

  const [selectedRole, setSelectedRole] = useState(data?.role);

  const submit = (values) => {
    dispatch(updateEmployees(values)).then(() =>  dispatch(getEmployees()););
  };

  return (
    <Modal show={update}>
      <Formik initialValues={initstate} onSubmit={submit}>
        {() => (
          <Form>
            <Modal.Header
              onClick={() => {
                dispatch(setOpenPermissionModelModel(false));
              }}
            ></Modal.Header>
            <Modal.Body>
              <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 grid-rows-1 gap-3">
                <div className="">
                  <div className="mb-2 block p-1">
                    <Label htmlFor="small" value="الاسم" />
                  </div>
                  <Field
                    id="small"
                    type="text"
                    name="name"
                    sizing="sm"
                    placeholder="اسم المستخدم"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                  />
                </div>
                <div>
                  <div className="mb-2 block p-1">
                    <Label htmlFor="base" value="اسم المستخدم " />
                  </div>
                  <Field
                    id="base"
                    type="text"
                    name="username"
                    sizing="sm"
                    placeholder="اسم المستخدم "
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                  />
                </div>
                <div>
                  <div className="mb-2 block p-1">
                    <Label htmlFor="base" value="كلمه السر" />
                  </div>
                  <Field
                    id="base"
                    type="text"
                    name="password"
                    sizing="sm"
                    placeholder="كلمه السر"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                  />
                </div>
                <div>
                  <div className="mb-2 block p-1">
                    <Label htmlFor="base" value="التليفون" />
                  </div>
                  <Field
                    id="base"
                    type="text"
                    name="phone"
                    sizing="sm"
                    placeholder="التليفون"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                  />
                </div>
                <div>
                  <div className="mb-2 block p-1">
                    <Label htmlFor="base" value="رقم الهوية" />
                  </div>
                  <Field
                    id="base"
                    type="text"
                    name="identity"
                    sizing="sm"
                    placeholder="رقم الهوية"
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                  />
                </div>

                <div>
                  <div className="mb-2 flex justify-around p-1" dir="rtl">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="customer">المسمي الوظيفي</Label>
                    </div>
                  </div>

                  <div className="flex justify-around bg-gray-200 p-2 rounded-lg">
                    <Dropdown
                      label={
                        selectedRole
                          ? selectedRole
                          : initstate.role === "manager"
                          ? "مدير"
                          : initstate.role === "supervisor"
                          ? "مشرف"
                          : initstate.role === "accountant"
                          ? "محاسب"
                          : "مسوق"
                      }
                      inline
                    >
                      <Dropdown.Item onClick={() => setSelectedRole("مدير")}>
                        مدير
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setSelectedRole("مشرف");
                        }}
                      >
                        مشرف
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setSelectedRole("محاسب")}>
                        محاسب
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setSelectedRole("مسوق")}>
                        مسوق
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="gap-2">
              <Button type="submit">اضافه</Button>
              <Button
                color="gray"
                onClick={() => {
                  dispatch(setOpenPermissionModelModel(false));
                }}
              >
                اغلاق
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default UpdatePermissionModal;
