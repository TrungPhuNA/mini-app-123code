import React from "react";
import { Box, Text } from "zmp-ui";
import {
    Code2,
    Globe,
    Terminal,
    Database as DbIcon,
    Cpu,
    Smartphone,
    Layers
} from "lucide-react";

const techGroups = [
    {
        title: "Web Frontend",
        icon: <Globe className="text-blue-500" size={20} />,
        skills: ["HTML/CSS/JS", "ReactJS", "VueJS", "Angular"],
        color: "bg-blue-50"
    },
    {
        title: "Mobile App",
        icon: <Smartphone className="text-purple-500" size={20} />,
        skills: ["React Native", "Zalo Mini App"],
        color: "bg-purple-50"
    },
    {
        title: "Backend & Server",
        icon: <Terminal className="text-green-500" size={20} />,
        skills: ["Node.js", "PHP (Laravel)", "Java", "Python"],
        color: "bg-green-50"
    },
    {
        title: "Database Management",
        icon: <DbIcon className="text-orange-500" size={20} />,
        skills: ["MySQL", "PostgreSQL", "SQL Server"],
        color: "bg-orange-50"
    }
];

const TechStack = () => {
    return (
        <Box className="bg-white py-12 px-4">
            <Box className="mb-8">
                <Box className="flex items-center gap-2 mb-2">
                    <Layers className="text-primary" size={24} />
                    <Text size="large" className="font-bold text-gray-900">
                        Hệ Sinh Thái Kỹ Thuật
                    </Text>
                </Box>
                <div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
                <Text className="text-gray-500 text-sm leading-relaxed">
                    Chúng tôi sử dụng các công nghệ hiện đại nhất để xây dựng giải pháp tối ưu cho đồ án và sản phẩm thực tế của bạn.
                </Text>
            </Box>

            <Box className="grid grid-cols-1 gap-4">
                {techGroups.map((group, idx) => (
                    <Box
                        key={idx}
                        className={`${group.color} p-5 rounded-2xl border border-white shadow-sm`}
                    >
                        <Box className="flex items-center gap-3 mb-4">
                            <div className="bg-white p-2 rounded-xl shadow-sm">
                                {group.icon}
                            </div>
                            <Text className="font-bold text-gray-800 uppercase tracking-tight text-xs">
                                {group.title}
                            </Text>
                        </Box>

                        <Box className="flex flex-wrap gap-2">
                            {group.skills.map((skill, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm"
                                >
                                    <Text className="text-gray-700 text-xs font-medium">
                                        {skill}
                                    </Text>
                                </div>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default TechStack;
