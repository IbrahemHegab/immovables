import { useEffect, useState } from "react";
import { Button, Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

import { getEmployees } from "../../../../store/Employees/employeesSlice";
import { getMyTask, getMyTaskAssignedTo } from "../../../../store/Task/taskSlice";

const TasksTable = () => {
  const [filter, setFilter] = useState("all");
  const dispatch = useDispatch();
  const { auth, task } = useSelector((state) => state);
  // const { data } = useSelector((state) => state.employees);
  const filteredData = task.data.filter((e) => {
    if (filter === "all") return true;
    return e.assignedTo._id === filter || e.assignedBy._id === filter;
  });



  
  useEffect(() => {
    dispatch(getMyTask(auth.token));
  }, [auth.token, dispatch]);

  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen h-screen">
      <div className="flex justify-center gap-3 items-center py-2">
        {" "}
        <Button onClick={() => setFilter("all")}>كل المهام</Button>
        <Button onClick={() =>{dispatch(getMyTaskAssignedTo(auth.token));}}>المهام المسنده الي</Button>
       
      </div>
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
          {filteredData && filteredData.length > 0 ? (
            filteredData.map((e) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={e?._id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e?.taskName || "لا يوجد اسم"}
                </Table.Cell>
                <Table.Cell>{e?.taskDuration || "غير متوفر"}</Table.Cell>

                <Table.Cell>
                  {" "}
                  {e?.createdAt
                    ? new Date(e.createdAt).toLocaleDateString("ar-EG", {
                        day: "numeric", // لعرض اليوم
                        month: "long", // لعرض الشهر كاملاً
                        year: "numeric", // لعرض السنة
                      })
                    : "غير متوفر"}
                </Table.Cell>
                <Table.Cell>{e?.taskNotes || "غير متوفر"}</Table.Cell>
                <Table.Cell>{e?.assignedTo.name || "غير متوفر"}</Table.Cell>
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
