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
  { key: "bien-the", value: "Biến thể", icon: ScatterPlotIcon },
  { key: "nguoi-dung", value: "Người dùng", icon: Person2Icon },
  { key: "don-hang", value: "Đơn hàng", icon: ShoppingCartIcon },
  { key: "ma-giam-gia", value: "Mã giảm giá", icon: DiscountIcon },
  { key: "danh-muc", value: "Danh Mục", icon: CategoryIcon },
  { key: "vai-tro", value: "Vai trò", icon: BadgeIcon },
];

export const tableSanPhamConfig = {
  type: "san-pham",
  config: [
    { key: "Id", Label: "Mã sản phẩm", type: "int" },
    { key: "Name", Label: "Tên sản phẩm", type: "string" },
    { key: "Slug", Label: "Slug", type: "string" },
    { key: "Thumbnail", Label: "Thumbnail", type: "string" },
    { key: "Screen", Label: "Màn hình", type: "string" },
    { key: "GraphicCard", Label: "Card đồ họa", type: "string" },
    { key: "Connector", Label: "Cổng kết nối", type: "string" },
    { key: "OS", Label: "Hệ điều hành", type: "string" },
    { key: "Design", Label: "Thiết kế", type: "string" },
    { key: "Size", Label: "Kích thước", type: "string" },
    { key: "Mass", Label: "Khối lượng", type: "string" },
    { key: "Pin", Label: "Pin", type: "string" },
    { key: "CategoryID", Label: "Danh mục", type: "int" },
    { key: "Rating", Label: "Đánh giá", type: "decimal" },
    { key: "CreatedAt", Label: "Ngày tạo", type: "datetime" },
    { key: "UpdatedAt", Label: "Ngày cập nhật", type: "datetime" },
  ],
};

export const tableProductVariantsConfig = {
  type: "bien-the",
  config: [
    { key: "Id", Label: "Mã biến thể", type: "int" },
    { key: "ProductId", Label: "Mã sản phẩm cha", type: "int" },
    { key: "Discount", Label: "Giảm giá (%)", type: "int" },
    { key: "HardDrive", Label: "Ổ cứng", type: "string" },
    { key: "RAM", Label: "RAM", type: "string" },
    { key: "CPU", Label: "CPU", type: "string" },
    { key: "Price", Label: "Giá bán", type: "int" },
    { key: "ColorRGB", Label: "Màu (RGB)", type: "int" },
    { key: "SoldQuantity", Label: "Số lượng đã bán", type: "int" },
    { key: "ViewQuantity", Label: "Lượt xem", type: "int" },
    { key: "CreatedAt", Label: "Ngày tạo", type: "datetime" },
    { key: "UpdatedAt", Label: "Ngày cập nhật", type: "datetime" },
  ],
};

export const tableCategoryConfig = {
  type: "danh-muc",
  config: [
    { key: "Id", Label: "Mã danh mục", type: "int" },
    { key: "Name", Label: "Tên danh mục", type: "string" },
    { key: "CreatedAt", Label: "Ngày tạo", type: "datetime" },
    { key: "UpdatedAt", Label: "Ngày cập nhật", type: "datetime" },
  ],
};

export const tableVoucherConfig = {
  type: "ma-giam-gia",
  config: [
    { key: "Id", Label: "Mã voucher", type: "int" },
    { key: "Name", Label: "Tên voucher", type: "string" },
    { key: "DiscountType", Label: "Loại giảm giá", type: "string" }, // VD: %, cố định
    { key: "Image", Label: "Ảnh minh họa", type: "string" },
    { key: "Discount", Label: "Giá trị giảm", type: "int" },
    { key: "Description", Label: "Mô tả", type: "string" },
    { key: "MinValue", Label: "Giá trị tối thiểu", type: "int" },
    { key: "CreatedAt", Label: "Ngày tạo", type: "datetime" },
    { key: "UpdatedAt", Label: "Ngày cập nhật", type: "datetime" },
  ],
};

export const tableUserConfig = {
  type: "nguoi-dung",
  config: [
    { key: "Id", Label: "Mã người dùng", type: "int" },
    { key: "Phone", Label: "Số điện thoại", type: "string" },
    { key: "Point", Label: "Điểm tích lũy", type: "int" },
    { key: "Gender", Label: "Giới tính", type: "string" },
    { key: "FullName", Label: "Họ tên", type: "string" },
    { key: "PasswordHash", Label: "Mật khẩu (mã hóa)", type: "string" },
    { key: "Address", Label: "Địa chỉ", type: "string" },
    { key: "CreatedAt", Label: "Ngày tạo", type: "datetime" },
    { key: "UpdatedAt", Label: "Ngày cập nhật", type: "datetime" },
  ],
};

export const tableRoleConfig = {
  type: "vai-tro",
  config: [
    { key: "Id", Label: "Mã vai trò", type: "int" },
    { key: "Name", Label: "Tên vai trò", type: "string" },
    { key: "CreatedAt", Label: "Ngày tạo", type: "datetime" },
    { key: "UpdatedAt", Label: "Ngày cập nhật", type: "datetime" },
  ],
};

export const tableOrdersConfig = {
  type: "don-hang",
  config: [
    { key: "Id", Label: "Mã đơn hàng", type: "int" },
    { key: "ProductId", Label: "Mã sản phẩm", type: "int" },
    { key: "TotalPrice", Label: "Tổng tiền", type: "int" },
    { key: "Status", Label: "Trạng thái đơn", type: "string" }, // ví dụ: pending, paid, cancelled
    { key: "VoucherId", Label: "Mã voucher", type: "int" },
    { key: "PaymentType", Label: "Hình thức thanh toán", type: "string" }, // ví dụ: cash, card
    { key: "Address", Label: "Địa chỉ giao hàng", type: "string" },
    { key: "UserId", Label: "Mã người dùng", type: "int" },
    { key: "CreatedAt", Label: "Ngày tạo", type: "datetime" },
    { key: "UpdatedAt", Label: "Ngày cập nhật", type: "datetime" },
  ],
};

export const tableConfigList = [
  tableSanPhamConfig,
  tableProductVariantsConfig,
  tableCategoryConfig,
  tableVoucherConfig,
  tableUserConfig,
  tableRoleConfig,
  tableOrdersConfig,
];
