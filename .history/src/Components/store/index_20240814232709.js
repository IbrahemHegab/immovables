import { configureStore } from "@reduxjs/toolkit";

import customerSlice from "./Customers/customerSlice";
import SharedStore from "./SharedStore";
import gallerySlice from "./Gallerys/gallerySlice";
import employeesSlice from "./Employees/employeesSlice";

export default configureStore({
  reducer: {
    auth: auth,
    // contracts: contractsSlice,
    customer: customerSlice,
    sharedStore: SharedStore,
    employees: employeesSlice,
    gallery: gallerySlice,
    // permission: headerSlice,
    // storage: headerSlice
  },
});
