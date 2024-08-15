import { Button, Table } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../../../store/Gallerys/gallerySlice";

const GalleryTable = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);
  return (
    <div className="">
      ,يهر
      <div className="overflow-x-auto">
        <Table dir="rtl">
          <Table.Head className="text-start">
            <Table.HeadCell>السعر</Table.HeadCell>
            <Table.HeadCell>المساحه</Table.HeadCell>
            <Table.HeadCell> الصالات</Table.HeadCell>
            <Table.HeadCell>دورات المياة</Table.HeadCell>
            <Table.HeadCell>عرض الشارع</Table.HeadCell>
            <Table.HeadCell>المطابخ</Table.HeadCell>
            <Table.HeadCell>البلكونات</Table.HeadCell>
            <Table.HeadCell>مصعد</Table.HeadCell>
            <Table.HeadCell>مستودع</Table.HeadCell>
            <Table.HeadCell>غرفه خادمه</Table.HeadCell>
            <Table.HeadCell>الحاله</Table.HeadCell>
          </Table.Head>
          {data.length > 0 && data
            ? data.map((e) => (
                <Table.Body key={e._id} className="divide-y text-center">
                  <Table.Row className="bg-white dark:border-warning-700 dark:bg-warning-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-warning-900 dark:text-white">
                      {e.price}
                    </Table.Cell>
                    <Table.Cell>{e.area}</Table.Cell>
                    <Table.Cell>{e.hall}</Table.Cell>
                    <Table.Cell>{e.bathrooms}</Table.Cell>
                    <Table.Cell>{e.street}</Table.Cell>
                    <Table.Cell>{e.kitchen}</Table.Cell>
                    <Table.Cell>{e.balcony}</Table.Cell>
                    <Table.Cell className=" gap-2">
                      <Button
                        className={e.elevator ? "bg-green-600" : "bg-red-600"}
                        size="xs"
                      >
                        {e.elevator ? "نعم" : "لا"}
                      </Button>
                    </Table.Cell>
                    <Table.Cell className=" gap-2">
                      <Button
                        className={e.warehouse ? "bg-green-600" : "bg-red-600"}
                        size="xs"
                      >
                        {e.warehouse ? "نعم" : "لا"}
                      </Button>
                    </Table.Cell>
                    <Table.Cell className=" gap-2">
                      <Button
                        className={e.maid ? "bg-green-600" : "bg-red-600"}
                        size="xs"
                      >
                        {e.maid ? "نعم" : "لا"}
                      </Button>
                    </Table.Cell>
                    <Table.Cell>{e.kind}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))
            : null}
        </Table>
      </div>
    </div>
  );
};

export default GalleryTable;
