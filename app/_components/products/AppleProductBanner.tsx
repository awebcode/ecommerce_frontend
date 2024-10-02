"use client";
import React from "react";
import Container from "@/components/reusables/contents/Container";
import Wrapper from "@/components/reusables/contents/Wrapper";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const AppleProductBanner = () => {
  return (
    <Wrapper className="bg-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          {/* Left Banner */}
          <div className="relative w-full md:w-1/2 h-96">
            <Image
              src="/images/apple-product1-banner.jpeg"
              alt="Apple Product 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
            {/* Bottom Overlay for Left Banner */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/30 flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                Apple Product 1
              </h2>
              <p className="text-center text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua..
              </p>
              {/* Buttons */}
              <div className="flex space-x-4 mt-2">
                <button className="flex items-center space-x-2 bg-yellow-500 text-black px-6 py-3 rounded-full font-medium shadow-lg hover:bg-yellow-600 transition">
                  Read More <MoveUpRight className="h-4 w-4" />
                </button>
                <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-medium hover:bg-yellow-600 hover:text-black transition">
                  BUY
                </button>
              </div>
            </div>
          </div>

          {/* Right Banner */}
          <div className="relative w-full md:w-1/2 h-96">
            <Image
              src="/images/apple-product2-banner.jpeg"
              alt="Apple Product 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
            {/* Top Overlay for Right Banner */}
            <div className="absolute top-0 left-0 right-0 bg-gray-100/30  flex flex-col justify-center items-center text-white p-4">
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                Apple Product 2
              </h2>
              <p className="text-center text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua..
              </p>
              {/* Buttons */}
              <div className="flex space-x-4 mt-2">
                <button className="flex items-center space-x-2 bg-yellow-500 text-black px-6 py-3 rounded-full font-medium shadow-lg hover:bg-yellow-600 transition">
                  Read More <MoveUpRight className="h-4 w-4" />
                </button>
                <button className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-full font-medium hover:bg-yellow-600 hover:text-black transition">
                  BUY
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default AppleProductBanner;
