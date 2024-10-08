import { configureStore } from "@reduxjs/toolkit";

import customerSlice from "./Customers/customerSlice";
import SharedStore from "./SharedStore";
import gallerySlice from "./Gallerys/gallerySlice";
import employeesSlice from "./Employees/employeesSlice";
import authSlice from "./auth/authSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    task: Task,
    customer: customerSlice,
    sharedStore: SharedStore,
    employees: employeesSlice,
    gallery: gallerySlice,
    // permission: headerSlice,
    // storage: headerSlice
  },
});
