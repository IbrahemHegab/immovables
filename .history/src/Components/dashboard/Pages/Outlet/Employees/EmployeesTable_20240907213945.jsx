import { useEffect, useMemo } from "react";
import { Button, Table, Spinner } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

import {
 
  getEmployees,
} from "../../../../store/Employees/employeesSlice";
import {
  setOpenEmployeesModelUpdate,
  setOpenTaskModel,
} from "../../../../store/SharedStore";
import { getMe } from "../../../../store/auth/authSlice";

const EmployeesTable = () => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const employees = useSelector((state) => state.employees);

  const filteredTasks = useMemo(() => {
    if (!employees.data) return [];

    if (auth.user?.role === "manager") {
      return employees.data; // The manager sees all tasks
    }
    if (auth.user?.role === "accountant") {
      return employees.data.filter(
        (e) => e?.role === "supervisor" || e?.role === "marketer"
      );
    }
    if (auth.user?.role === "supervisor") {
      return employees.data?.filter((e) => e?.role === "marketer");
    }
    if (auth.user?.role === "marketer") {
      return []; // Marketers don't see any tasks
    }
    return [];
  }, [auth.user?.role, employees.data]);

  useEffect(() => {
    if (!employees.data) {
      dispatch(getEmployees());
    }

    if (!auth.user) {
      dispatch(getMe(auth.token));
    }
  }, [auth.token, employees.data, auth.user, dispatch]);

 

  const handleUpdate = (id) => {
    dispatch(setOpenEmployeesModelUpdate({ data: id, status: true }));
  };
  const handleTask = (id) => {
    dispatch(setOpenTaskModel({ data: id, status: true }));
  };

  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto md:w-auto w-screen h-screen">
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم الموظف</Table.HeadCell>
          <Table.HeadCell>المسمي الوظيفي</Table.HeadCell>
          {auth.user?.role === "manager" && (
            <Table.HeadCell>الخصائص</Table.HeadCell>
          )}
        </Table.Head>

        <Table.Body className="divide-y text-center">
          {employees.isLoading ? (
            <Table.Row>
              <Table.Cell colSpan="7">
                جاري تحميل البيانات...{" "}
                <Spinner aria-label="Default status example" />
              </Table.Cell>
            </Table.Row>
          ) : filteredTasks && filteredTasks.length > 0 ? (
            filteredTasks.map((e) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={e?._id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e?.name || "لا يوجد اسم"}
                </Table.Cell>
                <Table.Cell>
                  {e?.role === "manager"
                    ? "مدير"
                    : e?.role === "supervisor"
                    ? "مشرف"
                    : e?.role === "accountant"
                    ? "محاسب"
                    : e?.role === "marketer"
                    ? "مسوق"
                    : "غير متوفر"}
                </Table.Cell>
                {auth.user?.role !== "marketer" && (
                  <Table.Cell className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2">
                 
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
                )}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
           <Table.Cell colSpan="6">
                لا توجد بيانات لعرضها{" "}
                <Spinner aria-label="لا توجد بيانات لعرضها" />
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default EmployeesTable;
