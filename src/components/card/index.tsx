import React, { useState } from "react";
import { CardWrapper } from "./styled";
import DropDown, { IOption } from "../dropdown-fieldset";

export interface CardProps {
  key: number;
  title?: string;
  icon?: any;
  value?: number;
  description?: string;
}

const optList: IOption[] = [
  {
    value: "3-months",
    label: "3 tháng",
  },
  {
    value: "30-day",
    label: "30 ngày",
  },
  {
    value: "14-day",
    label: "2 tuần",
  },
  {
    value: "7-day",
    label: "1 tuần",
  },
];

const Card = ({ key, title, icon, value, description }: CardProps) => {
  const [onFileterOpt, setOnFileterOpt] = useState<any>(optList[0].value);
  return (
    <CardWrapper>
      <div className="flex justify-between items-center mb-20">
        <div className="flex gap-2 items-center">
          <div className="bg-yellow-200 flex justify-center p-[8px] rounded-xl">
            {icon && React.createElement(icon)}
          </div>
          <p className="text-sm font-semibold">{title}</p>
        </div>
        <div className="max-w-[180px] flex min-w-[120px]">
          <DropDown
            list={optList}
            value={onFileterOpt}
            size="sm"
            title={"Thời hạn"}
            onChange={(value, opt) => {
              setOnFileterOpt(value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2>${value}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </CardWrapper>
  );
};

export default Card;
