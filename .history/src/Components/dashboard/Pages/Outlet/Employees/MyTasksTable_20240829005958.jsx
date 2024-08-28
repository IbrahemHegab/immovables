import { useEffect, useState } from "react";
import { Button, Table, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyTask,
  getMyTaskAssignedTo,
} from "../../../../store/Task/taskSlice";
import { getMe } from "../../../../store/auth/authSlice";

const TasksTable = () => {
  const dispatch = useDispatch();
  const { task, auth } = useSelector((state) => state);

  const [dates, setDates] = useState([]);
  const [filter, setFilter] = useState("all");
  // التاريخ المعطى
  const calculateDateDifference = (date1, date2) => {
    const diffInTime = date1.getTime() - date2.getTime();
    return Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  };
  const filteredData = task.data.filter((e) => {
    if (filter === "all") return true;
    return e.status === filter;
  });

  useEffect(() => {
    if (task.data.length > 0) {
      const currentDate = new Date();
      const newDates = task.data.map((e) => {
        const createdAt = new Date(e.createdAt);
        const diffInDays = calculateDateDifference(currentDate, createdAt);

        return {
          dateFormatted: createdAt.toLocaleDateString("ar-EG", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          diffInDays,
        };
      });
      setDates(newDates);
    }
  }, [task.data]);
  useEffect(() => {
    dispatch(getMe(auth.token));
    dispatch(getMyTask(auth.token)); // جلب جميع المهام
  }, [auth.token, dispatch]);

  const getRowColor = (diffInDays, taskDuration) => {
    if (diffInDays < taskDuration) {
      return "bg-green-500 text-gray-50"; // لون مميز عند تطابق الفرق مع مدة المهمة
    }
    if (diffInDays > taskDuration) {
      return "bg-red-500 text-gray-50"; // لون مميز عند تطابق الفرق مع مدة المهمة
    }
    if (diffInDays == taskDuration) {
      return "bg-yellow-200"; // لون مميز عند تطابق الفرق مع مدة المهمة
    }
    return "bg-white"; // اللون الافتراضي
  };

  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen h-screen">
      <div className="flex justify-center gap-3 items-center py-2">
        <Button onClick={() => dispatch(getMyTask())}>كل مهام الموظفين</Button>
        <Button onClick={() => dispatch(getMyTaskAssignedTo())}>
          المهام المسنده الي
        </Button>
        <Button color="success" onClick={() => setFilter("شقه")}>
          المكتملة
        </Button>
        <Button color="warning"  onClick={() => setFilter("pending")}>
          قيد المراجعة
        </Button>
        <Button color="red"  onClick={() => setFilter("rejected")}>
          المرفوضة
        </Button>
      </div>
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم المهمه</Table.HeadCell>
          <Table.HeadCell>مده المهمه</Table.HeadCell>
          <Table.HeadCell>بدايه المهمه</Table.HeadCell>
          <Table.HeadCell>المسؤول عن المهمه</Table.HeadCell>

          <Table.HeadCell>الملحوظات</Table.HeadCell>
          <Table.HeadCell>صوره المهمات</Table.HeadCell>
          <Table.HeadCell>الحاله</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y text-center">
          {task.isLoading ? (
            <Table.Row>
              <Table.Cell colSpan="7">
                جاري تحميل البيانات...{" "}
                <Spinner aria-label="Default status example" />
              </Table.Cell>
            </Table.Row>
          ) : task.data.length > 0 ? (
            task.data.map((e, index) => (
              <Table.Row
                className={`dark:border-gray-700 dark:bg-gray-800 ${getRowColor(
                  dates[index]?.diffInDays,
                  e.taskDuration
                )}`}
                key={e?._id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e?.taskName || "لا يوجد اسم"}
                </Table.Cell>
                <Table.Cell>{e?.taskDuration || 0}</Table.Cell>
                <Table.Cell>
                  {dates[index]?.dateFormatted || "غير متوفر"}
                  <br />
                  {`فرق الأيام: ${dates[index]?.diffInDays} يوم`}
                </Table.Cell>
                <Table.Cell>
                  {e.assignedTo?.name === "manager"
                    ? "مدير"
                    : e.assignedTo?.name === "supervisor"
                    ? "مشرف"
                    : e.assignedTo?.name === "accountant"
                    ? "محاسب"
                    : e.assignedTo?.name === "marketer"
                    ? "مسوق"
                    : "غير متوفر"}
                </Table.Cell>
                <Table.Cell>{e?.taskNotes || "غير متوفر"}</Table.Cell>
                <Table.Cell>{e?.image || "غير متوفر"}</Table.Cell>
                <Table.Cell>
                  <Button size={"sm"}>انهاء</Button>
                </Table.Cell>
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
