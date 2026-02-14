import React from 'react';
import { Box, Text } from 'zmp-ui';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "E-commerce App",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=300",
    },
    {
        title: "SaaS Dashboard",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300",
    },
    {
        title: "LMS System",
        category: "Đồ án tốt nghiệp",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=300",
    },
];

const Portfolio = () => {
    return (
        <Box className="bg-gray-50 py-12 px-4 shadow-inner">
            <Box className="flex justify-between items-end mb-8">
                <Box>
                    <Text size="large" className="font-bold text-gray-900 mb-1">Dự Án Tiêu Biểu</Text>
                    <div className="w-12 h-1 bg-primary rounded-full"></div>
                </Box>
                <Text className="text-primary text-xs font-semibold flex items-center">
                    Xem tất cả <ExternalLink size={14} className="ml-1" />
                </Text>
            </Box>

            <Box className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar">
                {projects.map((project, index) => (
                    <Box key={index} className="min-w-[200px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        <img src={project.image} alt={project.title} className="w-full h-32 object-cover" />
                        <Box className="p-4">
                            <Text className="text-gray-400 text-[10px] font-medium uppercase mb-1">{project.category}</Text>
                            <Text className="font-bold text-gray-800 text-sm leading-tight">{project.title}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Portfolio;
