import React from "react";
import { Box, Text } from "zmp-ui";
import { motion } from "framer-motion";
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
    <Box className="bg-white py-16 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>

      <Box className="mb-10">
        <Box className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Layers className="text-primary" size={20} />
          </div>
          <Text size="large" className="font-bold text-gray-900 tracking-tight">
            Nền Tảng Công Nghệ
          </Text>
        </Box>
        <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-purple-600 rounded-full mb-6"></div>
        <Text className="text-gray-500 text-sm leading-relaxed max-w-sm">
          Làm chủ các công nghệ mới nhất để mang lại hiệu quả vượt trội cho mọi dự án của bạn.
        </Text>
      </Box>

      <Box className="grid grid-cols-1 gap-5">
        {techGroups.map((group, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -5 }}
            className={`${group.color} p-6 rounded-[24px] border border-white shadow-xl shadow-gray-200/50 transition-all duration-300`}
          >
            <Box className="flex items-center gap-4 mb-5">
              <div className="bg-white p-2.5 rounded-xl shadow-sm border border-gray-50">
                {group.icon}
              </div>
              <Text className="font-extrabold text-gray-800 uppercase tracking-widest text-[11px]">
                {group.title}
              </Text>
            </Box>

            <Box className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-100/50 shadow-sm hover:border-primary/30 transition-colors"
                >
                  <Text className="text-gray-700 text-xs font-semibold">
                    {skill}
                  </Text>
                </div>
              ))}
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
