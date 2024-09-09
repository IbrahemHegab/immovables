import {
  Button,
  Modal,
  Label,
  TextInput,
  Dropdown,
  Radio,
} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPermissionModelModel } from "../../../../../store/SharedStore";
import { useEffect, useState } from "react";

import css from "./permission.module.css";
import { getCustomer } from "../../../../../store/Customers/customerSlice";
import { getEmployees } from "../../../../../store/Employees/employeesSlice";
const CreateModalPermission = () => {
  const { PermissionModel } = useSelector((state) => state.sharedStore);
  const customer = useSelector((state) => state.customer.data);
  const employees = useSelector((state) => state.employees.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCustomer());
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    // <Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal show={PermissionModel}>
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
            <TextInput
              id="small"
              type="text"
              sizing="sm"
              placeholder="اسم المستخدم"
            />
          </div>
          <div>
            <div className="mb-2 block p-1">
              <Label htmlFor="base" value="كلمه السر" />
            </div>
            <TextInput
              id="base"
              type="text"
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
                />
                <Label htmlFor="employees">موظف</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="customer" name="userType" value="customer" />
                <Label htmlFor="customer">عميل</Label>
              </div>
            </div>

            <div className="flex justify-around  bg-gray-200 p-1 rounded-lg">
              <Dropdown label="اسلام" inline>
                {employees.length > 1 && employees
                  ? employees.map((employee) => (
                      <Dropdown.Item key={employee.id}>
                        {employee.name}
                      </Dropdown.Item>
                    ))
                  : ""}
              </Dropdown>
              <Dropdown label="اسلام" inline>
                {customer.length > 1 && customer
                  ? customer.map((customer) => (
                      <Dropdown.Item key={customer.id}>
                        {customer.name}
                      </Dropdown.Item>
                    ))
                  : ""}
              </Dropdown>
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
    </Modal>
  );
};

export default CreateModalPermission;
