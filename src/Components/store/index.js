import { configureStore } from "@reduxjs/toolkit";

import customerSlice from "./Customers/customerSlice";
import SharedStore from "./SharedStore";
import gallerySlice from "./Gallerys/gallerySlice";
import employeesSlice from "./Employees/employeesSlice";
import authSlice from "./auth/authSlice";
import taskSlice from "./Task/taskSlice";
import CartSlice from "./Cart/CartSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    task: taskSlice,
    customer: customerSlice,
    sharedStore: SharedStore,
    employees: employeesSlice,
    gallery: gallerySlice,
    cart: CartSlice,
    // permission: headerSlice,
    // storage: headerSlice
  },
});
