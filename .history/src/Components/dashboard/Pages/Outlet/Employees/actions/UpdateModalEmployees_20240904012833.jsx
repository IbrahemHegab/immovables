import { Button, Modal, Label, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenEmployeesModelUpdate } from "../../../../../store/SharedStore";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import {
  getEmployees,
  updateEmployees,
} from "../../../../../store/Employees/employeesSlice";

const UpdateModalEmployees = () => {
  const { data, status } = useSelector(
    (state) => state.sharedStore.UpdateEmployeesModel
  );

  const initstate = {
    name: data && data.name ? data.name : "",
    role: data && data.role ? data.role : "",
    identity: data && data.identity ? data.identity : "",
    phone: data && data.phone ? data.phone : "",
    id: data && data._id ? data._id : null,
  };
  const [selectedValueKind, setSelectedValueKind] = useState(initstate?.role);

  const dispatch = useDispatch();

  const submit = (values) => {
    values.role = selectedValueKind;
    dispatch(updateEmployees(values))
      .then(() => {
        dispatch(getEmployees());
        dispatch(setOpenEmployeesModelUpdate(false));
      })
      .catch((error) => {
        console.error("Error updating employees:", error);
      });
  };

  return (
    <Modal show={status}>
      <Formik initialValues={initstate} onSubmit={submit}>
        {({ setFieldValue }) => (
          <Form>
            <Modal.Header
              onClick={() => {
                dispatch(setOpenEmployeesModelUpdate(false));
              }}
            ></Modal.Header>
            <Modal.Body>
              <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 grid-rows-3 gap-3">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="base" value="اسم الموظف" />
                  </div>
                  <Field
                    className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                    id="base"
                    name="name"
                    type="text"
                    sizing="sm"
                    placeholder="اسم الموظف"
                  />
                </div>

                <div >
                  <div className="mb-2 block">
                    <Label htmlFor="jobTitle" value="المسمي الوظيفي" />
                  </div>
                  <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
                    <Dropdown
                      label={
                        selectedValueKind
                          ? selectedValueKind === "manager"
                            ? "مدير"
                            : selectedValueKind === "accountant"
                            ? "محاسب"
                            : selectedValueKind === "supervisor"
                            ? "مشرف"
                            : "مسوق"
                          : data?.role === "manager"
                          ? "مدير"
                          : data?.role === "accountant"
                          ? "محاسب"
                          : data?.role === "supervisor"
                          ? "مشرف"
                          : "مسوق"
                       
                      }
                      inline
                      onSelect={(e) => setFieldValue("role", e)}
                    >
                      <Dropdown.Item
                        onClick={() => setSelectedValueKind("manager")}
                      >
                        مدير
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setSelectedValueKind("supervisor");
                        }}
                      >
                        مشرف
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedValueKind("accountant")}
                      >
                        محاسب
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedValueKind("marketer")}
                      >
                        مسوق
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="gap-2">
              <Button type="submit">تعديل</Button>
              <Button
                color="gray"
                onClick={() => {
                  dispatch(setOpenEmployeesModelUpdate(false));
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

export default UpdateModalEmployees;
