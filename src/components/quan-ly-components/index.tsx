import { menusList } from "@/@constant";
import { TableConfig } from "@/@custom-types/config-table";
import { ShowModal } from "@/@custom-types/manager";
import useWindowResize from "@/hooks/use-window-resize";
import { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { AddSearchRefesh, QuanLyComponentWrapper, QuanLyContent, QuanLyTitle } from "./styled";
import DashBoardSection from "@/section/dashboard";
import QuanLyTable from "../quan-ly-table";
import { Plus } from "lucide-react";
import SearchBar from "../search-bar";
import CustomButton from "../custom-button";
import { IoReload } from "react-icons/io5";
import ModalAdd from "../modal-add";
import { setLoading } from "@/redux/reducers/quanly-reducer";

export interface QuanLyComponent {
  isSelectAll?: boolean;
  isSearch?: boolean; // để biết đang search
  tableConfig: TableConfig[]; //loại bảng trình chiếu
  listFormat: any;
  type: "trang-chu" | "san-pham" | "nguoi-dung" | "bien-the" | "don-hang" | "ma-giam-gia" | "danh-muc" | "vai-tro";
  addBtn?: {
    text?: string;
    onClick?: (value?: any) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  };
  detailBtn?: {
    text?: string;
    onClick?: (value?: any) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  };

  deleteBtn?: {
    text?: string;
    onClick?: (value?: any) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  };
  updateBtn?: {
    text?: string;
    onClick?: (value?: any) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  };
  customBtn?: {
    text?: string;
    onClick?: (value?: any) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  };
  downloadBtn?: {
    text?: string;
    onClick?: (value?: any) => void;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
  };
}

export function QuanLyComponent({
  type,
  listFormat,
  tableConfig,
  addBtn,
  detailBtn,
  deleteBtn,
  updateBtn,
  customBtn,
  downloadBtn,
  isSearch = false,
  isSelectAll = false,
}: QuanLyComponent) {
  const size: any = useWindowResize(); // state để làm responsive
  const [searchText, setSearchText] = useState<string>(""); //state để biết đang search cái gì
  const [placeSearch, setPlaceSearch] = useState<string>("");
  const dispatch = useDispatch();

  //Phần modal sẽ hiển thực hiện thêm
  const [showModal, setShowModel] = useState<ShowModal>({
    type: undefined,
    show: false,
    data: null,
    addType: type,
    title: "",
  });

  const QuanLySearchBar = useMemo(() => {
    if (isSearch) {
      // eslint-disable-next-line react/display-name
      return () => <SearchBar type={type} />;
    }
    return Fragment;
  }, [isSearch, type]);

  useEffect(
    () =>
      setShowModel({
        type: undefined,
        show: false,
        data: null,
        title: type,
        addType: type,
      }),

    [type]
  );

  const QuanLyAddButton = useMemo<JSX.Element | null>(() => {
    if (["bien-the", "nguoi-dung", "don-hang"].includes(type)) return null;

    return (
      <CustomButton
        version={0}
        text="Thêm"
        Icon={<Plus size={14} />}
        onClick={() => setShowModel({ show: !showModal.show })}
      />
    );
  }, [type, showModal.show]);

  const QuanLyRefeshButton = useMemo(() => {
    // eslint-disable-next-line react/display-name
    return () => (
      <CustomButton version={0} text="Reload" Icon={<IoReload size={14} />} onClick={() => dispatch(setLoading())} />
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  //Phần tên phần đang quản lý
  const menu = useMemo(() => {
    const found = menusList.find((item: any) => item.key === type);
    return found ? found : "";
  }, [type]);

  return (
    <QuanLyComponentWrapper>
      {type == "trang-chu" ? (
        <DashBoardSection />
      ) : (
        <QuanLyContent>
          <ModalAdd show={showModal.show} setShow={() => setShowModel({ show: !showModal.show })} addType={type} />
          <QuanLyTitle>
            <h2 className="capitalize">Quản lý {menu ? menu.value : ""} </h2>
            <div className="bg-yellow-300 px-3 py-4 mt-10 rounded-[10px] max-w-[1200px]">
              <AddSearchRefesh>
                <QuanLySearchBar />
                <div className="flex gap-2 items-center mb-[30px]">
                  {QuanLyAddButton}
                  <QuanLyRefeshButton />
                </div>
              </AddSearchRefesh>
              <QuanLyTable tableConfig={tableConfig} listFormat={listFormat} keyTB={type} />
            </div>
          </QuanLyTitle>
        </QuanLyContent>
      )}
    </QuanLyComponentWrapper>
  );
}
