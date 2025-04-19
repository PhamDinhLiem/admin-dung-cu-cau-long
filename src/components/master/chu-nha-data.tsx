import { floated } from "@material-tailwind/react/types/components/card";

export interface MasterData {
  id: number;
  name: string;
  description: string;
  area: string;
  salary: string; // Updated to lowercase
  src: string;
  area_value: string;
}

export const MasterDatalist: MasterData[] = [
  {
    id: 1,
    name: "Nguyễn Thị Vĩnh Hằng",
    description: "Tôi cần tìm giúp việc nhà có kinh nghiệm 2 năm trở lên trung thực và uy tín",
    area: "Hồ Chí Minh",
    area_value: "HCM",
    salary: "5tr - 7tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
  {
    id: 2,
    name: "Đặng Văn Ngữ",
    description: "Cần cô miền Trung hoặc miền Nam. Biết chạy xe máy. Sức khoẻ tốt.Thời gian: 7h-18h từ Thứ 2-Thứ 7",
    area: "Cần Thơ",
    area_value: "CT",
    salary: "5tr - 7tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
  {
    id: 3,
    name: "Phạm Minh Ngọc",
    description: "Em cần 1 cô chăm bé ở Thủ Đức.Công việc làm việc nhà ,phụ chăm bé sơ sinh , không nấu ăn",
    area: "Thủ Đức",
    area_value: "TD",
    salary: "6tr - 8tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
  {
    id: 4,
    name: "Lê Thị Mỹ An",
    description: "Tìm cô trông trẻ, yêu cầu có sức khỏe tốt, yêu thương trẻ em. Biết nấu ăn ở khu vực Cần Thơ.",
    area: "Cần Thơ",
    area_value: "CT",
    salary: "5tr - 8tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
  {
    id: 3,
    name: "Nguyễn Minh Hùng",
    description: "Em cần tìm người giúp việc tại quận 2, ưu tiên nữ trung niên, có kinh nghiệm chăm sóc trẻ em",
    area: "Thủ Đức",
    area_value: "TD",
    salary: "5tr - 8tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
  {
    id: 4,
    name: "Lê Thị An",
    description: "Tìm trông trẻ, đồng thời biết nấu ăn. Làm việc thứ 3 7 chủ nhật. Ưu tiên nữ 40 - 60 tuổi",
    area: "Hà Nội",
    area_value: "HN",
    salary: "5tr - 7tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
  {
    id: 3,
    name: "Trần My",
    description:
      "Mình cần bạn biết nấu ăn, dọn dẹp trong nhà. Làm việc từ 6h sáng đến 5h chiều. Cần bạn trung thực, siêng năng, chịu khó",
    area: "Hồ Chí Minh",
    area_value: "HCM",
    salary: "8tr - 10tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
  {
    id: 4,
    name: "Trần Mỹ Hạnh",
    description: "Tìm cô giúp việc nhà, công việc bao gồm nấu ăn, đi chợ và dọn dẹp. Làm việc từ thứ 2 đến thứ 6",
    area: "Hồ Chí Minh",
    area_value: "HCM",
    salary: "5tr - 8tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
  {
    id: 3,
    name: "Cao Minh Tâm",
    description: "Em cần tìm cô trông trẻ tại quận 9, gần Long Trường. Bao ăn ở. Ưu cầu biết nấu ăn ngon",
    area: "Thủ Đức",
    area_value: "TD",
    salary: "6tr - 8tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
  {
    id: 4,
    name: "Trịnh Trần Phương Tuấn",
    description: "Tìm giúp việc nam tại Cần Thơ, không bao ăn ở. Làm việc từ 10h sáng đến 6h tối. Lương thỏa thuận",
    area: "Cần Thơ",
    area_value: "CT",
    salary: "6tr - 8tr", // Updated to lowercase
    src: "https://scontent.fhan3-2.fna.fbcdn.net/v/t39.30808-1/457333367_122104895972487568_4648678102826808363_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeHSFWqzCKR11yuWCM18HdFHXcHYgQmyTOFdwdiBCbJM4Zyz1yCsGtxYTD3nedOj1wGmm6yOpMh0lAHj8lNGTi5p&_nc_ohc=kdakZ9XHaSgQ7kNvgG3LgRT&_nc_ht=scontent.fhan3-2.fna&oh=00_AYAYiItGzd9Cg3Oh3b0tVnVUj9GxOs95L_RU9xI8asTpDQ&oe=66E06A58",
  },
];
