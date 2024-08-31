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
  const handleFilter = () => {
    setFilter("all")
    dispatch(getMyTaskAssignedTo())
  }
  const filteredData = task.data.filter((e) => {
    if (filter === "all") return task.data;
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
    <>
      {" "}
      <div className="grid lg:grid-cols-6 content-center grid-cols-2 gap-3 items-center py-2">
        <Button onClick={() => dispatch(getMyTask())}>كل مهام الموظفين</Button>
        <Button onClick={() => handleFilter()}>
          المهام المسنده الي
        </Button>
        <Button color="success" onClick={() => setFilter("fulfilled")}>
          المكتملة
        </Button>
        <Button color="success" onClick={() => setFilter("fulfilled")}>
          قيد التنفيذ
        </Button>
        <Button color="warning" onClick={() => setFilter("pending")}>
          قيد المراجعة
        </Button>
        <Button className="bg-red-500" onClick={() => setFilter("rejected")}>
          المرفوضة
        </Button>
      </div>{" "}
      <div className="overflow-x-auto xl:w-auto lg:w-auto w-screen ">
        <Table dir="rtl">
          <Table.Head className="text-start">
            <Table.HeadCell>اسم المهمه</Table.HeadCell>
            <Table.HeadCell>مده المهمه</Table.HeadCell>
            <Table.HeadCell>بدايه المهمه</Table.HeadCell>
            <Table.HeadCell>المسؤول عن المهمه</Table.HeadCell>

            <Table.HeadCell>الملحوظات</Table.HeadCell>
            <Table.HeadCell>صوره المهمات</Table.HeadCell>
            <Table.HeadCell>الحاله</Table.HeadCell>
            <Table.HeadCell>الخصائص</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y text-center">
            {task.isLoading ? (
              <Table.Row>
                <Table.Cell colSpan="7">
                  جاري تحميل البيانات...{" "}
                  <Spinner aria-label="Default status example" />
                </Table.Cell>
              </Table.Row>
            ) : filteredData.length > 0 ? (
              filteredData.map((e, index) => (
                <Table.Row
                  className={`dark:border-gray-700 dark:bg-gray-800 ${getRowColor(
                    dates[index]?.diffInDays,
                    e?.taskDuration
                  )}`}
                  key={e?._id}
                >
                  <Table.Cell
                    className="whitespace-nowrap font-medium text-gray-900 dark:text-white lg:p-5 md:p-2 sm:p-0 p-1"
                    style={{ borderRadius: 0 }}
                  >
                    {e?.taskName || "لا يوجد اسم"}
                  </Table.Cell>
                  <Table.Cell className="lg:p-5 md:p-2 sm:p-0 p-1">
                    {e?.taskDuration || 0}
                  </Table.Cell>
                  <Table.Cell className="lg:p-5 md:p-2 sm:p-0 p-1">
                    {dates[index]?.dateFormatted || "غير متوفر"}
                    {/* <br />
                {`فرق الأيام: ${dates[index]?.diffInDays} يوم`} */}
                  </Table.Cell>
                  <Table.Cell className="lg:p-5 md:p-2 sm:p-0 p-1">
                    {e.assignedTo?.name || "غير متوفر"}
                  </Table.Cell>
                  <Table.Cell className="lg:p-5 md:p-2 sm:p-0 p-1 ">
                    {e?.taskNotes || "غير متوفر"}
                  </Table.Cell>
                  <Table.Cell className="lg:p-5 md:p-2 sm:p-0 p-1">
                    {e?.image || "غير متوفر"}
                  </Table.Cell>
                  <Table.Cell
                    // className={`${ e?.status === "rejected"
                    //   ? "bg-red-600"
                    //   : e?.status === "fulfilled"
                    //   ? "bg-green-800"
                    //   : "bg-yellow-500" || "bg-green-500"} lg:p-5 md:p-2 sm:p-0 p-1`}
                    // style={{ borderRadius: 0 }}
                    className="lg:p-5 md:p-2 sm:p-0 p-1"
                    style={{ borderRadius: 0 }}
                  >
                    {e?.status === "rejected"
                      ? "مرفوضة"
                      : e?.status === "fulfilled"
                      ? "مكتملة"
                      : e?.status === "progressing"
                      ? "قيد التنفيذ"
                      : "قيدالمراجعة" || "غير متوفر"}
                  </Table.Cell>
                  <Table.Cell style={{ borderRadius: 0 }}>
                    <div className="grid grid-cols-3 gap-2">
                      {" "}
                      <Button className="bg-red-500" size={"sm"}>
                        حذف
                      </Button>
                      <Button size={"sm"}>تعديل</Button>
                      <Button className="bg-green-800" size={"sm"}>
                        انهاء
                      </Button>
                    </div>
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
    </>
  );
};

export default TasksTable;
