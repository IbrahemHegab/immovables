import { useEffect, useState } from "react";
import { Button, Table, Spinner, Modal, Tooltip } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTask,
  getMyTask,
  getMyTaskAssignedTo,
  rejectedTask,
  updateTask,
  fulfilledTask,
} from "../../../../store/Task/taskSlice";
import image from "../../../../../assets/available/image5.jpg";
import { getMe } from "../../../../store/auth/authSlice";
import Lightbox from "react-lightbox-component";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { setTaskID } from "../../../../store/SharedStore";
const TasksTable = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const task = useSelector((state) => state.task);
  const { taskID } = useSelector((state) => state.sharedStore);
  console.log(taskID);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [imageLightBox, setImagelightBox] = useState([]);
  const [dates, setDates] = useState([]);
  const [filter, setFilter] = useState("all");
  // التاريخ المعطى
  const calculateDateDifference = (date1, date2) => {
    const diffInTime = date1.getTime() - date2.getTime();
    return Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  };
  const handleOpenLightbox = (ele, index) => {
    setImagelightBox(ele);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  const images =
    imageLightBox.length > 0
      ? imageLightBox.map((img) => ({
          src: img.image,
          title: "وحدات الموافقه",
          description: "صور وحدات الموافقه",
        }))
      : [
          {
            src: image,
            title: "وحدات الموافقه",
            description: "صور وحدات الموافقه",
          },
        ];
  const filters = () => {
    setFilter("all");
    dispatch(setTaskID(null));
    dispatch(getMyTask());
  };
  const myAssigendMe = () => {
    setFilter("all");
    dispatch(getMyTaskAssignedTo());
  };

  const filteredData =
    task.data?.length > 0
      ? task.data.filter((e) => {
          if (taskID) return e._id === taskID;
          if (filter === "all") return true;
          return e.status === filter;
        })
      : [];

  const handleTaskStatus = (e) => {
    dispatch(updateTask({ id: e._id, status: "review" })).then(() =>
      dispatch(completeTask(e._id))
    );
  };
  const handleTaskRejected = (e) => {
    dispatch(updateTask({ id: e._id, status: "rejected" })).then(() =>
      dispatch(rejectedTask(e._id))
    );
  };
  const handleTaskFulfilled = (e) => {
    dispatch(updateTask({ id: e._id, status: "fulfilled" })).then(() =>
      dispatch(fulfilledTask(e._id))
    );
  };
  useEffect(() => {
    if (task.data?.length > 0) {
      const currentDate = new Date();
      const newDates = task.data.map((e) => {
        const createdAt = new Date(e?.createdAt);
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
    dispatch(getMe());
    dispatch(getMyTask()); // جلب جميع المهام
  }, [auth.token, dispatch]);

  const getRowColor = (diffInDays, taskDuration) => {
    if (diffInDays < taskDuration) {
      return "bg-green-500 text-gray-50"; // لون مميز عند تطابق الفرق مع مدة المهمة
    }
    if (diffInDays > taskDuration) {
      return "bg-red-500 text-gray-50"; // لون مميز عند تطابق الفرق مع مدة المهمة
    }
    if (diffInDays == taskDuration) {
      return "bg-yellow-500 text-gray-50"; // لون مميز عند تطابق الفرق مع مدة المهمة
    }
    return "bg-white"; // اللون الافتراضي
  };

  return (
    <div className="w-100">
      {" "}
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
      <div className="overflow-x-auto xl:w-auto lg:w-auto w-screen ">
        <Table dir="rtl">
          <Table.Head className="text-start">
            <Table.HeadCell>اسم المهمه</Table.HeadCell>
            <Table.HeadCell>مده المهمه</Table.HeadCell>
            <Table.HeadCell>بدايه المهمه</Table.HeadCell>
            <Table.HeadCell>المسؤول</Table.HeadCell>
            <Table.HeadCell>حاله العرض</Table.HeadCell>

            <Table.HeadCell>الملحوظات</Table.HeadCell>
            <Table.HeadCell>الصور </Table.HeadCell>
            <Table.HeadCell>الحاله</Table.HeadCell>

            <Table.HeadCell>الخصائص</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y text-center">
            {task.isLoading ? (
              <Table.Row>
                <Table.Cell colSpan="12">
                  جاري تحميل البيانات...{" "}
                  <Spinner aria-label="Default status example" />
                </Table.Cell>
              </Table.Row>
            ) : filteredData?.length > 0 ? (
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
                    {e?.assignedBy?.name || "غير متوفر"}
                  </Table.Cell>
                  <Table.Cell className="lg:p-5 md:p-2 sm:p-0 p-1">
                    {e?.show || "لم يتم العرض"}
                  </Table.Cell>
                  <Table.Cell className="lg:p-5 md:p-2 sm:p-0 p-1 ">
                    {e?.taskNotes || "غير متوفر"}
                  </Table.Cell>
                  <Table.Cell className="lg:p-5 md:p-2 sm:p-0 p-1">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      style={{ maxHeight: "50px", maxWidth: "50px" }}
                    >
                      {e?.images.length > 0 &&
                        e.images.map((img, idx) => (
                          <SwiperSlide
                            key={idx}
                            onClick={() =>
                              handleOpenLightbox(
                                e.images,
                                index * img.image.length + idx
                              )
                            }
                          >
                            <img src={img?.image} alt={`Image ${idx + 1}`} />
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </Table.Cell>
                  <Table.Cell
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

                  <Table.Cell style={{ borderRadius: "5px", padding: "10px 15px" }}>
  <div className="grid xl:grid-cols-3 lg:grid-cols-1 grid-cols-1 gap-2">
    <Tooltip content="تم اكتمال المهمة بنجاح" arrow={false}>
      <Button
        className="bg-green-800 hover:bg-green-700 transition duration-200"
        disabled={
          e.status === "review" ||
          e.status === "rejected" ||
          e.status === "fulfilled"
        }
        size="xs"
        onClick={() => handleTaskStatus(e)}
      >
        تم التنفيذ
      </Button>
    </Tooltip>
    <Tooltip content="إعادة تنفيذ المهمة" arrow={false}>
      <Button
        disabled={
          e.status === "progressing" || e.status === "fulfilled"
        }
        className="bg-yellow-500 hover:bg-yellow-400 transition duration-200"
        size="xs"
        onClick={() => handleTaskRejected(e)}
      >
        اعادة
      </Button>
    </Tooltip>
    <Tooltip content="انهاء المهمة" arrow={false}>
      <Button
        disabled={e.status === "fulfilled"}
        className="bg-gray-200 text-black hover:bg-gray-300 transition duration-200"
        size="xs"
        onClick={() => handleTaskFulfilled(e)}
      >
        انهاء
      </Button>
    </Tooltip>
  </div>
</Table.Cell>

                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan="12">لا توجد بيانات لعرضها </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
      {isOpen && (
        <div>
          {" "}
          <Modal show={isOpen} onClose={() => setIsOpen(false)}>
            <Modal.Header></Modal.Header>
            <Lightbox
              images={images}
              onClose={() => setIsOpen(false)}
              currentIndex={photoIndex}
            />
            <Modal.Footer>
              <Button className="bg-red-600" onClick={() => setIsOpen(false)}>
                اغلاق
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default TasksTable;
