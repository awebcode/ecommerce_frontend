"use client";
import React from "react";
import {
  AiOutlineMobile,
  AiOutlineSound,
  AiOutlineAudio,
} from "react-icons/ai";
import TitleSubtitle from "@/components/reusables/contents/TitleSubtitle";
import RepairCard from "./RepareCard";
import { BatteryFullIcon, MoveUpRight } from "lucide-react";
import Wrapper from "@/components/reusables/contents/Wrapper";
import Container from "@/components/reusables/contents/Container";
import { Button } from "@/components/ui/button";

const ACCESSORIES_REPAIRS = [
  {
    id: 1,
    title: "Phone Display Issue or Broken",
    description: "On the other hand, we denounce with righteous indignation.",
    icon: <AiOutlineMobile />,
  },
  {
    id: 2,
    title: "Apple Battery Life is Down",
    description: "On the other hand, we denounce with righteous indignation.",
    icon: <BatteryFullIcon />,
  },
  {
    id: 3,
    title: "Apple iPhone Speaker Problem",
    description: "On the other hand, we denounce with righteous indignation.",
    icon: <AiOutlineSound />,
  },
  {
    id: 4,
    title: "Apple Device Microphone Problem",
    description: "On the other hand, we denounce with righteous indignation.",
    icon: <AiOutlineAudio />,
  },
];

const AccessoriesRepairPage: React.FC = () => {
  return (
    <Wrapper className="bg-white">
      <Container>
        {" "}
        {/* Accessories Repair Section */}
        <div className="flex-between">
          <TitleSubtitle title="Accessories Repair" subtitle="You can repair products" />
          <Button variant="outline" className="text-gray-500 flex gap-2">Watch <MoveUpRight className=" h-4 w-4" /> </Button>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          {ACCESSORIES_REPAIRS.map((repair) => (
            <RepairCard
              key={repair.id}
              title={repair.title}
              description={repair.description}
              icon={repair.icon}
            />
          ))}
        </div>
      </Container>
    </Wrapper>
  );
};

export default AccessoriesRepairPage;
