import { Button, Modal, Label, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenEmployeesModelUpdate } from "../../../../../store/SharedStore";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import {  getEmployees, updateEmployees } from "../../../../../store/Employees/employeesSlice";

const UpdateModalEmployees = () => {
  const { UpdateEmployeesModel } = useSelector((state) => state.sharedStore);
  const initstate = {
    name:
      UpdateEmployeesModel.data && UpdateEmployeesModel.data.name
        ? UpdateEmployeesModel.data.name
        : "",
    jobTitle:
      UpdateEmployeesModel.data && UpdateEmployeesModel.data.jobTitle
        ? UpdateEmployeesModel.data.jobTitle
        : "مشرف",
    ID:
      UpdateEmployeesModel.data && UpdateEmployeesModel.data._id
        ? UpdateEmployeesModel.data._id
        : null,
  };
  const [selectedValueKind, setSelectedValueKind] = useState(initstate.jobTitle);

  const dispatch = useDispatch();

  const submit = (values) => {
    values.jobTitle = selectedValueKind;
    dispatch(updateEmployees(values)).unwrap()
    .then(() => {
      dispatch(getEmployees());
    });
    dispatch(setOpenEmployeesModelUpdate(false));
  };

  return (
    <Modal show={UpdateEmployeesModel.status}>
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
