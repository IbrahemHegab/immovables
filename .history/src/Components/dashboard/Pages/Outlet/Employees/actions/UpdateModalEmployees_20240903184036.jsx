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
    id: data && data._id ? data._id : null,
  };
  const [selectedValueKind, setSelectedValueKind] = useState(initstate?.role);

  const dispatch = useDispatch();

  const submit = (values) => {
    values.role =
      selectedValueKind === "مدير"
        ? "manager"
        : selectedValueKind === "supervisor"
        ? "محاسب"
        : selectedValueKind === "accountant"
        ? "محاسب"
        : "accountant";
    dispatch(updateEmployees(values))
      .unwrap()
      .then(() => {
        dispatch(getEmployees());
      });
    dispatch(setOpenEmployeesModelUpdate(false));
  };
  console.log(selectedValueKind);

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

                <div className="col-span-2">
                  <div className="mb-2 block">
                    <Label htmlFor="jobTitle" value="المسمي الوظيفي" />
                  </div>
                  <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
                    <Dropdown
                      label={
                        selectedValueKind?selectedValueKind :
                         data?.role === "manager"
                        ? "مدير"
                        : data?.role === "accountant"
                        ? "محاسب"
                        : data?.role === "supervisor"
                        ? "مشرف"
                        : "مسوق"
                          //  data?.role === "manager"
                          // ? "مدير"
                          // : data?.role === "accountant"
                          // ? "محاسب"
                          // : data?.role === "supervisor"
                          // ? "مشرف"
                          // : "مسوق"
                      }
                      inline
                      onSelect={(e) => setFieldValue("role", e)}
                    >
                      <Dropdown.Item
                        onClick={() => setSelectedValueKind("مدير")}
                      >
                        مدير
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          setSelectedValueKind("مشرف");
                        }}
                      >
                        مشرف
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedValueKind("محاسب")}
                      >
                        محاسب
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => setSelectedValueKind("مسوق")}
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
