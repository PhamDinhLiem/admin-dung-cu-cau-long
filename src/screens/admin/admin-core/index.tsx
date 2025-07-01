import React, { useEffect, useMemo, useState } from "react";
import { AdminCoreWrapper } from "./styled";
import { QuanLyComponent } from "@/components/quan-ly-components";
import { useSelector } from "react-redux";
import { tableConfigList } from "@/@constant";
import { productList } from "@/@constant/data";

const AdminCoreScreen = () => {
  const [lists, setLists] = useState<any>();
  const onManage = useSelector((state: any) => state.quanly.onQuanLy); //state để biết đang quản lý section nào

  //Để lấy ra loại bảng hiển thị quản lý
  const tableConfig: any = useMemo(() => {
    const found = tableConfigList.find((tableConfig: any) => tableConfig.type === onManage);
    return found?.config;
  }, [onManage]);

  //Call api cần thiết để get dữ liệu tùy vào đang quản lý cái gì
  useEffect(() => {
    if (onManage) {
    }
  }, [onManage]);

  //Tạm chưa có nên sẽ để hard code data
  useEffect(() => {
    if (onManage) {
      switch (onManage) {
        case "trang-chu":
          return;
        case "san-pham":
          setLists(productList);
          return;
        default:
          setLists([]);
      }
    }
  }, [onManage]);

  const listFormat = useMemo(() => {
    lists?.map((item: any) => {
      return {};
    });
  }, [lists]);

  return (
    <AdminCoreWrapper>
      <QuanLyComponent type={onManage} tableConfig={tableConfig} listFormat={lists} isSearch />
    </AdminCoreWrapper>
  );
};
export default AdminCoreScreen;
