import React from 'react';
import { Box, Button, Text } from 'zmp-ui';
import { motion } from 'framer-motion';
import { Code2, ChevronRight, Rocket } from 'lucide-react';

const Hero = () => {
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
                    Biến ý tưởng thành <span className="text-secondary">Sản phẩm hoàn hảo</span>
                </Text>

                <Text className="text-blue-100 mb-8 max-w-xs mx-auto text-sm">
                    Nhận code thuê, làm đồ án, xây dựng Website & Mobile App chất lượng cao, bàn giao đúng hạn.
                </Text>

                <Box className="flex flex-col space-y-3 px-4">
                    <Button
                        fullWidth
                        variant="secondary"
                        className="h-12 rounded-xl font-bold shadow-lg"
                        prefixIcon={<Code2 size={20} />}
                    >
                        Xem Dịch Vụ
                    </Button>
                    <Button
                        fullWidth
                        variant="tertiary"
                        className="h-12 rounded-xl text-white border border-white/30"
                        suffixIcon={<ChevronRight size={20} />}
                    >
                        Liên Hệ Ngay
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
