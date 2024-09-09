import { Button, Modal, Label, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { setOpenCustomerModelUpdate } from "../../../../../store/SharedStore";
import { getCustomer, updateCustomer } from "../../../../../store/Customers/customerSlice";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";

const UpdateModalCustomer = () => {
  const UpdateCustomerModel = useSelector(
    (state) => state.sharedStore.UpdateCustomerModel
  );
  const employees = useSelector((state) => state.employees.data);

  const [selectedMarketers, setSelectedMarketers] = useState([]);

  const initstate = {
    identity: UpdateCustomerModel.data?.identity || "",
    name: UpdateCustomerModel.data?.name || "",
    phone: UpdateCustomerModel.data?.phone || "",
    marketers: UpdateCustomerModel.data?.marketers || [],
    ID: UpdateCustomerModel.data?._id || null,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (UpdateCustomerModel.data?.marketers) {
      setSelectedMarketers(UpdateCustomerModel.data.marketers);
    }
  }, [UpdateCustomerModel.data?.marketers]);

  const toggleMarketer = (marketer) => {
    setSelectedMarketers((prevSelected) =>
      prevSelected.some((item) => item._id === marketer._id)
        ? prevSelected.filter((item) => item._id !== marketer._id)
        : [...prevSelected, marketer]
    );
  };

  const getLabel = () => {
    if (selectedMarketers.length === 0) {
      return "المسوقيين";
    }
    return selectedMarketers.map((ele) => ele.name).join(", ");
  };

  const submit = (values) => {
    values.marketers = selectedMarketers;
    dispatch(updateCustomer(values))
      .then(() => {
        dispatch(getCustomer());
        dispatch(setOpenCustomerModelUpdate(false));
      });
  };

  const marketersFromEmployees = employees?.filter(employee => employee.role === "marketer");

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
                    {marketersFromEmployees.length > 0 ? (
                      marketersFromEmployees.map((marketer) => (
                        <Dropdown.Item key={marketer._id}>
                          <input
                            type="checkbox"
                            checked={selectedMarketers.some((item) => item._id === marketer._id)}
                            onChange={() => toggleMarketer(marketer)}
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
