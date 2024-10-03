"use client";
import React from "react";
import Container from "@/components/reusables/contents/Container";
import Wrapper from "@/components/reusables/contents/Wrapper";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import PrimaryButton from "@/components/reusables/buttons/PrimaryButton";

const AppleProductBanner = () => {
  return (
    <Wrapper className="bg-white">
      <Container>
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          {/* Left Banner */}
          <div className="relative w-full md:w-1/2 h-72 sm:h-96 md:h-[32rem]">
            <Image
              src="/images/apple-product1-banner.jpeg"
              alt="Apple Product 1"
              layout="fill"
              objectFit="cover"
              className="rounded shadow-lg"
            />
            {/* Bottom Overlay for Left Banner */}
            <div className="absolute bottom-0 left-0 right-0  flex flex-col gap-3 justify-center items-center text-white p-4">
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                Apple Product
              </h2>
              <p className="text-center text-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua..
              </p>
              {/* Buttons */}
              <div className="flex space-x-4 mt-2">
                <PrimaryButton
                  className="hover:bg-black hover:text-white"
                  iconRight={<MoveUpRight className="h-3 w-3 md:w-4 md:h-4" />}
                >
                  Read More{" "}
                </PrimaryButton>
                <PrimaryButton className="bg-black/40 text-white ring-1 ring-primary/50">
                  BUY
                </PrimaryButton>
              </div>
            </div>
          </div>

          {/* Right Banner */}
          <div className="relative w-full md:w-1/2  h-72 sm:h-96 md:h-[32rem]">
            <Image
              src="/images/apple-product2-banner.jpeg"
              alt="Apple Product 2"
              layout="fill"
              objectFit="cover"
              className="rounded shadow-lg"
            />
            {/* Top Overlay for Right Banner */}
            {/* bg-gray-100/30 */}
            <div className="absolute top-0 left-0 right-0   flex flex-col gap-3 justify-center items-center text-white p-4">
              <h2 className="text-2xl md:text-4xl font-bold text-primary">
                Apple Product
              </h2>
              <p className="text-center text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua..
              </p>
              {/* Buttons */}
              <div className="flex space-x-4 mt-2">
                <PrimaryButton
                  className="bg-black text-white hover:bg-primary"
                  iconRight={<MoveUpRight className="h-3 w-3 md:w-4 md:h-4" />}
                >
                  Read More{" "}
                </PrimaryButton>
                <PrimaryButton className="bg-white/40 text-black ring-1 ring-black  hover:bg-black hover:text-white">
                  BUY
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default AppleProductBanner;
