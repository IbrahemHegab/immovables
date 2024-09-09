// import { useCallback, useEffect, useMemo, useState } from "react";
// // import { Button, Table, Dropdown } from "flowbite-react";
// import { MdEdit, MdDeleteForever } from "react-icons/md";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteCustomer,
//   getCustomer,
// } from "../../../../store/Customers/customerSlice";
// import { fireSwal } from "../../../../utils/AlertModel";

// import { setOpenCustomerModelUpdate } from "../../../../store/SharedStore";
// import { getEmployees } from "../../../../store/Employees/employeesSlice";
// import { getMe } from "../../../../store/auth/authSlice";
// import MainTable from "../../../MainTable";
// import MainBtn from "../../../MainBtn";

// const CustomerTable = () => {
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);
//   const customer = useSelector((state) => state.customer);
//   const [openModel, setOpenModel] = useState(null);
//   const [sendData, setSendData] = useState([]);
//   const [modelDelete, setModelDelete] = useState(false);
//   const [selectedRowForDelete, setSelectedRowForDelete] = useState(null);
//   const [deleteMessage, setDeleteMessage] = useState(null);
//   useEffect(() => {
//     dispatch(getMe(auth.token));
//     dispatch(getCustomer(auth.token));
//     dispatch(
//       getEmployees({ supervisor: "مشرف", marketer: "مسوق", token: auth.token })
//     );
//   }, [auth.token, dispatch]);

//   const handleDelete = (id) => {
//     fireSwal("هل أنت متأكد من حذف العميل؟", "", async () => {
//       await dispatch(deleteCustomer(id));
//       dispatch(getCustomer()); // إعادة جلب البيانات بعد الحذف
//     });
//   };
//   const handleEditClick = useCallback((row) => {
//     setSendData(row.original);
//     setOpenModel((prevModel) => !prevModel);
//   }, []);
//   const handleDeleteClick = useCallback(
//     (row) => {
//       setModelDelete((prevModelDelete) => !prevModelDelete);
//       setDeleteMessage(`هل انت متأكد من حذف ال (${row?.original?.name}) `);
//       const dispatchData = () => {
//         dispatch(deleteClass(row?.original?._id));
//       };
//       setSelectedRowForDelete(() => dispatchData);
//     },
//     [dispatch]
//   );
//   // const handleUpdate = (id) => {
//   //   dispatch(setOpenCustomerModelUpdate({ data: id, status: true }));
//   // };
//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: "name",
//         header: "اسم العميل",
//         flex: 1,
//         Cell: ({ row }) => (
//           <>
//             <span>{row?.original?.name}</span>
//           </>
//         ),
//       },
//       {
//         accessorKey: "identity",
//         header: "رقم الهويه",
//         flex: 1,
//         Cell: ({ row }) => (
//           <>
//             <span>{row?.original?.identity}</span>
//           </>
//         ),
//       },
//       {
//         accessorKey: "phone",
//         header: "التليفون",
//         flex: 1,
//         Cell: ({ row }) => (
//           <>
//             <span>{row?.original?.phone}</span>
//           </>
//         ),
//       },
//       // {
//       //   accessorKey: "teacher",
//       //   header: "المسوقين",
//       //   flex: 1,
//       //   Cell: ({ row }) => (
//       //     <>
//       //       <span>{row?.original?.teacher?.name}</span>
//       //     </>
//       //   ),
//       // },
//       // {
//       //   accessorKey: "teacher",
//       //   header: "الخصائص",
//       //   flex: 1,
//       //   Cell: ({ row }) => (
//       //     <>
//       //       <span>{row?.original?.teacher?.name}</span>
//       //     </>
//       //   ),
//       // },
//       {
//         id: "actions",
//         header: "Actions",
//         size: 100,
//         Cell: ({ row }) => (
//           <div className="grid grid-cols-2 text-center place-content-center items-center gap-2">
//             <MainBtn
//               btn={<MdEdit onClick={() => handleEditClick(row)} />}
//               className="bg-danger"
//             />

//             <MainBtn
//               btn={
//                 <MdDeleteForever
//                   onClick={() => handleDeleteClick(row)}
//                   className="bg-danger"
//                 />
//               }
//             />
//           </div>
//         ),
//       },
//     ],
//     []
//   );
//   return (
//     // <div className="overflow-x-scroll xl:w-auto lg:w-auto md:w-auto w-screen h-screen">
//     //   <Table dir="rtl">
//     //     <Table.Head className="text-start">
//     //       <Table.HeadCell>اسم العميل</Table.HeadCell>
//     //       <Table.HeadCell>رقم الهوية</Table.HeadCell>
//     //       <Table.HeadCell>التليفون</Table.HeadCell>
//     //       <Table.HeadCell>المسوقين</Table.HeadCell>
//     //       <Table.HeadCell>الخصائص</Table.HeadCell>
//     //     </Table.Head>

