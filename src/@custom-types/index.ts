import { Label } from "./../styles/input-styled";
import { IconType } from "@/components/icons";

export interface ValueLabel {
  value?: string;
  label?: string;
}

export interface LinkProps extends ValueLabel {
  icon?: IconType;
  href?: string;
  type?: "button" | "link";
  children?: LinkProps[];
}

export interface ListCate {
  href?: string;
  label?: string;
}

export interface IconProperty {
  stroke?: string;
  width?: string | number;
  height?: string | number;
  fill?: string;
}

export type ModifiedData<T> = {
  [key in keyof T]?: any;
};

//admin
export interface MenuAdminItems {
  key: string;
  value: string;
  icon: any;
}

export type TextAlign = "left" | "right" | "center" | "";
