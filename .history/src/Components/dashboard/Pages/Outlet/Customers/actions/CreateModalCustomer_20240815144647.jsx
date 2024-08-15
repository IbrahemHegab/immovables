import { Button, Modal, Label, TextInput, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCustomerModel } from "../../../../../store/SharedStore";
import { createCustomer, getCustomer } from "../../../../../store/Customers/customerSlice";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { set } from "cookies-js";
import { getEmployees } from "../../../../../store/Employees/employeesSlice";

const CreateModalCustomer = () => {
  const initstate = {
    identity: "",
    name: "",
    phone: "",
    marketers:[]
  };
  const [selectedMarketers, setSelectedMarketers] = useState([]);

  const { customer,employees  } = useSelector((state) => state);
  const marketers = [employees];

 
  const toggleMarketer = (marketer) => {
    setSelectedMarketers((prevSelected) =>
      prevSelected.includes(marketer)
        ? prevSelected.filter((item) => item !== marketer)
        : [...prevSelected, marketer]
    );
  };

  const getLabel = () => {
    if (selectedMarketers.length === 0) {
      return "المسوقيين";
    }
    return selectedMarketers.join(", ");
  };

 
  const { CustomerModel } = useSelector((state) => state.sharedStore);
  const dispatch = useDispatch();
  const submit = (values) => {
  
values.marketers =selectedMarketers
    dispatch(createCustomer(values));

    dispatch(setOpenCustomerModel(false));
  };
  useEffect(() => {
    dispatch(getCustomer());
    dispatch(getEmployees({ supervisor: "مشرف", marketer: "مسوق" }));
  }, [dispatch]);
  return (
    // <Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal show={CustomerModel}>
      <Formik initialValues={initstate} onSubmit={submit}>
        <Form>
          <Modal.Header
            onClick={() => {
              dispatch(setOpenCustomerModel(false));
            }}
          ></Modal.Header>
          <Modal.Body>
            <div className="grid grid-flow-row-dense lg:grid-cols-3 grid-cols-1 grid-rows-3 gap-3">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="base" value="رقم الهويه" />
                </div>
                <Field
                  className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                  id="base"
                  name="identity"
                  type="text"
                  sizing="sm"
                  placeholder="رقم الهويه"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="large" value="التليفون" />
                </div>
                <Field
                  className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                  name="phone"
                  id="large"
                  type="text"
                  sizing="sm"
                  placeholder="التليفون"
                />
              </div>

              <div className="col-span-1">
                <div className="mb-2 block">
                  <Label htmlFor="large" value="اسم العميل" />
                </div>
                <Field
                  className="text-gray-900 text-sm p-2 bg-gray-50 rounded-lg w-full border-gray-300"
                  name="name"
                  id="large"
                  type="text"
                  sizing="sm"
                  placeholder="اسم العميل"
                />
              </div>

              <div className="col-span-1">
                <div className="mb-2 block">
                  <Label htmlFor="large" value="المسوقيين" />
                </div>
                <div className="flex justify-center text-center bg-gray-200 p-1 rounded-lg">
                  <Dropdown label={getLabel()} inline>
                    {marketers.map((marketer) => (
                      <Dropdown.Item
                        key={marketer}
                        onClick={() => toggleMarketer(marketer)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedMarketers.includes(marketer)}
                          readOnly
                          className="mr-2"
                        />
                        {marketer}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                  {/* <Dropdown label="المسوقين" inline>
                      {employees.data.length > 0 && employees.data ? (
                        employees.data.map((employee) => (
                          <Dropdown.Item key={employee._id}>
                            {employee.name}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item>لايوجد مسوقين</Dropdown.Item>
                      )}
                    </Dropdown> */}
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="gap-2">
            <Button type="submit">اضافه</Button>
            <Button
              color="gray"
              onClick={() => {
                dispatch(setOpenCustomerModel(false));
              }}
            >
              اغلاق
            </Button>
          </Modal.Footer>
        </Form>
      </Formik>
    </Modal>
  );
};

export default CreateModalCustomer;
