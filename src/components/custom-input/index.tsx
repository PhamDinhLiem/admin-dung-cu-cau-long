"use client";

import { BlogInputWrapper, BlogTextAreaWrapper } from "./styled";

interface customInputProp {
  placeholder?: string;
  value?: string;
  type?: string;
  classname?: string;
}

const CustomInputVer1 = ({ placeholder, value, type, classname }: customInputProp) => {
  return <BlogInputWrapper placeholder={placeholder} type={type} value={value} className={`${classname}`} />;
};

const CustomInputVer2 = ({ placeholder, value, classname }: customInputProp) => {
  return <BlogTextAreaWrapper placeholder={placeholder} value={value} className={`${classname}`} />;
};

export { CustomInputVer1, CustomInputVer2 };
