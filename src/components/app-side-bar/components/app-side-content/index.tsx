import { MenuAdminItems } from "@/@custom-types";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { setOnQuanLy } from "@/redux/reducers/quanly-reducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppSideContentWrapper } from "./styled";

export const AppSideContent = ({ menus }: { menus: MenuAdminItems[] }) => {
  const dispatch = useDispatch();
  const onQuanLy = useSelector((state: any) => state.quanly.onQuanLy);

  return (
    <AppSideContentWrapper>
      <SidebarContent className="px-4">
        <SidebarGroup />
        <SidebarGroupLabel className="flex justify-center">
          <img src={`${process.env.basePath}/img/logo_sg.png`} alt="logo" className="w-[100px]" />
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {menus.map((menuItem: MenuAdminItems, index: number) => (
              <SidebarMenuItem key={index} className={`${menuItem.key == onQuanLy ? "active " : ""} rounded-br`}>
                <SidebarMenuButton asChild className="px-4">
                  <button
                    onClick={() => {
                      dispatch(setOnQuanLy(menuItem.key));
                    }}
                    className="font-medium text-md"
                  >
                    <menuItem.icon />
                    <span>{menuItem.value}</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroup />
      </SidebarContent>
    </AppSideContentWrapper>
  );
};
