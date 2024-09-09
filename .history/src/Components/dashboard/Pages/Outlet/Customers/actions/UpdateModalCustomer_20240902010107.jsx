import { Button, Modal, Label, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCustomerModelUpdate } from "../../../../../store/SharedStore";
import {
  getCustomer,
  updateCustomer,
} from "../../../../../store/Customers/customerSlice";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

const UpdateModalCustomer = () => {
  const UpdateCustomerModel = useSelector(
    (state) => state.sharedStore.UpdateCustomerModel
  );
  const employees = useSelector((state) => state.employees);
  const initstate = {
    identity:
      UpdateCustomerModel.data && UpdateCustomerModel.data.identity
        ? UpdateCustomerModel.data.identity
        : "",
    name:
      UpdateCustomerModel.data && UpdateCustomerModel.data.name
        ? UpdateCustomerModel.data.name
        : "",
    phone:
      UpdateCustomerModel.data && UpdateCustomerModel.data.phone
        ? UpdateCustomerModel.data.phone
        : "",
    marketers:
      UpdateCustomerModel.data && UpdateCustomerModel.data?.marketers
        ? UpdateCustomerModel.data.marketers
        : [],
    ID:
      UpdateCustomerModel.data && UpdateCustomerModel.data._id
        ? UpdateCustomerModel.data._id
        : null,
  };

  const [selectedMarketers, setSelectedMarketers] = useState([]);
  const toggleMarketer = (marketer) => {
    const marketersFromEmployees = employees.data.filter((employee) => employee.role === "marketer");
    console.log(marketersFromEmployees);
    
    setSelectedMarketers((prevSelected) =>
      prevSelected.includes(marketer)
        ? prevSelected.filter((item) => item !== marketer)
        : [...prevSelected, marketer ,marketersFromEmployees]
    );
  };

  const marketersFromEmployees = employees.data.filter((employee) => employee.role === "marketer");
  console.log(marketersFromEmployees);



  const getLabel = () => {
    if (selectedMarketers.length === 0) {
      return "المسوقيين";
    }
    return selectedMarketers.map((ele) => ele.name).join(", ");
  };

  const dispatch = useDispatch();

  const submit = (values) => {
    values.marketers = selectedMarketers;
    dispatch(updateCustomer(values))
      .unwrap()
      .then(() => {
        dispatch(getCustomer());
      });
    dispatch(setOpenCustomerModelUpdate(false));
  };
  useEffect(() => {
    setSelectedMarketers(
      UpdateCustomerModel.data?.marketers
        ? UpdateCustomerModel.data.marketers
        : []
    );
  }, [UpdateCustomerModel.data?.marketers]);
  return (
    <Modal show={UpdateCustomerModel.status}>
      <Formik initialValues={initstate} onSubmit={submit}>
        <Form>
          <Modal.Header
            onClick={() => {
              dispatch(setOpenCustomerModelUpdate(false));
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
                    {initstate.marketers.length > 0 && initstate.marketers ? (
                      initstate.marketers.map((marketer, inx) => (
                        <Dropdown.Item key={inx}>
                          <input
                            type="checkbox"
                            checked={selectedMarketers.includes(marketer)} // تحقق مما إذا كان المسوق موجودًا في selectedMarketers
                            onChange={() => toggleMarketer(marketer)} // استدعاء toggleMarketer لتحديث القائمة عند التغيير
                            className="mr-2"
                          />
                          {marketer.name}
                          
                        </Dropdown.Item>
                      ))
                    ) : (
                      <Dropdown.Item>لا توجد بيانات</Dropdown.Item>
                    )}
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
                dispatch(setOpenCustomerModelUpdate(false));
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

export default UpdateModalCustomer;
