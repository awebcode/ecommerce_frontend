import { products } from "@/app/_components/data";
import Container from "@/components/reusables/contents/Container";
import Wrapper from "@/components/reusables/contents/Wrapper";
import React from "react";
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
export const revalidate=0
const FeatureProducts = () => {
  
  return (
    <Wrapper className="bg-white">
      <Container>
        <TitleSubtitle title="Feature Products" subtitle="Visit Our New" />
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full "
        >
          <CarouselContent className="p-4">
            {shuffleArray(products).map((product) => (
              <CarouselItem
                key={product.title}
                className="basis-1/2 sm:basis-1/4 "
              >
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  titlePosition="Bottom"
                  desc="Lorem ipsum dolor sit amet, consectetur adipiscing."
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-12 -bottom-12 sm:hidden">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <div className="sm:absolute left-24 top-1/2 ">
            <CarouselPrevious className="ring-2 ring-black hover:ring-primary hover:bg-primary border-none bg-white hover:text-black" />
          </div>
          <div className="sm:absolute right-24 top-1/2 ">
            <CarouselNext className="ring-2 ring-black hover:ring-primary hover:bg-primary border-none bg-white hover:text-black" />
          </div>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default FeatureProducts;
