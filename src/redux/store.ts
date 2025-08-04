import { configureStore } from "@reduxjs/toolkit";
import quanlyReducer from "./reducers/quanly-reducer";
import userReducer from "./reducers/user-reducer";

export const AdminStore = configureStore({
  reducer: {
    quanly: quanlyReducer,
    user: userReducer,
  },
});
