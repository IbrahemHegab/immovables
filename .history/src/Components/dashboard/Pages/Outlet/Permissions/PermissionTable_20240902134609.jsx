import { Button, Table } from "flowbite-react";
import { setOpenPermissionModelModel } from "../../../../store/SharedStore";
import { fireSwal } from "../../../../utils/AlertModel";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const PermissionTable = () => {
  const [filter, setFilter] = useState("employees"); // الحالة الافتراضية للفلتر
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.data);
  const employees = useSelector((state) => state.employees.data);

  // دالة ترشيح البيانات بناءً على الفلتر
  const filteredData = filter === "customer" ? customer : employees;

  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen h-screen">
      <div className="flex gap-3 items-center py-2">
        <Button color="warning" onClick={() => setFilter("customer")}>
          العملاء
        </Button>
        <Button color="warning" onClick={() => setFilter("employees")}>
          الموظفين
        </Button>
      </div>

      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم المستخدم</Table.HeadCell>

          <Table.HeadCell>رقم الهويه</Table.HeadCell>
          <Table.HeadCell>التليفون</Table.HeadCell>
          <Table.HeadCell>اسم المستخدم</Table.HeadCell>
          <Table.HeadCell>كلمه السر</Table.HeadCell>
          <Table.HeadCell>الخصائص</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-center">
          {filteredData && filteredData.length > 0 ? (
             filteredData.filter(
              (users) =>
                !users.password && !employee.username
            ).map((item) => (
              <Table.Row
                key={item.id} // التأكد من استخدام معرف فريد
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </Table.Cell>

                <Table.Cell>{item.identity}</Table.Cell>
                <Table.Cell>{item.phone}</Table.Cell>
                <Table.Cell>{item.username}</Table.Cell>
                <Table.Cell>{item.password}</Table.Cell>

                <Table.Cell className="grid grid-cols-3 gap-2">
                  <Button
                    className="bg-green-600"
                    size="xs"
                    onClick={() => {
                      dispatch(setOpenPermissionModelModel(true));
                    }}
                  >
                    اضافه
                  </Button>
                  <Button size="xs">تعديل</Button>
                  <Button
                    className="bg-red-600"
                    size="xs"
                    onClick={() => {
                      fireSwal("متأكد من حذف العميل؟");
                    }}
                  >
                    حذف
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan="5">لا توجد بيانات لعرضها</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default PermissionTable;
