import React from 'react';
import { Box, Text } from 'zmp-ui';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: "Minh Quân",
        role: "Sinh viên năm cuối HUBT",
        content: "Nhờ có team mà mình bảo vệ đồ án đạt loại Xuất sắc. Code cực sạch, comment chi tiết, lúc hỏi gì cũng được giải thích tận tình. Rất uy tín!",
        stars: 5,
    },
    {
        name: "Thu Trang",
        role: "Chủ thương hiệu mỹ phẩm",
        content: "Web bán hàng làm rất nhanh, đúng ý mình. Giao diện sang trọng mà giá lại rất hợp lý so với thị trường.",
        stars: 5,
    },
    {
        name: "Hoàng Long",
        role: "Sinh viên Bách Khoa",
        content: "Đồ án hệ nhúng tưởng khó mà team xử lý ngọt xớt. Bàn giao đúng deadline, hỗ trợ cài đặt từ A-Z luôn.",
        stars: 5,
    },
];

const Testimonials = () => {
    return (
        <Box className="bg-white py-12 px-4 mb-24">
            <Box className="text-center mb-10">
                <Text size="large" className="font-bold text-gray-900 mb-2">Khách Hàng Nói Gì</Text>
                <div className="w-12 h-1 bg-primary mx-auto rounded-full"></div>
            </Box>

            <Box className="space-y-6">
                {testimonials.map((item, index) => (
                    <Box key={index} className="p-6 bg-gray-50 rounded-2xl relative">
                        <Quote className="absolute top-4 right-4 text-primary/10" size={40} />
                        <Box className="flex mb-2">
                            {[...Array(item.stars)].map((_, i) => (
                                <Star key={i} size={14} className="text-secondary fill-secondary" />
                            ))}
                        </Box>
                        <Text className="text-gray-700 italic mb-4 text-sm leading-relaxed">"{item.content}"</Text>
                        <Box>
                            <Text className="font-bold text-gray-900 text-sm">{item.name}</Text>
                            <Text className="text-gray-400 text-xs">{item.role}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Testimonials;
