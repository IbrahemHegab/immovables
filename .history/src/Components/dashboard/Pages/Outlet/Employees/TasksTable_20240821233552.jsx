import { useEffect } from "react";
import { Button, Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";


import {
 
  getEmployees,
} from "../../../../store/Employees/employeesSlice";

const TasksTable = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);



  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen h-screen">
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم المهمه</Table.HeadCell>
          <Table.HeadCell>مده المهمه</Table.HeadCell>
          <Table.HeadCell>بدايه المهمه</Table.HeadCell>
          <Table.HeadCell>المسؤول</Table.HeadCell>
          <Table.HeadCell>الملحوظات</Table.HeadCell>

          <Table.HeadCell>صوره المهمات</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y text-center">
          {data && data.length > 0 ? (
            data.map((e) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={e?._id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e?.name || "لا يوجد اسم"}
                </Table.Cell>
                <Table.Cell>{e?.time || "غير متوفر"}</Table.Cell>

                <Table.Cell>{e?.start || "غير متوفر"}</Table.Cell>
                <Table.Cell>{e?.notes || "غير متوفر"}</Table.Cell>
                <Table.Cell>{e?.notes || "غير متوفر"}</Table.Cell>
                <Table.Cell>{e?.image || "غير متوفر"}</Table.Cell>
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

export default TasksTable;
