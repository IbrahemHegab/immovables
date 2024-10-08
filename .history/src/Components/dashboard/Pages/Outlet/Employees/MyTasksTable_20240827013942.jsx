import { useEffect, useState, useMemo } from "react";
import { Button, Table ,Spinner} from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyTask,
  getMyTaskAssignedTo,
  
} from "../../../../store/Task/taskSlice";

import { getMe } from "../../../../store/auth/authSlice";

const TasksTable = () => {
  const [showAssignedTasks, setShowAssignedTasks] = useState(false); // حالة لتحديد جلب المهام المسندة
 // حالة لتحميل البيانات المسندة
  const dispatch = useDispatch();
  const { auth, task } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMe(auth.token));

    if (showAssignedTasks) {
     
      dispatch(getMyTaskAssignedTo(auth.token))
      
    } else {
      dispatch(getMyTask(auth.token)); // جلب جميع المهام
    }
  }, [auth.token, dispatch, showAssignedTasks]);

  // تحسين الفلترة باستخدام useMemo
  // const filteredTasks = useMemo(() => {
  //   const tasks = task.data || [];

  //   // إذا كانت حالة عرض المهام المسندة مفعلة، لا تطبق الفلترة
  //   if (showAssignedTasks) {
  //     return tasks;
  //   }

  //   if (auth.user?.role === "manager") {
  //     return tasks; // المدير يرى جميع المهام
  //   }
  //   if (auth.user?.role === "accountant") {
  //     return tasks.filter(
  //       (e) =>
  //         e.assignedTo?.role === "supervisor" ||
  //         e.assignedTo?.role === "marketer"
  //     );
  //   }
  //   if (auth.user?.role === "supervisor") {
  //     return tasks.filter((e) => e.assignedTo?.role === "marketer");
  //   }
  //   if (auth.user?.role === "marketer") {
  //     return []; // المسوق لا يرى أي مهام
  //   }
  //   return [];
  // }, [auth.user?.role, task.data, showAssignedTasks]);

  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen h-screen">
      <div className="flex justify-center gap-3 items-center py-2">
        <Button
          onClick={() => {
             // جلب جميع المهام
            dispatch(getMyTask(auth.token));
          }}
        >
          كل مهام الموظفين
        </Button>
        <Button
          onClick={() => {
            dispatch(getMyTaskAssignedTo(auth.token))// جلب المهام المسندة فقط
          }}
        >
          المهام المسنده الي
        </Button>
      </div>
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم المهمه</Table.HeadCell>
          <Table.HeadCell>مده المهمه</Table.HeadCell>
          <Table.HeadCell>بدايه المهمه</Table.HeadCell>
          <Table.HeadCell>المسؤول عن المهمه</Table.HeadCell>
          <Table.HeadCell>الحاله</Table.HeadCell>
          <Table.HeadCell>الملحوظات</Table.HeadCell>
          <Table.HeadCell>صوره المهمات</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y text-center">
          {task.isLoading ? (
            <Table.Row>
              <Table.Cell colSpan="7">جاري تحميل البيانات... <Spinner aria-label="Default status example" /></Table.Cell>
            </Table.Row>
          ) : filteredTasks.length > 0 ? (
            filteredTasks.map((e) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={e?._id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e?.taskName || "لا يوجد اسم"}
                </Table.Cell>
                <Table.Cell>{e?.taskDuration || "غير متوفر"}</Table.Cell>
                <Table.Cell>
                  {e?.createdAt
                    ? new Date(e.createdAt).toLocaleDateString("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "غير متوفر"}
                </Table.Cell>
                <Table.Cell>{e?.assignedTo?.name || "غير متوفر"}</Table.Cell>
                <Table.Cell>
                  {e?.status === "in-progress"
                    ? "قيد التنفيذ"
                    : e?.status === "completed"
                    ? "مكتمله"
                    : e?.status === "review"
                    ? "قيد المراجعه"
                    : e?.status === "reassigned"
                    ? "غير مكتمله"
                    : "غير متوفر"}
                </Table.Cell>
                <Table.Cell>{e?.taskNotes || "غير متوفر"}</Table.Cell>
                <Table.Cell>{e?.image || "غير متوفر"}</Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell colSpan="7">لا توجد بيانات لعرضها</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TasksTable;
