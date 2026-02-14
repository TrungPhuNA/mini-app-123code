import React from "react";
import { Box, Text } from "zmp-ui";
import {
  Layout,
  Smartphone,
  Database,
  GraduationCap,
  Monitor,
  Blocks,
} from "lucide-react";

const services = [
  {
    icon: <Layout className="text-blue-500" />,
    title: "Thiết Kế Web Trọn Gói",
    desc: "Chuẩn SEO, giao diện đẹp, tương thích mọi thiết bị.",
  },
  {
    icon: <Smartphone className="text-purple-500" />,
    title: "App Di Động Đa Nền Tảng",
    desc: "Xây dựng ứng dụng iOS & Android mượt mà, chuyên nghiệp.",
  },
  {
    icon: <GraduationCap className="text-orange-500" />,
    title: "Đồ Án CNTT Chất Lượng",
    desc: "Cam kết sạch code, hướng dẫn chạy và giải thích chi tiết.",
  },
  {
    icon: <Database className="text-green-500" />,
    title: "Tối Ưu & Bảo Mật DB",
    desc: "Xử lý dữ liệu lớn, bảo mật thông tin tuyệt đối.",
  },
  {
    icon: <Blocks className="text-red-500" />,
    title: "Phát Triển Game 2D/3D",
    desc: "Hiện thực hóa ý tưởng game với Unity, Cocos.",
  },
  {
    icon: <Monitor className="text-indigo-500" />,
    title: "Phần Mềm Quản Lý",
    desc: "Giải pháp chuyển đổi số cho doanh nghiệp nhỏ.",
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      className="bg-white py-12 px-4 rounded-t-3xl -mt-8 relative z-10 shadow-2xl"
    >
      <Box className="text-center mb-10">
        <Text size="large" className="font-bold text-gray-900 mb-2">
          Dịch Vụ Của Chúng Tôi
        </Text>
        <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
      </Box>

      <Box className="grid grid-cols-2 gap-4">
        {services.map((item, index) => (
          <Box
            key={index}
            className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3">
              {item.icon}
            </div>
            <Text className="font-bold text-gray-800 text-sm mb-1">
              {item.title}
            </Text>
            <Text className="text-gray-500 text-[10px] leading-tight">
              {item.desc}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
