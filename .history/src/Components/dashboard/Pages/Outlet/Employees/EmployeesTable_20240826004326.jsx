import { useEffect } from "react";
import { Button, Table } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

import { fireSwal } from "../../../../utils/AlertModel";
import {
  deleteEmployees,
  getEmployees,
} from "../../../../store/Employees/employeesSlice";
import {
  setOpenEmployeesModelUpdate,
  setOpenTaskModel,
} from "../../../../store/SharedStore";

const EmployeesTable = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.employees);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const handleDelete = (id) => {
    fireSwal("هل أنت متأكد من حذف العميل؟", "", async () => {
      await dispatch(deleteEmployees(id));
      dispatch(getEmployees()); // إعادة جلب البيانات بعد الحذف
    });
  };
  const handleUpdate = (id) => {
    dispatch(setOpenEmployeesModelUpdate({ data: id, status: true }));
  };
  const handleTask = (id) => {
    dispatch(setOpenTaskModel({ data: id, status: true }));
  };
  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto w-screen h-screen">
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم الموظف</Table.HeadCell>

          <Table.HeadCell>المسمي الوظيفي</Table.HeadCell>
          <Table.HeadCell>الخصائص</Table.HeadCell>
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
                <Table.Cell>{e?.role === "manager" ? "مدير"  e?.role === "manager" ? "مدير"  || "غير متوفر"}</Table.Cell>

                <Table.Cell className="grid grid-cols-3 gap-2">
                  <Button
                    className="bg-red-600"
                    size="xs"
                    onClick={() => handleDelete(e._id)}
                  >
                    حذف
                  </Button>
                  <Button
                    size="xs"
                    className="bg-green-600"
                    onClick={() => handleUpdate(e)}
                  >
                    تعديل
                  </Button>
                  <Button size="xs" onClick={() => handleTask(e)}>
                    اضافه مهمه
                  </Button>
                </Table.Cell>
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

export default EmployeesTable;
