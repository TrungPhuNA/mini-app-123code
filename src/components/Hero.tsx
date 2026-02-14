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
    <Box className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 pt-10 pb-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Box className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
          <Rocket size={16} className="text-secondary mr-2" />
          <Text className="text-white text-xs font-semibold uppercase tracking-wider">
            Giải pháp lập trình chuyên nghiệp
          </Text>
        </Box>

        <Text className="text-white font-bold leading-tight mb-4 text-2xl">
          Biến ý tưởng thành{" "}
          <span className="text-secondary">Sản phẩm hoàn hảo</span>
        </Text>

        <Text className="text-blue-100 mb-8 max-w-xs mx-auto text-sm leading-relaxed">
          Đội ngũ dev kinh nghiệm, cam kết **không copy**, giải thích code 1-1,
          bàn giao đúng deadline. Uy tín làm nên thương hiệu!
        </Text>

        <Box className="px-4">
          <Button
            fullWidth
            variant="secondary"
            className="h-12 rounded-xl font-bold shadow-lg"
            prefixIcon={<Code2 size={20} />}
            onClick={scrollToServices}
          >
            Xem Dịch Vụ
          </Button>
        </Box>
      </motion.div>

      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-blue-400/20 rounded-full blur-2xl -z-10"></div>
    </Box>
  );
};

export default Hero;
