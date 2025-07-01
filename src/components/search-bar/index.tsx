import React, { useMemo } from "react";
import { SearchBarWrapper } from "./styled";
import { InputSearch } from "./input-search";

interface SearchBar {
  type?: string;
  searchText?: string;
}

const SearchBar = ({ type, searchText }: SearchBar) => {
  const placeHolder = useMemo(() => {
    switch (type) {
      case "trang-chu":
        return "Nhập từ khóa";
      case "san-pham":
        return "Nhập mã sản phẩm hoặc id";
      case "bien-the":
        return "Nhập mã biến thể";
      case "nguoi-dung":
        return "Nhập tên người dùng hoặc id";
      case "don-hang":
        return "Nhập mã đơn hàng";
      case "ma-giam-gia":
        return "Nhập tên mã giảm giá hoặc id";
      case "danh-muc":
        return "Nhập tên danh mục";
      case "vai-tro":
        return "Nhập tên vai trò";
    }
  }, [type]);
  return (
    <SearchBarWrapper>
      <InputSearch placeHolder={placeHolder} />
    </SearchBarWrapper>
  );
};

export default SearchBar;
