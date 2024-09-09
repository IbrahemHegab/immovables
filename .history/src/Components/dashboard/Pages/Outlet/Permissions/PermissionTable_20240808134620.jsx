import React from "react";
import { Button, Table, Dropdown } from "flowbite-react";
import { setOpenPermissionModelModel } from "../../../../store/SharedStore";
import { useDispatch } from "react-redux";
import { fireSwal } from "../../../../utils/AlertModel";
const PermissionTable = () => {
  const dispatch = useDispatch()
  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen  h-screen ">
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
           
            {/* <Table.Cell>
              <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
                <Dropdown label="المسوقيين" inline>
                  <Dropdown.Item>محمد</Dropdown.Item>
                  <Dropdown.Item>محمد</Dropdown.Item>
                  <Dropdown.Item>محمد</Dropdown.Item>
                  <Dropdown.Item>محمد</Dropdown.Item>
                </Dropdown>
              </div>
            </Table.Cell> */}
            <Table.Cell className="grid grid-cols-3  gap-2">
         
              <Button className="bg-green-600 " size="xs" onClick={()=>{dispatch(setOpenPermissionModelModel(true))}}>
                اضافه
              </Button>
              <Button size="xs">تعديل</Button>
              <Button className="bg-red-600 " size="xs"  onClick={() => {
                fireSwal("متأكد من حذف العميل ؟");
              }}>
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
             
              <Button className="bg-green-600 " size="xs" onClick={()=>{dispatch(setOpenPermissionModelModel(true))}}>
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
             
              <Button className="bg-green-600 " size="xs" onClick={()=>{dispatch(setOpenPermissionModelModel(true))}}>
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
