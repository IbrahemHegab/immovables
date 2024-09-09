import {
  Button,
  Modal,
  Label,
  
  Dropdown,
  Radio,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPermissionModelModel } from "../../../../../store/SharedStore";
import { useEffect, useState } from "react";
import { getCustomer, updateCustomer } from "../../../../../store/Customers/customerSlice";
import {
  getEmployees,
  updateEmployees,
} from "../../../../../store/Employees/employeesSlice";
import { Form, Formik,Field } from "formik";

const CreateModalPermission = () => {
  const initstate = {
    username: "",
    password: "",
  };

  const [useID, setUserID] = useState(null);
  const { PermissionModel } = useSelector((state) => state.sharedStore);
  const customer = useSelector((state) => state.customer.data);
  const employees = useSelector((state) => state.employees.data);

  const dispatch = useDispatch();

  const [userType, setUserType] = useState("employees");
  const submit = (values) => {
    values.id = useID;


    dispatch(updateCustomer(values));
  };
  useEffect(() => {
    dispatch(getCustomer());
    dispatch(getEmployees());
  }, [dispatch]);
  console.log(useID);

  return (
    <Modal show={PermissionModel}>
      <Formik initialValues={initstate} onSubmit={submit}>
        {({ setFieldValue }) => (
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
                    <Label htmlFor="small" value="اسم المستخدم" />
                  </div>
                  <Field
                    id="small"
                    type="text"
                    name="username"
                    sizing="sm"
                    placeholder="اسم المستخدم"
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
                  />
                </div>

                <div>
                  <div className="mb-2 flex justify-around p-1" dir="rtl">
                    <div className="flex items-center p-1 gap-2">
                      <Radio
                        id="employees"
                        name="userType"
                        value="employees"
                        defaultChecked
                        onChange={() => setUserType("employees")}
                      />
                      <Label htmlFor="employees">موظف</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="customer"
                        name="userType"
                        value="customer"
                        onChange={() => setUserType("customer")}
                      />
                      <Label htmlFor="customer">عميل</Label>
                    </div>
                  </div>

                  <div className="flex justify-around bg-gray-200 p-1 rounded-lg">
                    {userType === "employees" && (
                      <Dropdown label="الموظفين" inline>
                        {employees.length > 0 ? (
                          employees
                            .filter(
                              (employee) =>
                                !employee.password && !employee.username
                            )
                            .map((employee) => (
                              <Dropdown.Item
                                value={employee._id}
                                key={employee.id}
                                onClick={() => setUserID(employee._id)}
                              >
                                {employee.name}
                              </Dropdown.Item>
                            ))
                        ) : (
                          <Dropdown.Item>لا يوجد موظفين</Dropdown.Item>
                        )}
                      </Dropdown>
                    )}
                    {userType === "customer" && (
                      <Dropdown label="العملاء" inline>
                        {customer.length > 0
                          ? customer
                              .filter(
                                (customer) =>
                                  !customer.password && !customer.username
                              )
                              .map((customer) => (
                                <Dropdown.Item
                                  value={customer._id}
                                  key={customer.id}
                                  onClick={() => setUserID(customer._id)} // استخدم onClick بدلًا من onChange
                                >
                                  {customer.name}
                                </Dropdown.Item>
                              )) // التأكد إذا كانت هناك نتائج بعد التصفية
                          : "لا يوجد عملاء"}
                      </Dropdown>
                    )}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="gap-2">
              <Button>اضافه</Button>
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

export default CreateModalPermission;
