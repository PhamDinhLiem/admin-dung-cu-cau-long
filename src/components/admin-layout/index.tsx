import React from "react";
import { AdminLayoutContent, AdminLayoutWrapper } from "./styled";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import AppSidebar from "../app-side-bar";

const AdminLayout = ({ children }: any) => {
  return (
    <AdminLayoutWrapper className={``}>
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
    </AdminLayoutWrapper>
  );
};

export default AdminLayout;
