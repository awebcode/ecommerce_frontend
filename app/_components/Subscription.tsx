"use client";
import Container from "@/components/reusables/contents/Container";
import Wrapper from "@/components/reusables/contents/Wrapper";
import { Button } from "@/components/ui/button";
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
      <Container>
        <div className="text-center bg-[#FFF7EB] p-4 md:p-8 rounded-lg">
          <h2 className="text-lg md:text-xl font-thin tracking-wider mb-4 text-primary">
            — To get More Up to Date —
          </h2>
          <h1 className="text-3xl md:text-5xl font-thin mb-4 text-zinc-700">
            Subscribe Using Mail
          </h1>
          <p className="text-gray-600 w-full text-left md:text-center md:max-w-[65%] mx-auto py-6">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don&apos;t look even slightly believable.
          </p>
          <form
            onSubmit={handleSubscription}
            className="flex items-center w-full md:max-w-[45%] mx-auto gap-2"
          >
            <div className="flex flex-col w-full">
              <Input
                className="w-full p-4 border border-gray-300 text-black rounded-md focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter Your Mail Here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <span className="text-red-500 text-left">{error}</span>}
            </div>
            <Button
              type="submit"
              className="h-auto px-4 md:px-8 py-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
    </Wrapper>
  );
};

export default SubscriptionPage;
