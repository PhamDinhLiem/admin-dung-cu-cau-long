import { CardsContent, ChartContent, DashBoardWrapper } from "./styled";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
} from "recharts";
import { Users, Package, ShoppingCart, Percent } from "lucide-react";
import Card, { CardProps } from "@/components/card";
import { FaProductHunt, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";

const data = [
  { name: "T1", sales: 2400 },
  { name: "T2", sales: 1398 },
  { name: "T3", sales: 9800 },
  { name: "T4", sales: 3908 },
  { name: "T5", sales: 4800 },
  { name: "T6", sales: 3800 },
];

const data2 = [
  { name: "Tháng 1", uv: 400, pv: 240 },
  { name: "Tháng 2", uv: 300, pv: 139 },
  { name: "Tháng 3", uv: 200, pv: 980 },
  { name: "Tháng 4", uv: 278, pv: 390 },
  { name: "Tháng 5", uv: 189, pv: 480 },
];

const cardList: CardProps[] = [
  {
    key: 1,
    title: "Sản phẩm",
    icon: FaProductHunt,
    value: 2330,
    description: "Số sản phẩm bán",
  },
  {
    key: 2,
    title: "Đơn hàng",
    icon: FaShoppingCart,
    value: 785,
    description: "Số đơn hàng đã xử lý",
  },
  {
    key: 3,
    title: "Người dùng",
    icon: FaUsers,
    value: 1580,
    description: "Số người dùng mới",
  },
  {
    key: 4,
    title: "Doanh thu",
    icon: FaDollarSign,
    value: 125000000,
    description: "Tổng doanh thu (VNĐ)",
  },
];

const DashBoardSection = () => {
  return (
    <DashBoardWrapper>
      <div className="px-2 space-y-6">
        <h2>Trang chủ</h2>
        <CardsContent>
          {cardList.map((carditem: any) => (
            <Card
              key={carditem.key}
              title={carditem.title}
              icon={carditem.icon}
              value={carditem.value}
              description={carditem.description}
            />
          ))}
        </CardsContent>
        <ChartContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Bar dataKey="sales" fill="#fff" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart width={730} height={300} data={data2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#ffd400" />
              <Line type="monotone" dataKey="uv" stroke="#fff" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContent>
      </div>
    </DashBoardWrapper>
  );
};

export default DashBoardSection;