//     //     <Table.Body className="divide-y text-center">
//     //       {customer.data && customer.data.length > 0 ? (
//     //         customer.data.map((e) => (
//     //           <Table.Row
//     //             className="bg-white dark:border-gray-700 dark:bg-gray-800"
//     //             key={e?._id}
//     //           >
//     //             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//     //               {e?.name || "لا يوجد اسم"}
//     //             </Table.Cell>
//     //             <Table.Cell>{e?.identity || "غير متوفر"}</Table.Cell>
//     //             <Table.Cell>{e?.phone || "غير متوفر"}</Table.Cell>
//     //             <Table.Cell>
//     //               <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
//     //                 <Dropdown label="المسوقين" inline>
//     //                   {e.marketers.length > 0 && e.marketers ? (
//     //                     e.marketers.map((employee, inx) => (
//     //                       <Dropdown.Item key={inx}>{employee}</Dropdown.Item>
//     //                     ))
//     //                   ) : (
//     //                     <Dropdown.Item> لايوجد مسوقين</Dropdown.Item>
//     //                   )}
//     //                 </Dropdown>
//     //               </div>
//     //             </Table.Cell>
//     //             <Table.Cell className="grid grid-cols-2 gap-2">
//     //               <Button
//     //                 className="bg-red-600"
//     //                 size="xs"
//     //                 onClick={() => handleDelete(e._id)}
//     //               >
//     //                 حذف
//     //               </Button>
//     //               <Button size="xs" onClick={() => handleUpdate(e)}>
//     //                 تعديل
//     //               </Button>
//     //             </Table.Cell>
//     //           </Table.Row>
//     //         ))
//     //       ) : (
//     //         <Table.Row>
//     //           <Table.Cell colSpan="6">لا توجد بيانات لعرضها</Table.Cell>
//     //         </Table.Row>
//     //       )}
//     //     </Table.Body>
//     //   </Table>
//     // </div>
//     <MainTable
//       data={customer?.data || []}
//       columns={columns}
//       // isLoading={loading}
//       // form={<ClassForm type="add" SendData={[]} />}
//     />
//   );
// };

// export default CustomerTable;
import { useEffect } from "react";
import { Button, Table, Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCustomer,
  getCustomer,
} from "../../../../store/Customers/customerSlice";
import { fireSwal } from "../../../../utils/AlertModel";

import { setOpenCustomerModelUpdate } from "../../../../store/SharedStore";
import { getEmployees } from "../../../../store/Employees/employeesSlice";
import { getMe } from "../../../../store/auth/authSlice";

const CustomerTable = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const customer = useSelector((state) => state.customer);

  useEffect(() => {
    dispatch(getMe(auth.token));
    dispatch(getCustomer(auth.token));
    dispatch(
      getEmployees({ supervisor: "مشرف", marketer: "مسوق", token: auth.token })
    );
  }, [auth.token, dispatch]);

  // const handleDelete = (id) => {
  //   fireSwal("هل أنت متأكد من حذف العميل؟", "", async () => {
  //     await dispatch(deleteCustomer(id));
  //     dispatch(getCustomer()); // إعادة جلب البيانات بعد الحذف
  //   });
  // };// افترض أن لديك دالة حذف في الـ Redux.
  const handleDelete = (id) => async (dispatch) => {
    try {
      await dispatch(deleteCustomer(id)).unwrap();
      fireSwal("هل أنت متأكد من حذف هذا العنصر؟", "", handleDelete)
    } catch (error) {
      console.error("حدث خطأ أثناء حذف العنصر:", error);
    }
  };

  // استخدام `fireSwal` في مكان ما في الكود.
  // fireSwal("هل أنت متأكد من حذف هذا العنصر؟", "", handleDelete);

  const handleUpdate = (id) => {
    dispatch(setOpenCustomerModelUpdate({ data: id, status: true }));
  };
  return (
    <div className="overflow-x-scroll xl:w-auto lg:w-auto md:w-auto w-screen h-screen">
      <Table dir="rtl">
        <Table.Head className="text-start">
          <Table.HeadCell>اسم العميل</Table.HeadCell>
          <Table.HeadCell>رقم الهوية</Table.HeadCell>
          <Table.HeadCell>التليفون</Table.HeadCell>
          <Table.HeadCell>المسوقين</Table.HeadCell>
          {auth.user?.role === "manager" && (
            <Table.HeadCell>الخصائص</Table.HeadCell>
          )}
        </Table.Head>

        <Table.Body className="divide-y text-center">
          {customer.data && customer.data.length > 0 ? (
            customer.data.map((e) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={e?._id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {e?.name || "لا يوجد اسم"}
                </Table.Cell>
                <Table.Cell>{e?.identity || "غير متوفر"}</Table.Cell>
                <Table.Cell>{e?.phone || "غير متوفر"}</Table.Cell>
                <Table.Cell>
                  <div className="flex justify-center text-center bg-gray-200 p-2 rounded-lg">
                    <Dropdown label="المسوقين" inline>
                      {e.marketers?.length > 0 && e.marketers ? (
                        e.marketers.map((employee, inx) => (
                          <Dropdown.Item key={inx}>
                            {employee.name}
                          </Dropdown.Item>
                        ))
                      ) : (
                        <Dropdown.Item> لايوجد مسوقين</Dropdown.Item>
                      )}
                    </Dropdown>
                  </div>
                </Table.Cell>
                {auth.user?.role === "manager" && (
                  <Table.Cell className="grid grid-cols-2 gap-2">
                    <Button
                      className="bg-red-600"
                      size="xs"
                      onClick={() => handleDelete(e._id)}
                    >
                      حذف
                    </Button>
                    <Button size="xs" onClick={() => handleUpdate(e)}>
                      تعديل
                    </Button>
                  </Table.Cell>
                )}
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

export default CustomerTable;
