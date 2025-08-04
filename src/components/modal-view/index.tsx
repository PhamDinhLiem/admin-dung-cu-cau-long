import { useEffect, useState } from "react";
import { ModalViewWrapper } from "./styled";
import { AdminServices } from "@/services/admin-services";
import CustomButton from "../custom-button";
import { useToast } from "../toast-provider";

interface ModalViewProps {
  type: string;
  id: string;
  show: boolean;
  setShow: any;
  list: any[];
}

//Components để view detail sản phẩm
const ModalView = ({ type, id, show, setShow, list }: ModalViewProps) => {
  const ad = new AdminServices();
  const [modifiedList, setModifiedList] = useState<any>();
  const [keyList, setKeyList] = useState<string[]>(); // Danh sách các key để render ra giao diện
  const { showToast } = useToast();
  const [modifiedUpdate, setModifiedUpdate] = useState<any>({});
  //console.log(modifiedList);

  useEffect(() => {
    const handleDetailData = async () => {
      setModifiedList(list.find((item) => (item.Id = id)));
    };
    if (id) {
      handleDetailData();
    }
  }, [list, id]);

  useEffect(() => {
    if (modifiedList && !Array.isArray(modifiedList)) {
      setKeyList(Object.keys(modifiedList));
      setModifiedUpdate(modifiedList);
    }
  }, [modifiedList]);

  const specialInput = (itemKey: string, modifiedList: any) => {
    switch (itemKey) {
      case "ID_Product":
        return <input value={modifiedList[itemKey]} disabled={true} className="bg-blue-gray-300 cursor-not-allowed" />;
      case "ID_Category":
        return <input value={modifiedList[itemKey]} disabled={true} className="bg-blue-gray-100 cursor-not-allowed" />;
      case "Image":
        return <input value={modifiedList[itemKey]} disabled={true} className="bg-blue-gray-100 cursor-not-allowed" />;
      case "thumbnail":
        return <img src={modifiedList[itemKey]} className="w-[50px] h-[50px]" alt="" />;
      case "images":
        return (
          <div className="flex items-center gap-2 max-w-[600px] overflow-y-auto">
            {modifiedList[itemKey].map((obj: any, index: number) => (
              <img src={obj.image} className="w-[70px] h-[70px]" alt="" key={index} />
            ))}
          </div>
        );
      case "variants":
        return (
          <div className="flex items-center gap-2 max-w-[600px] overflow-y-auto">
            {modifiedList[itemKey].length == 0 ? (
              <div>Sản phẩm chưa có biến thể hãy tạo thêm ở variant</div>
            ) : (
              modifiedList[itemKey].map((obj: any, index: number) => (
                <div className="px-2 py-2 bg-white text-black rounded-[10px]" key={index}>
                  <p>Màu RGB: {obj.colorRGB}</p>
                  <p>Vi xử lý: {obj.cpu}</p>
                  <p>Ổ cứng: {obj.hardDrive}</p>
                  <p>Ram: {obj.ram}</p>
                  <p>Giá tiền: {obj.price} VNĐ</p>
                  <p>Số lượng trong kho: {obj.stockQuantity}</p>
                  <p>Số lượng trong kho: {obj.viewQuantity}</p>
                </div>
              ))
            )}
          </div>
        );
      default:
        return (
          <input
            placeholder={modifiedList[itemKey]}
            className="bg-white"
            onChange={(e) => handleOnChange(itemKey, e.target.value)}
          />
        );
    }
  };

  const handleUpdate = async () => {
    try {
      const excludedKeys = ["ID_Product", "ID_Warranty", "ID_Material", "Id", "categoryName"];
      // Lọc data
      const cleanedUpdate = Object.fromEntries(
        Object.entries(modifiedUpdate).filter(
          ([key, value]) => !excludedKeys.includes(key) && value !== null && value !== undefined
        )
      );
      console.log({ cleanedUpdate });
      let updt;
      if (type == "san-pham") {
        updt = await ad.updateProduct(id, cleanedUpdate);
      }
      console.log({updt});
      setShow();
    } catch (error) {
      console.log(error);
      showToast("Lỗi rồi");
    }
  };

  const handleOnChange = (key: string, value: any) => {
    setModifiedUpdate((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  //tắt modal view nếu show bằng false
  if (show == false) {
    return null;
  }

  return (
    <ModalViewWrapper>
      <div className="flex justify-center">
        <h3 className="text-[20px]">Thông tin chi tiết</h3>
      </div>
      <div className="">
        {keyList?.map((item, i: number) => (
          <div className="" key={i}>
            <p className="capitalize mb-2">{item}</p>
            {specialInput(item, modifiedList)}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 gap-4">
        {type == "san-pham" ? <CustomButton version={0} text="Cập nhật" onClick={() => handleUpdate()} /> : <></>}
        <CustomButton version={0} text="Đóng" onClick={setShow} />
      </div>
    </ModalViewWrapper>
  );
};

export default ModalView;
