import React from "react";
import { Box, Text } from "zmp-ui";
import { Quote, Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Minh Quân",
    role: "Sinh viên năm cuối HUBT",
    content:
      "Nhờ có team mà mình bảo vệ đồ án đạt loại Xuất sắc. Code cực sạch, comment chi tiết, lúc hỏi gì cũng được giải thích tận tình. Rất uy tín!",
    stars: 5,
  },
  {
    name: "Thu Trang",
    role: "Chủ thương hiệu mỹ phẩm",
    content:
      "Web bán hàng làm rất nhanh, đúng ý mình. Giao diện sang trọng mà giá lại rất hợp lý so với thị trường.",
    stars: 5,
  },
  {
    name: "Hoàng Long",
    role: "Sinh viên Bách Khoa",
    content:
      "Đồ án hệ nhúng tưởng khó mà team xử lý ngọt xớt. Bàn giao đúng deadline, hỗ trợ cài đặt từ A-Z luôn.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <Box className="bg-white py-16 px-6 mb-24">
      <Box className="mb-10">
        <Box className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MessageSquare className="text-primary" size={20} />
          </div>
          <Text size="large" className="font-bold text-gray-900 tracking-tight">
            Khách Hàng Nói Gì
          </Text>
        </Box>
        <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-green-400 rounded-full mb-6"></div>
      </Box>

      <Box className="space-y-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-50/50 rounded-[32px] border border-gray-100 relative overflow-hidden group hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
          >
            <Quote
              className="absolute -top-2 -right-2 text-primary/5 group-hover:text-primary/10 transition-colors"
              size={120}
            />
            <Box className="flex mb-4">
              {[...Array(item.stars)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-secondary fill-secondary"
                />
              ))}
            </Box>
            <Text className="text-gray-700 italic mb-6 text-sm leading-relaxed relative z-10">
              "{item.content}"
            </Text>
            <Box className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-xs">
                {item.name.charAt(0)}
              </div>
              <Box>
                <Text className="font-extrabold text-gray-900 text-sm">
                  {item.name}
                </Text>
                <Text className="text-gray-400 text-[11px] font-medium">{item.role}</Text>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
