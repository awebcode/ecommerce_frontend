"use client";
import Container from "@/components/reusables/contents/Container";
import Img from "@/components/reusables/contents/elements/Img";
import Wrapper from "@/components/reusables/contents/Wrapper";
import React from "react";
import { motion } from "framer-motion";
import StyledParagrah from "@/components/reusables/contents/StyledParagrah";
import PrimaryButton from "@/components/reusables/buttons/PrimaryButton";
import {  MoveUpRight } from "lucide-react";
import GoToArrowDown from "@/components/reusables/contents/GoToArrowDown";

const Hero = () => {
  return (
    <Wrapper className="bg-black">
      <Container className="relative">
        <div className="flex  flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8 ">
          {/* Hero left (text) */}
          <div className="relative flex-1 text-left space-y-6">
            <div className="absolute left-0 top-0 h-52 w-52 md:h-56 md:w-56  bg-yellow-400 md:bg-yellow-400 blur-[200px]"></div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <StyledParagrah  content="Latest air pods" className="capitalize" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl lg:text-6xl  text-gray-200"
            >
              Air Pods <br /> Max White
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-gray-400 max-w-md"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex space-x-4"
            >
              <PrimaryButton
                iconRight={<MoveUpRight className="h-3 w-3 md:w-4 md:h-4" />}
              >
                Read More{" "}
              </PrimaryButton>
              <PrimaryButton className="bg-transparent ring-1 ring-primary/50">
                BUY
              </PrimaryButton>
            </motion.div>
          </div>

          {/* Herong(image) */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute right-24 md:right-48 bottom-0 md:bottom-20 h-52 w-52 md:h-56 md:w-56  bg-yellow-300 md:bg-yellow-400 blur-[190px] md:blur-[100px]"></div>
            <Img src="/hero.svg" alt="hero" width={1000} height={1000} />
          </motion.div>
        </div>
        <GoToArrowDown to="feature-products" className="absolute bottom-0 md:bottom-4 left-1/2" />
      </Container>
    </Wrapper>
  );
};

export default Hero;
