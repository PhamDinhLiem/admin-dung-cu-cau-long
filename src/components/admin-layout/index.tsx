"use client";

import React, { useEffect } from "react";
import { AdminLayoutContent, AdminLayoutWrapper } from "./styled";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "../app-side-bar";
import LoginModal from "@/screens/admin/login-modal";
import { useDispatch, useSelector } from "react-redux";
import { ToastProvider } from "../toast-provider";
import { setOnUser } from "@/redux/reducers/user-reducer";

const AdminLayout = ({ children }: any) => {
  const user = useSelector((state: any) => state.user.user);
  const onQuanLy = useSelector((state: any) => state.quanly.onQuanLy);
  const dispatch = useDispatch();

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    const tokenStorage = localStorage.getItem("token");
    if (!user && userStorage && tokenStorage) {
      dispatch(setOnUser(JSON.parse(userStorage)));
      dispatch(setOnUser(JSON.parse(tokenStorage)));
    }
  }, []);

  return (
    <AdminLayoutWrapper className={``}>
      <ToastProvider>
        <div className="wrapper-box" style={{ position: "relative" }}>
          <AdminLayoutContent>
            <SidebarProvider>
              <AppSidebar />
              <main className="w-full bg-white">
                <SidebarTrigger />
                {children}
              </main>
            </SidebarProvider>
          </AdminLayoutContent>
        </div>
      </ToastProvider>
    </AdminLayoutWrapper>
  );
};

export default AdminLayout;
