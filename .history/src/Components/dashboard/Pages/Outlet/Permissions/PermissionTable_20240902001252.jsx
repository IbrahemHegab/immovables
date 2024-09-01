import { Button, Table } from "flowbite-react";
import { setOpenPermissionModelModel } from "../../../../store/SharedStore";

import { fireSwal } from "../../../../utils/AlertModel";
import { useDispatch, useSelector } from "react-redux";

const PermissionTable = () => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.customer.data);
  const employees = useSelector((state) => state.employees.data);

  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen  h-screen ">
       <div
        className={`grid ${
          auth.user?.role !== "manager" ? "lg:grid-cols-6" : "lg:grid-cols-5"
        }  content-center grid-cols-2 gap-3 items-center py-2`}
      >
        <Button onClick={() => filters()}>كل مهام </Button>
        {auth.user?.role !== "manager" && (
          <Button onClick={() => myAssigendMe()}>مهامي</Button>
        )}

        <Button color="success" onClick={() => setFilter("fulfilled")}>
          المكتملة
        </Button>
        <Button color="success" onClick={() => setFilter("progressing")}>
          قيد التنفيذ
        </Button>

        <Button color="warning" onClick={() => setFilter("review")}>
          قيد المراجعة
        </Button>
        <Button
          className={`bg-red-500 ${
            auth.user?.role === "manager" && "col-span-2 lg:col-span-1"
          }`}
          onClick={() => setFilter("rejected")}
        >
          المرفوضة
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
