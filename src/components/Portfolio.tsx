import React from "react";
import { Box, Text } from "zmp-ui";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Web Bán Điện Thoại & Laptop",
    category: "Fullstack Website",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300",
    desc: "Tích hợp thanh toán online, quản lý kho hàng chuẩn SEO.",
  },
  {
    title: "App Quản Lý Nhà Trọ Thông Minh",
    category: "Mobile Application",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=300",
    desc: "Theo dõi tiền điện nước, hợp đồng ngay trên điện thoại.",
  },
  {
    title: "Website Đặt Lịch Khám Bệnh",
    category: "Đồ Án Tốt Nghiệp",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300",
    desc: "Hệ thống quản lý bác sĩ, bệnh nhân và lịch hẹn tự động.",
  },
  {
    title: "Nhận Diện Khuôn Mặt AI",
    category: "Python & Machine Learning",
    image:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=300",
    desc: "Ứng dụng điểm danh sinh viên bằng camera thời gian thực.",
  },
];

const Portfolio = () => {
  return (
    <Box className="bg-gray-50 py-12 px-4 shadow-inner">
      <Box className="mb-8">
        <Text size="large" className="font-bold text-gray-900 mb-1">
          Dự Án Tiêu Biểu
        </Text>
        <div className="w-12 h-1 bg-primary rounded-full"></div>
      </Box>

      <Box className="space-y-6">
        {projects.map((project, index) => (
          <Box
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col items-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <Box className="p-5 w-full">
              <Text className="text-primary text-[10px] font-bold uppercase mb-1">
                {project.category}
              </Text>
              <Text className="font-bold text-gray-900 text-lg leading-tight mb-2">
                {project.title}
              </Text>
              <Text className="text-gray-600 text-sm italic">
                {project.desc}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
