"use client";
import PrimaryButton from "@/components/reusables/buttons/PrimaryButton";
import Container from "@/components/reusables/contents/Container";
import Wrapper from "@/components/reusables/contents/Wrapper";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { z } from "zod";

// Zod schema for email validation
const emailSchema = z.string().email("Invalid email format");

const SubscriptionPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      emailSchema.parse(email); // Validate email
      setError(null);
      alert("Subscribed successfully!");
      setEmail(""); // Clear the input after success
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <Wrapper className="bg-white">
      <Container >
        <div className="text-center bg-[#FFF7EB] p-4 md:p-8 rounded-lg">
          <h2
            className="text-lg md:text-xl font-thin tracking-wider mb-4 text-primary relative inline-block
  before:content-[''] before:absolute before:w-6 md:before:w-8 before:h-[1px] before:bg-primary before:top-1/2 before:-left-8 md:before:-left-12 before:transform before:-translate-y-1/2 
  after:content-[''] after:absolute after:w-6 md:after:w-8 after:h-[1px] after:bg-primary after:top-1/2 after:-right-8 md:after:-right-12 after:transform after:-translate-y-1/2"
          >
            To get More Up to Date
          </h2>

          <h1 className="text-3xl md:text-5xl font-thin my-4 text-zinc-700">
            Subscribe Using Mail
          </h1>
          <p className="text-gray-600 w-full text-left md:text-center md:max-w-[65%] mx-auto py-6">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don&apos;t look even slightly believable.
          </p>

          <div className="flex flex-col  gap-2 items-start  w-full md:max-w-[45%] mx-auto">
            <form
              onSubmit={handleSubscription}
              className="relative flex flex-col items-center px-1   gap-2 ring-1 ring-primary/60 rounded-full bg-white"
            >
              <div className="flex items-center w-full gap-2">
                <Input
                  className="w-full h-full p-2 md:p-4 border-none shadow-none outline-none ring-none focus-visible:ring-0 border-gray-300 text-black rounded-md"
                  placeholder="Enter Your Mail Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <PrimaryButton
                  className="bg-transparent hover:ring-primary/80 text-black/80 hover:text-white ring-2 ring-black/80"
                  type="submit"
                >
                  Subscribe
                </PrimaryButton>
              </div>
            </form>
            {error && <span className="text-red-500 ">{error}</span>}
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default SubscriptionPage;
