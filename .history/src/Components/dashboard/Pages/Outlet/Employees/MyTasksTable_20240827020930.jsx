import { useEffect } from "react";
import { Button, Table, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getMyTask, getMyTaskAssignedTo } from "../../../../store/Task/taskSlice";
import { getMe } from "../../../../store/auth/authSlice";

const TasksTable = () => {
  const dispatch = useDispatch();
  const {  auth ,task } = useSelector((state) => state);
  
  useEffect(() => {
    console.log(auth.user.role);
  
      dispatch(getMe());
      if (auth.user.role) {
        
      }
      dispatch(getMyTask()); // جلب جميع المهام
  }, [ dispatch ]);

  const renderStatus = (status) => {
    switch (status) {
      case "in-progress":
        return "قيد التنفيذ";
      case "completed":
        return "مكتمله";
      case "review":
        return "قيد المراجعه";
      case "reassigned":
        return "غير مكتمله";
      default:
        return "غير متوفر";
    }
  };

  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen h-screen">
      <div className="flex justify-center gap-3 items-center py-2">
        <Button
          onClick={() => dispatch(getMyTask())}
        >
          كل مهام الموظفين
        </Button>
        <Button
          onClick={() => dispatch(getMyTaskAssignedTo())}
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
              <Table.Cell colSpan="7">
                جاري تحميل البيانات... <Spinner aria-label="Default status example" />
              </Table.Cell>
            </Table.Row>
          ) : task.data.length > 0 ? (
            task.data.map((e) => (
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
                <Table.Cell>{renderStatus(e?.status)}</Table.Cell>
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
