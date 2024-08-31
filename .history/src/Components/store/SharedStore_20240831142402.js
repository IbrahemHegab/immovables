import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CustomerModel: false,
  UpdateCustomerModel: { status: false, data: null },
  GalleryModel: { status: false, data: null },
  UpdateGalleryModel: { status: false, data: null },
  EmployeesModel: false,
  UpdateEmployeesModel: { status: false, data: null },
  TaskModel: { status: false, data: null },
  DetailsModel: { status: false, data: null },
  PermissionModel: false,
  SideBar: false,
  status: { toggel: false, msg: null },
};

const SharedModel = createSlice({
  name: "Models",
  initialState,

  reducers: {
    setOpenCustomerModel(state, action) {
      state.CustomerModel = action.payload;
    },
    setOpenCustomerModelUpdate(state, action) {
      state.UpdateCustomerModel.status = action.payload.status;
      state.UpdateCustomerModel.data = action.payload.data;
    },
    setOpenSideBar(state, action) {
      state.SideBar = action.payload;
    },
    setOpenGalleryModel(state, action) {
      state.GalleryModel = action.payload;
    },
    setOpenGalleryModelUpdate(state, action) {
      state.UpdateGalleryModel.status = action.payload.status;
      state.UpdateGalleryModel.data = action.payload.data;
    },
    setOpenEmployeesModel(state, action) {
      state.EmployeesModel = action.payload;
    },
    setOpenEmployeesModelUpdate(state, action) {
      state.UpdateEmployeesModel.status = action.payload.status;
      state.UpdateEmployeesModel.data = action.payload.data;
    },
    setOpenDetailsModel(state, action) {
      state.DetailsModel.status = action.payload.status;
      state.DetailsModel.data = action.payload.data;
    },
    setOpenPermissionModelModel(state, action) {
      state.PermissionModel = action.payload;
    },
    setOpenTaskModel(state, action) {
      state.TaskModel = action.payload;
    },
    setOpenToast(state, { payload }) {
      state.status.toggel = true;
      state.status.msg = payload;
      
    
    },
  },
});
export default SharedModel.reducer;
export const {
  setOpenCustomerModel,
  setOpenCustomerModelUpdate,
  setOpenSideBar,
  setOpenGalleryModel,
  setOpenGalleryModelUpdate,
  setOpenPermissionModelModel,
  setOpenEmployeesModel,
  setOpenEmployeesModelUpdate,
  setOpenTaskModel,
  setOpenDetailsModel,
  setOpenToast,
} = SharedModel.actions;
