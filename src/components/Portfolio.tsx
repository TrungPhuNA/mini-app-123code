import React from "react";
import { Box, Text } from "zmp-ui";
import { ExternalLink, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

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
    <Box className="bg-gray-50/50 py-16 px-6">
      <Box className="mb-10">
        <Box className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Briefcase className="text-primary" size={20} />
          </div>
          <Text size="large" className="font-bold text-gray-900 tracking-tight">
            Dự Án Tiêu Biểu
          </Text>
        </Box>
        <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-orange-400 rounded-full mb-6"></div>
      </Box>

      <Box className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-[32px] overflow-hidden shadow-xl shadow-gray-200/40 border border-gray-100 group transition-all duration-500"
          >
            <div className="relative overflow-hidden h-52">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <Text className="text-white text-[10px] font-bold uppercase flex items-center">
                    Xem chi tiết <ExternalLink size={12} className="ml-1.5" />
                  </Text>
                </div>
              </div>
            </div>

            <Box className="p-6">
              <Text className="text-primary text-[10px] font-extrabold uppercase tracking-widest mb-2 px-3 py-1 bg-primary/5 rounded-full inline-block">
                {project.category}
              </Text>
              <Text className="font-bold text-gray-900 text-xl leading-tight mb-3">
                {project.title}
              </Text>
              <Text className="text-gray-500 text-sm leading-relaxed">
                {project.desc}
              </Text>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
