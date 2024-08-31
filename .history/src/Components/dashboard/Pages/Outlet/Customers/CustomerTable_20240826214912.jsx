import { useEffect } from "react";
import { Button, Table, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomer,
  getCustomer,
} from "../../../../store/Customers/customerSlice";
import { fireSwal } from "../../../../utils/AlertModel";

import { setOpenCustomerModelUpdate } from "../../../../store/SharedStore";
import { getEmployees } from "../../../../store/Employees/employeesSlice";

const CustomerTable = () => {
  const dispatch = useDispatch();
  const { customer , auth } = useSelector((state) => state);

  useEffect(() => {
    
    dispatch(getCustomer(auth.token));
    dispatch(getEmployees({ supervisor: "مشرف", marketer: "مسوق" , token:auth.token }));
  }, [auth.token, dispatch]);

  const handleDelete = (id) => {
    fireSwal("هل أنت متأكد من حذف العميل؟", "", async () => {
      await dispatch(deleteCustomer(id));
      dispatch(getCustomer()); // إعادة جلب البيانات بعد الحذف
    });
  };
  const handleUpdate = (id) => {
    dispatch(setOpenCustomerModelUpdate({ data: id, status: true }));
  };
  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto md:w-auto w-screen h-screen">
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم العميل</Table.HeadCell>
          <Table.HeadCell>رقم الهوية</Table.HeadCell>
          <Table.HeadCell>التليفون</Table.HeadCell>
          <Table.HeadCell>المسوقين</Table.HeadCell>
          <Table.HeadCell>الخصائص</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y text-center">
          {customer.data && customer.data.length > 0 ? (
            customer.data.map((e) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={e?._id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e?.name || "لا يوجد اسم"}
                </Table.Cell>
                <Table.Cell>{e?.identity || "غير متوفر"}</Table.Cell>
                <Table.Cell>{e?.phone || "غير متوفر"}</Table.Cell>
                <Table.Cell>
                  <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
                    <Dropdown label="المسوقين" inline>
                      {e.marketers.length > 0 && e.marketers ? (
                        e.marketers.map((employee, inx) => (
                          <Dropdown.Item key={inx}>{employee}</Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item> لايوجد مسوقين</Dropdown.Item>
                      )}
                    </Dropdown>
                  </div>
                </Table.Cell>
                <Table.Cell className="grid grid-cols-2 gap-2">
                  <Button
                    className="bg-red-600"
                    size="xs"
                    onClick={() => handleDelete(e._id)}
                  >
                    حذف
                  </Button>
                  <Button size="xs" onClick={() => handleUpdate(e)}>
                    تعديل
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan="6">لا توجد بيانات لعرضها</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomerTable;
