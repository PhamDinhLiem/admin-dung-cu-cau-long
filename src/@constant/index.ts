import { MenuAdminItems } from "@/@custom-types";
import { Home } from "lucide-react";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import Person2Icon from "@mui/icons-material/Person2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DiscountIcon from "@mui/icons-material/Discount";
import CategoryIcon from "@mui/icons-material/Category";
import BadgeIcon from "@mui/icons-material/Badge";

export const menusList: MenuAdminItems[] = [
  { key: "trang-chu", value: "Trang chủ", icon: Home },
  { key: "san-pham", value: "Sản phẩm", icon: Inventory2Icon },
  //{ key: "bien-the", value: "Biến thể", icon: ScatterPlotIcon },
  { key: "nguoi-dung", value: "Người dùng", icon: Person2Icon },
  { key: "don-hang", value: "Đơn hàng", icon: ShoppingCartIcon },
  //{ key: "ma-giam-gia", value: "Mã giảm giá", icon: DiscountIcon },
  { key: "danh-muc", value: "Danh Mục", icon: CategoryIcon },
  //{ key: "vai-tro", value: "Vai trò", icon: BadgeIcon },
];

export const tableSanPhamConfig = {
  type: "san-pham",
  config: [
    { key: "ID_Product", Label: "Mã sản phẩm", type: "int" },
    { key: "Image", Label: "Hình ảnh", type: "string" },
    { key: "ID_Category", Label: "Mã Danh mục", type: "int" },
    { key: "Name", Label: "Tên sản phẩm", type: "string" },
    { key: "Price", Label: "Giá tiền", type: "string" },
    { key: "Quantity", Label: "Số lượng", type: "string" },
    { key: "Description", Label: "Mô tả", type: "string" },
  ],
};

// export const tableProductVariantsConfig = {
//   type: "bien-the",
//   config: [
//     { key: "id", Label: "Mã biến thể", type: "int" },
//     { key: "name", Label: "Tên sản phẩm", type: "string" },
//     { key: "slug", Label: "Slug", type: "string" },
//   ],
// };

export const tableCategoryConfig = {
  type: "danh-muc",
  config: [
    { key: "id", Label: "Mã danh mục", type: "int" },
    { key: "name", Label: "Tên danh mục", type: "string" },
    { key: "createdAt", Label: "Ngày tạo", type: "datetime" },
    { key: "updatedAt", Label: "Ngày cập nhật", type: "datetime" },
  ],
};

export const tableVoucherConfig = {
  type: "ma-giam-gia",
  config: [
    { key: "id", Label: "Mã voucher", type: "int" },
    { key: "name", Label: "Tên voucher", type: "string" },
    { key: "discountType", Label: "Loại giảm giá", type: "string" }, // VD: %, cố định
    { key: "image", Label: "Ảnh minh họa", type: "string" },
    { key: "amount", Label: "Số lượng", type: "int" },
    { key: "description", Label: "Mô tả", type: "string" },
    { key: "createdAt", Label: "Ngày tạo", type: "datetime" },
    { key: "updatedAt", Label: "Ngày cập nhật", type: "datetime" },
  ],
};

export const tableUserConfig = {
  type: "nguoi-dung",
  config: [
    { key: "id", Label: "Mã người dùng", type: "int" },
    { key: "avatar", Label: "Avatar", type: "string" },
    { key: "username", Label: "Tên người dùng", type: "string" },
    { key: "email", Label: "Email", type: "int" },
    { key: "phone", Label: "SĐT", type: "string" },
    { key: "address", Label: "Địa chỉ", type: "string" },
    { key: "gender", Label: "Giới tính", type: "string" },
    { key: "role", Label: "Role", type: "string" },
  ],
};

// export const tableRoleConfig = {
//   type: "vai-tro",
//   config: [
//     { key: "Id", Label: "Mã vai trò", type: "int" },
//     { key: "Name", Label: "Tên vai trò", type: "string" },
//     { key: "CreatedAt", Label: "Ngày tạo", type: "datetime" },
//     { key: "UpdatedAt", Label: "Ngày cập nhật", type: "datetime" },
//   ],
// };

export const tableOrdersConfig = {
  type: "don-hang",
  config: [
    { key: "ID_Order", Label: "Mã đơn hàng", type: "string" },
    { key: "ID_Customer", Label: "Mã khách hàng", type: "string" },
    { key: "ID_Sale", Label: "Mã giảm giá", type: "string" },
    { key: "Order_Date", Label: "Ngày đặt", type: "string" },
    { key: "Total", Label: "Tổng tiền", type: "int" },
    { key: "Status", Label: "Trạng thái đơn", type: "string" }, // ví dụ: pending, paid, cancelled
    { key: "PaymentMethod", Label: "Hình thức thanh toán", type: "string" }, // ví dụ: cash, card
    { key: "ShippingAddress", Label: "Địa chỉ giao hàng", type: "string" },
  ],
};

export const tableConfigList = [
  tableSanPhamConfig,
  //tableProductVariantsConfig,
  tableCategoryConfig,
  tableVoucherConfig,
  tableUserConfig,
  //tableRoleConfig,
  tableOrdersConfig,
];
