import Swal from "sweetalert2";


export function fireSwal( details, id ,dispatch) {
  Swal.fire({
    title: details,
    text: "لن تتمكن من التراجع عن هذا!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "نعم",
    cancelButtonText: "لا",
  }).then((result) => {
    if (result.isConfirmed) {
     
        .then(() => {
          Swal.fire({
            title: "تم الحذف بنجاح",
            icon: "success",
            confirmButtonText: "اغلاق",
          });
        })
        .catch(() => {
          Swal.fire({
            title: "حدث خطأ",
            text: "لم يتم حذف العنصر.",
            icon: "error",
            confirmButtonText: "اغلاق",
          });
        });
    }
  });
}
