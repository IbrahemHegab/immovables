import { Button, Table } from "flowbite-react";
import { setOpenPermissionModelModel } from "../../../../store/SharedStore";

import { fireSwal } from "../../../../utils/AlertModel";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const PermissionTable = () => {
  const [filter, setFilter] = useState("employees");
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.data);
  const employees = useSelector((state) => state.employees.data);
  const filteredData =
  filter === "customer" ? customer : employees;
  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen  h-screen ">
      <div className={`flex   gap-3 items-center py-2`}>
      <Button color="warning" onClick={() => setFilter("customer")}>
          العملاء
        </Button>
        <Button color="warning" onClick={() => setFilter("employees")}>
          الموظفين
        </Button>
      </div>{" "}
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم العميل</Table.HeadCell>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>رقم الهويه</Table.HeadCell>
          <Table.HeadCell>التليفون</Table.HeadCell>

          <Table.HeadCell>الخصائص</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y text-center">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">


            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              مجهول الهويه
            </Table.Cell>
            <Table.Cell>1658162</Table.Cell>
            <Table.Cell>297856485211</Table.Cell>
            <Table.Cell>0123456789</Table.Cell>

         
            <Table.Cell className="grid grid-cols-3  gap-2">
              <Button
                className="bg-green-600 "
                size="xs"
                onClick={() => {
                  dispatch(setOpenPermissionModelModel(true));
                }}
              >
                اضافه
              </Button>
              <Button size="xs">تعديل</Button>
              <Button
                className="bg-red-600 "
                size="xs"
                onClick={() => {
                  fireSwal("متأكد من حذف العميل ؟");
                }}
              >
                حذف
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              مجهول الهويه
            </Table.Cell>
            <Table.Cell>1658162</Table.Cell>
            <Table.Cell>297856485211</Table.Cell>
            <Table.Cell>0123456789</Table.Cell>

            {/* <Table.Cell>
              <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
                <Dropdown label="المسوقيين" inline>
                  <Dropdown.Item>اسلام</Dropdown.Item>
                  <Dropdown.Item>اسلام</Dropdown.Item>
                  <Dropdown.Item>اسلام</Dropdown.Item>
                  <Dropdown.Item>اسلام </Dropdown.Item>
                </Dropdown>
              </div>
            </Table.Cell> */}
            <Table.Cell className="grid grid-cols-3  gap-2">
              <Button
                className="bg-green-600 "
                size="xs"
                onClick={() => {
                  dispatch(setOpenPermissionModelModel(true));
                }}
              >
                اضافه
              </Button>
              <Button size="xs">تعديل</Button>
              <Button className="bg-red-600 " size="xs">
                حذف
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              مجهول الهويه
            </Table.Cell>
            <Table.Cell>1658162</Table.Cell>
            <Table.Cell>297856485211</Table.Cell>
            <Table.Cell>0123456789</Table.Cell>

            {/* <Table.Cell>
              <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
                <Dropdown label="المسوقيين" inline>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                  <Dropdown.Item>عبدالله</Dropdown.Item>
                </Dropdown>
              </div>
            </Table.Cell> */}
            <Table.Cell className="grid grid-cols-3  gap-2">
              <Button
                className="bg-green-600 "
                size="xs"
                onClick={() => {
                  dispatch(setOpenPermissionModelModel(true));
                }}
              >
                اضافه
              </Button>
              <Button size="xs">تعديل</Button>
              <Button className="bg-red-600 " size="xs">
                حذف
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default PermissionTable;
