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
  console.log(filteredData);

  return (
    <>  <div className="grid lg:grid-cols-6 content-center grid-cols-2 gap-3 items-center py-2">
    <Button onClick={() => dispatch(getMyTask())}>كل مهام الموظفين</Button>
    <Button onClick={() => dispatch(getMyTaskAssignedTo())}>
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
  </div></>
    
  );
};

export default TasksTable;
