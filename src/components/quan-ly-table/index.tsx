import React, { useState } from "react";
import { QuanLyTablerWrapper, ThItemWrapper, TrItemWrapper } from "./styled";
import { TableConfig } from "@/@custom-types/config-table";
import CustomButton from "../custom-button";
import { DeleteIcon, Eye } from "lucide-react";
import { formatDate } from "@/utils";
import { GiCancel, GiCaterpillar, GiOldKing } from "react-icons/gi";
import ModalView from "../modal-view";
import { AdminServices } from "@/services/admin-services";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/reducers/quanly-reducer";
import { useToast } from "../toast-provider";

interface TableProps {
  keyTB: string; // dựa vào type sẽ biết để render mục thao tác sửa xóa xem chi tiết tùy vào danh mục quản lý
  listFormat?: any;
  tableConfig: TableConfig[];
}

interface viewModalProps {
  type: string;
  id?: string;
  show: boolean;
}

//Hàm này sẽ hỗ trợ render cái key đặt biệt như key hình ảnh, vvv
const handleSpecialKey = (key: string, itemConfigKey: any) => {
  if (key == "gender") {
    return "Nam";
  } else if (key == "thumbnail" || key == "image") {
    return <img src={itemConfigKey} alt="" className="h-[50px] w-[50px]" />;
  } else if (key == "createdAt" || key == "updatedAt") {
    const newDate = formatDate(itemConfigKey);
    return newDate;
  } else if (key == "paymentType") {
    return handlePaymentType(itemConfigKey);
  } else if (key == "status") {
    return handlePaymentStatus(itemConfigKey);
  }
  return itemConfigKey;
};

const handlePaymentType = (pt: string) =>
  pt == "cod" ? (
    <div className="px-2 py-2 rounded-[10px] bg-blue text-white w-fit uppercase font-semibold">{pt}</div>
  ) : (
    <div className="px-2 py-2 rounded-[10px] bg-yellow-500 text-white w-fit uppercase font-semibold">{pt}</div>
  );

const handlePaymentStatus = (status: string) => {
  if (status == "pending") {
    return (
      <div className="px-2 py-2 rounded-[10px] bg-yellow-blue w-fit text-white bg-blue uppercase font-semibold">
        Đang xử lý
      </div>
    );
  }
};

//Danh sách các danh mục sẽ có nút xóa

//tí về fix
const QuanLyTable = ({ listFormat, tableConfig, keyTB }: TableProps) => {
  const ad = new AdminServices();
  const dispatch = useDispatch();
  console.log({ listFormat });
  //Phần modal này sẽ xem chi tiết, và sửa
  const [viewModal, setViewModal] = useState<viewModalProps>({
    type: keyTB, //đang quản lý danh mục sản phẩm nào
    show: false,
    id: "",
  });
  const { showToast } = useToast();

  const handleDelete = async (id: string, type: string) => {
    try {
      dispatch(setLoading()); // bật loading
      const ad = new AdminServices();
      if (type === "san-pham") {
        await ad.deleteProduct(id);
        // Có thể thêm reload danh sách ở đây nếu cần
        showToast("Xóa sản phẩm thành công");
      }
    } catch (err) {
      console.error("Xóa thất bại:", err);
    } finally {
      dispatch(setLoading()); // tắt loading
    }
  };

  const handleCancelOrder = async (id: string) => {
    try {
      const res = await ad.cancelOrder(id);

      showToast("Đã hủy đơn hàng");
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading());
    }
  };

  const handleApproveOrder = async (id: string) => {
    try {
      const res = await ad.approveOrder(id);

      showToast("Đã xác nhận đơn hàng");
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setLoading());
    }
  };

  const renderThaoTacBar = (key: string, id: string, status?: any) => {
    if (key === "nguoi-dung") {
      return (
        <div className="flex justify-center items-center bg-yellow-500 rounded-[10px] gap-2 px-2 py-2">
          <CustomButton
            version={0}
            text="Xem chi tiết"
            Icon={<Eye />}
            onClick={() => setViewModal({ show: true, id, type: key })}
          />
        </div>
      );
    } else if (key == "san-pham") {
      return (
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-yellow-500 rounded-[10px] gap-2 px-2 py-2">
            <CustomButton
              version={0}
              text="Xem chi tiết"
              Icon={<Eye />}
              onClick={() => setViewModal({ show: true, id, type: key })}
            />
          </div>
          <div className="flex justify-center items-center bg-yellow-500 rounded-[10px] gap-2 px-2 py-2">
            <CustomButton
              version={0}
              text="Xóa"
              Icon={<DeleteIcon />}
              onClick={() => {
                handleDelete(id, keyTB);
              }}
            />
          </div>
        </div>
      );
    } else if (key == "don-hang") {
      return (
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-yellow-500 rounded-[10px] gap-2 px-2 py-2">
            <CustomButton
              version={0}
              text="Xem chi tiết"
              Icon={<Eye />}
              onClick={() => setViewModal({ show: true, id, type: key })}
            />
          </div>
          {status.toLowerCase().replace(" ", "-") !== "canceled" ? (
            <div className="flex  gap-2">
              <div className="flex justify-center items-center bg-yellow-500 rounded-[10px] gap-2 px-2 py-2">
                <CustomButton
                  version={0}
                  text="Hủy đơn"
                  Icon={<GiCancel />}
                  onClick={() => {
                    handleCancelOrder(id);
                  }}
                />
              </div>
              <div className="flex justify-center items-center bg-yellow-500 rounded-[10px] gap-2 px-2 py-2">
                <CustomButton
                  version={0}
                  text="Xác nhận"
                  Icon={<GiOldKing />}
                  onClick={() => {
                    handleApproveOrder(id);
                  }}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <QuanLyTablerWrapper>
      <ModalView
        list={listFormat}
        type={viewModal.type}
        id={viewModal.id ?? ""}
        show={viewModal.show}
        setShow={() => {
          setViewModal({ show: false, id: "", type: keyTB });
        }}
      />
      <table>
        <TrItemWrapper>
          {tableConfig!.map((config) => (
            <ThItemWrapper $size="md" key={config.key}>
              {config.Label}
            </ThItemWrapper>
          ))}
          <ThItemWrapper>Thao tác</ThItemWrapper>
        </TrItemWrapper>
        {listFormat?.map((_item: any, index: number) => (
          <TrItemWrapper key={index}>
            {tableConfig.map((config: any) => (
              <ThItemWrapper $size="md" align="left" key={config.key} $fw={400} className="text-[14px] text-gray-500">
                {handleSpecialKey(config.key, _item[config.key])}
              </ThItemWrapper>
            ))}
            <ThItemWrapper $size="md">
              {keyTB ? (
                renderThaoTacBar(
                  keyTB,
                  keyTB === "san-pham"
                    ? _item.ID_Product
                    : keyTB === "don-hang"
                      ? _item.ID_Order
                      : keyTB === "user"
                        ? _item.id
                        : null,
                  keyTB === "don-hang" ? _item.Status : null
                )
              ) : (
                <div></div>
              )}
            </ThItemWrapper>
          </TrItemWrapper>
        ))}
      </table>
    </QuanLyTablerWrapper>
  );
};

export default QuanLyTable;
