import { Button, Modal, Label, TextInput, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPermissionModelModel } from "../../../../../store/SharedStore";
import { useEffect, useState } from "react";
import css from "./permission.module.css";
import { getCustomer } from "../../../../../store/Customers/customerSlice";
import { getEmployees } from "../../../../../store/Employees/employeesSlice";
const CreateModalPermission = () => {
  const [chickState, setChickState] = useState();
  const { PermissionModel } = useSelector((state) => state.sharedStore);
  const customer = useSelector((state) => state.customer);
  const employees = useSelector((state) => state.employees);
  const [customer, setCustomer] = useState(customer.data);
  const [employees, setEmployees] = useState(employees.data);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(getCustomer());
      dispatch(getEmployees());
    } catch (err) {
      console.error(err);
    }
  }, [dispatch]);
  console.log(customer , e);
  
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
            <div className="mb-2 block">
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
            <div className="mb-2 block">
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
            <div className={css.containerSwitch}>
              <span className="fw-bold">{chickState ? "باب" : "محاضره"}</span>
              <label className={css.switch}>
                <input
                  type="checkbox"
                  onChange={(e) => setChickState(e.target.checked)}
                />
                <span className={css.slider}></span>
              </label>
            </div>
            <div className="mb-2 block">
              <Label htmlFor="large" value="العملاء" />
            </div>
            <div className="flex justify-around  bg-gray-200 p-1 rounded-lg">
              <Dropdown label="اسلام" inline>
                <Dropdown.Item>محمد</Dropdown.Item>
                <Dropdown.Item>اشرف</Dropdown.Item>
                <Dropdown.Item>خالد</Dropdown.Item>
                <Dropdown.Item>اسامه</Dropdown.Item>
                <Dropdown.Item>عمر</Dropdown.Item>
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
