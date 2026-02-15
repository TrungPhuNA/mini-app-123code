import React from "react";
import { Box, Button, Text } from "zmp-ui";
import { motion } from "framer-motion";
import { Code2, Rocket } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className="relative overflow-hidden bg-mesh pt-16 pb-24 px-6 min-h-[500px] flex flex-col justify-center">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[15%] right-[5%] w-32 h-32 bg-secondary/30 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-[20%] left-[5%] w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>

      {/* Floating Icons for Tech Vibe */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 opacity-20"
      >
        <Code2 size={40} className="text-white" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 left-10 opacity-20"
      >
        <Rocket size={40} className="text-white" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <Box className="inline-flex items-center justify-center py-1.5 px-4 glass rounded-full mb-8 shadow-xl">
          <Rocket size={14} className="text-primary mr-2" />
          <Text className="text-primary text-[10px] font-bold uppercase tracking-widest">
            Expert Coding Solutions
          </Text>
        </Box>

        <h1 className="text-white font-extrabold leading-tight mb-6 text-4xl tracking-tight">
          Biến ý tưởng thành<br />
          <span className="text-gradient-secondary">Sản phẩm Hoàn hảo</span>
        </h1>

        <Text className="text-blue-100/80 mb-10 max-w-xs mx-auto text-base leading-relaxed font-medium">
          Dịch vụ lập trình chuyên nghiệp, cam kết **chất lượng cao nhất**, hỗ trợ 24/7 và bàn giao thần tốc.
        </Text>

        <Box className="flex flex-col gap-3 max-w-[280px] mx-auto">
          <Button
            fullWidth
            variant="secondary"
            className="h-14 rounded-2xl font-bold shadow-[0_8px_20px_rgba(255,184,0,0.3)] text-lg transition-all hover:scale-[1.02] active:scale-95 px-8"
            onClick={scrollToServices}
          >
            Bắt đầu Dự án ngay
          </Button>
          <Text className="text-white/50 text-[10px] uppercase font-bold tracking-widest">
            Uy tín tạo nên thương hiệu
          </Text>
        </Box>
      </motion.div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[40px] z-10"></div>
    </Box>
  );
};

export default Hero;
