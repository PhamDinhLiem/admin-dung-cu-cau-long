import { Sidebar, useSidebar } from "@/components/ui/sidebar";
import AppSideFooter from "./components/app-side-footer";
import { AppSideContent } from "./components/app-side-content";
import { menusList } from "@/@constant";
import { useSelector } from "react-redux";

const AppSidebar = () => {
  const { state, open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar } = useSidebar();
  const onQuanLy = useSelector((state: any) => state.onQuanLy);
  return (
    <Sidebar collapsible="icon">
      <AppSideContent menus={menusList} />
      <AppSideFooter />
    </Sidebar>
  );
};

export default AppSidebar;
