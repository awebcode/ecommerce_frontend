'use client';
import Container from "@/components/reusables/contents/Container";
import Img from "@/components/reusables/contents/elements/Img";
import Wrapper from "@/components/reusables/contents/Wrapper";
import React from "react";
import { motion } from "framer-motion";
import StyledParagrah from "@/components/reusables/contents/StyledParagrah";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8 ">
          {/* Hero left (text) */}
          <div className="relative flex-1 text-left space-y-6">
            <div className="absolute left-0 top-0 h-48 w-48 bg-yellow-400 blur-[200px]"></div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <StyledParagrah content="Latest air pods" className="capitalize" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-5xl lg:text-6xl font-bold text-white"
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
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-medium shadow-lg hover:bg-yellow-600 transition">
                Read More &rarr;
              </button>
              <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-medium hover:bg-yellow-600 hover:text-black transition">
                BUY
              </button>
            </motion.div>
          </div>

          {/* Hero right (image) */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute right-32 bottom-0 h-40 w-40 bg-yellow-400 blur-[190px]"></div>
            <Img src="/hero.svg" alt="hero" width={1000} height={1000} />
          </motion.div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Hero;
