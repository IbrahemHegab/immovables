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
import { getCustomer } from "../../../../../store/Customers/customerSlice";
import {
  getEmployees,
  updateEmployees,
} from "../../../../../store/Employees/employeesSlice";
import { Form, Formik } from "formik";

const CreateModalPermission = () => {
  const initstate = {
    name: "",
    jobTitle: "",
  };
  const [selectedValueKind, setSelectedValueKind] = useState("مشرف");
  const { PermissionModel } = useSelector((state) => state.sharedStore);
  const customer = useSelector((state) => state.customer.data);
  const employees = useSelector((state) => state.employees.data);

  const dispatch = useDispatch();

  const [userType, setUserType] = useState("employees");
  const submit = (values) => {
    values.jobTitle = selectedValueKind;

    dispatch(updateEmployees(values));
  };
  useEffect(() => {
    dispatch(getCustomer());
    dispatch(getEmployees());
  }, [dispatch]);

  return (
    <Modal show={PermissionModel}>
      <Formik initialValues={initstate} onSubmit={submit}>
        {({ setFieldValue }) => <Form>
          
          
          </Form>}
      </Formik>
   
    </Modal>
  );
};

export default CreateModalPermission;
