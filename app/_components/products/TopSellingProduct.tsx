"use client";
import { products } from "@/app/_components/data";
import Container from "@/components/reusables/contents/Container";
import Wrapper from "@/components/reusables/contents/Wrapper";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import TitleSubtitle from "@/components/reusables/contents/TitleSubtitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { shuffleArray } from "@/utils/shuffleArray";

const TopSellingProducts = () => {
  const [shuffledProducts, setShuffledProducts] = useState(products);

  useEffect(() => {
    // Shuffle the array only on the client side
    setShuffledProducts(shuffleArray(products));
  }, []);
  return (
    <Wrapper className="bg-white">
      <Container>
        <TitleSubtitle title="Top Selling Products" subtitle="Here is Our New." />
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full "
        >
          <CarouselContent className="p-4">
            {shuffledProducts.map((product) => (
              <CarouselItem
                key={product.title}
                className="basis-1/2 md:basis-1/4 lg:basis-1/5"
              >
                <ProductCard
                  titlePosition="Bottom"
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-12 -bottom-2 sm:static">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default TopSellingProducts;
