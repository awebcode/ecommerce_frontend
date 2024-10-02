import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MoveUpRight } from "lucide-react";

interface RepairCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const RepairCard: React.FC<RepairCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative flex items-start  flex-col bg-white hover:bg-[#FFF7E0] shadow-md border rounded-lg p-6 w-72 text-left transition-all"
    >
      <div className="text-4xl mb-4 text-gray-800 group-hover:text-primary transition-all duration-300">{icon}</div>
      <h3 className="font-semibold text-xl text-gray-700">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a href="#" className="float-right absolute right-4 bottom-4 mt-4 bg-gray-500 group-hover:bg-primary p-2 rounded-full text-white transition-all">
        <MoveUpRight className="h-3 w-3 md:w-4 md:h-4"/> 
      </a>
    </motion.div>
  );
};

export default RepairCard;
