import { configureStore } from "@reduxjs/toolkit";
import quanlyReducer from "./reducers/quanly-reducer";

export const AdminStore = configureStore({
  reducer: {
    quanly: quanlyReducer,
  },
});
