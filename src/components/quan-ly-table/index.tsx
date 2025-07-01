import React, { Fragment, useMemo } from "react";
import { QuanLyTablerWrapper, ThItemWrapper, TrItemWrapper } from "./styled";
import { TableConfig } from "@/@custom-types/config-table";
import CustomButton from "../custom-button";
import { DeleteIcon, Eye, Upload } from "lucide-react";

interface TableProps {
  key?: string; // dựa vào type sẽ biết để render mục thao tác sửa xóa xem chi tiết tùy vào danh mục quản lý
  listFormat?: any;
  tableConfig: TableConfig[];
}

//Hàm này sẽ hỗ trợ render cái key đặt biệt như key hình ảnh, vvv
const handleSpecialKey = (key, itemConfigKey) => {};

//Danh sách các danh mục sẽ có nút xóa

//tí về fix
const QuanLyTable = ({ listFormat, tableConfig, key }: TableProps) => {
  const thaoTacBar = useMemo(() => {
    if (key) {
      if (key == "don-hang") {
        return (
          <div className="flex justify-center items-center">
            <CustomButton version={1} text="Xem chi tiết" Icon={<Eye />} />
            <CustomButton version={1} text="Cập nhật" Icon={<Upload />} />
          </div>
        );
      } else {
        return (
          <div className="flex justify-center items-center">
            <CustomButton version={1} text="Xem chi tiết" Icon={<Eye />} />
            <CustomButton version={1} text="Xóa" Icon={<DeleteIcon />} />
            <CustomButton version={1} text="Cập nhật" Icon={<Upload />} />
          </div>
        );
      }
    }
  }, [key]);

  return (
    <QuanLyTablerWrapper>
      <table>
        <TrItemWrapper>
          {tableConfig.map((config) => (
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
                {_item[config.key] ?? ""}
              </ThItemWrapper>
            ))}
            <ThItemWrapper $size="md">{<thaoTacBar/>}</ThItemWrapper>
          </TrItemWrapper>
        ))}
      </table>
    </QuanLyTablerWrapper>
  );
};

export default QuanLyTable;
