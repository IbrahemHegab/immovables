import { Button, Modal, Label, Dropdown, Radio } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPermissionModelModel } from "../../../../../store/SharedStore";
import { useState } from "react";
import { updateCustomer } from "../../../../../store/Customers/customerSlice";

import { Form, Formik, Field } from "formik";

const UpdatePermissionModal = () => {
  const [useID, setUserID] = useState(null);
  const { update, data } = useSelector(
    (state) => state.sharedStore.PermissionModel
  );
  const customer = useSelector((state) => state.customer.data);
  const employees = useSelector((state) => state.employees.data);

  const dispatch = useDispatch();

  const [userType, setUserType] = useState("employees");
  const handleSelectUser = (ele) => {
    setUserID(ele);
  };
  const submit = (values) => {
    values.ID = useID._id;

    dispatch(updateCustomer(values));
  };
  console.log(data);
  const initstate = {
    name: data && data.name ? data.name : "---",
    username: data && data.username ? data.username : "---",
    password: data && data.password ? data.password : "---",
    phone: data && data.phone ? data.phone : "---",
    identity: data && data.identity ? data.identity : "---",
    role: data && data.role ? data.role : "---",
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
                    name="phone"
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

                  <div className="flex justify-around bg-gray-200 p-1 rounded-lg">
                    <Dropdown label={useID?.name || "العملاء"} inline>
                      <Dropdown.Item
                        value={customer._id}
                        key={customer._id}
                        onClick={() => handleSelectUser(customer)} // استخدم onClick بدلًا من onChange
                      >
                        {customer.name}
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
