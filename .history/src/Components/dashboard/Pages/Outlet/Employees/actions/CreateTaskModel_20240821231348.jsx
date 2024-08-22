import { Button, Modal, Label, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenEmployeesModel } from "../../../../../store/SharedStore";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { createEmployees } from "../../../../../store/Employees/employeesSlice";

const CreateTaskModel = () => {
  const initstate = {
    name: "",
    jobTitle: "",
  };
  const [selectedValueKind, setSelectedValueKind] = useState("مشرف");

  const { Task } = useSelector((state) => state.sharedStore);
  const dispatch = useDispatch();

  const submit = (values) => {
    values.jobTitle = selectedValueKind;
    dispatch(createEmployees(values));
    dispatch(setOpenEmployeesModel(false));
  };

  return (
    <Modal show={EmployeesModel}>
      <Formik initialValues={initstate} onSubmit={submit}>
        {({ setFieldValue }) => (
          <Form>
            <Modal.Header
              onClick={() => {
                dispatch(setOpenEmployeesModel(false));
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
                      label={selectedValueKind}
                      inline
                      onSelect={(e) => setFieldValue("jobTitle", e)}
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
              <Button type="submit">اضافه</Button>
              <Button
                color="gray"
                onClick={() => {
                  dispatch(setOpenEmployeesModel(false));
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

export default CreateTaskModel;
