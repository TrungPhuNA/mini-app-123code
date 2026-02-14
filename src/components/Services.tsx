import React from 'react';
import { Box, Text } from 'zmp-ui';
import { Layout, Smartphone, Database, GraduationCap, Monitor, Blocks } from 'lucide-react';

const services = [
    {
        icon: <Layout className="text-blue-500" />,
        title: "Website Development",
        desc: "React, Next.js, Vue, WordPress...",
    },
    {
        icon: <Smartphone className="text-purple-500" />,
        title: "Mobile App",
        desc: "React Native, Flutter, Zalo Mini App.",
    },
    {
        icon: <GraduationCap className="text-orange-500" />,
        title: "Làm Đồ Án",
        desc: "CNTT, Điện tử viễn thông, Hệ thống nhúng.",
    },
    {
        icon: <Database className="text-green-500" />,
        title: "Database Design",
        desc: "MySQL, PostgreSQL, MongoDB, NoSQL.",
    },
    {
        icon: <Blocks className="text-red-500" />,
        title: "Game Development",
        desc: "Unity, Cocos Creator, Phaser JS.",
    },
    {
        icon: <Monitor className="text-indigo-500" />,
        title: "Desktop App",
        desc: "Electron, Java Swing, C# (.NET).",
    },
];

const Services = () => {
    return (
        <Box className="bg-white py-12 px-4 rounded-t-3xl -mt-8 relative z-10 shadow-2xl">
            <Box className="text-center mb-10">
                <Text size="large" className="font-bold text-gray-900 mb-2">Dịch Vụ Của Chúng Tôi</Text>
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
                        <Text className="font-bold text-gray-800 text-sm mb-1">{item.title}</Text>
                        <Text className="text-gray-500 text-[10px] leading-tight">{item.desc}</Text>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Services;
