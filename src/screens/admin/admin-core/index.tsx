import React, { useEffect, useMemo, useState } from "react";
import { AdminCoreWrapper } from "./styled";
import { QuanLyComponent } from "@/components/quan-ly-components";
import { useSelector } from "react-redux";
import { tableConfigList } from "@/@constant";
import { AdminServices } from "@/services/admin-services";

const AdminCoreScreen = () => {
  const ad = new AdminServices();
  const [lists, setLists] = useState<any>();
  const onManage = useSelector((state: any) => state.quanly.onQuanLy); //state để biết đang quản lý section nào
  const loading = useSelector((state: any) => state.quanly.loading); // Để biết có đang loading lại không rồi fetch lại data
  console.log(onManage);

  //Để lấy ra loại bảng hiển thị quản lý
  const tableConfig: any = useMemo(() => {
    const found = tableConfigList.find((tableConfig: any) => tableConfig.type === onManage);
    return found?.config;
  }, [onManage]);

  //call api dựa vào loại sản phẩm quản lý
  useEffect(() => {
    const fetchData = async () => {
      let res;
      if (onManage === "san-pham") {
        res = await ad.getProductList();
        setLists(res);
      } else if (onManage == "nguoi-dung") {
        res = await ad.getUserList();
        setLists(res);
      } else if (onManage == "danh-muc") {
        res = await ad.getCategoriesLis();
        setLists(res);
      } else if (onManage == "don-hang") {
        res = await ad.getOrderList();
        setLists(res);
      } else if (onManage == "bien-the") {
        res = await ad.getProductList();
        setLists(res);
      } else if (onManage == "ma-giam-gia") {
        res = await ad.getVouchersList();
        setLists(res);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onManage, loading]);

  return (
    <AdminCoreWrapper>
      <QuanLyComponent type={onManage} tableConfig={tableConfig} listFormat={lists} isSearch />
    </AdminCoreWrapper>
  );
};
export default AdminCoreScreen;
