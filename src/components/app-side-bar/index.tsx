import { Sidebar } from "@/components/ui/sidebar";
import AppSideFooter from "./components/app-side-footer";
import { AppSideContent } from "./components/app-side-content";
import { menusList } from "@/@constant";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <AppSideContent menus={menusList} />
      <AppSideFooter />
    </Sidebar>
  );
};

export default AppSidebar;
