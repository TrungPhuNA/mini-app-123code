import React from "react";
import { Box, Text } from "zmp-ui";
import { motion } from "framer-motion";
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
      className="bg-white py-16 px-6 rounded-t-[40px] -mt-10 relative z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.03)]"
    >
      <Box className="mb-12">
        <Box className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Blocks className="text-primary" size={20} />
          </div>
          <Text size="large" className="font-bold text-gray-900 tracking-tight">
            Dịch Vụ Chuyên Biệt
          </Text>
        </Box>
        <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-blue-400 rounded-full mb-6"></div>
      </Box>

      <Box className="grid grid-cols-2 gap-5">
        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 bg-gray-50/50 rounded-[32px] border border-gray-100 flex flex-col items-center text-center group transition-all duration-300"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-gray-50">
              {item.icon}
            </div>
            <Text className="font-extrabold text-gray-800 text-sm mb-2 leading-tight">
              {item.title}
            </Text>
            <Text className="text-gray-500 text-[11px] leading-relaxed">
              {item.desc}
            </Text>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
