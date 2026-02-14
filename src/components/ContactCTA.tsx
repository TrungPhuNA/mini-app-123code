import React from "react";
import { Box, Button, Text, Icon } from "zmp-ui";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { openChat, openPhone } from "zmp-sdk/apis";

const ContactCTA = () => {
  const handleChat = async () => {
    try {
      await openChat({
        type: "user",
        id: "zalo_id_here", // Thay bằng Zalo ID của bạn
        message: "Chào bạn, mình cần tư vấn về dịch vụ code thuê.",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCall = async () => {
    try {
      await openPhone({
        phoneNumber: "0986420994", // Số điện thoại liên hệ
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-50 flex items-center space-x-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
      <Button
        className="flex-1 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 font-bold transition-all transform active:scale-95"
        onClick={handleChat}
      >
        <Box className="flex items-center justify-center">
          <MessageCircle size={20} className="mr-2" />
          Chat Zalo
        </Box>
      </Button>
      <Button
        variant="secondary"
        className="h-14 w-20 rounded-2xl flex items-center justify-center p-0 transform active:scale-95"
        onClick={handleCall}
      >
        <Phone size={24} className="text-gray-700" />
      </Button>
    </Box>
  );
};

export default ContactCTA;
