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
const TopSellingProducts = () => {
  
  return (
    <Wrapper className="bg-white">
      <Container>
        <TitleSubtitle title="Top Selling Products" subtitle="Here is Our New" />
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
          <div className="hidden sm:block sm:absolute right-12 -bottom-12 ">
              <CarouselPrevious className="ring-2 ring-black hover:ring-primary hover:bg-primary border-none bg-white hover:text-black" />
              <CarouselNext className="ring-2 ring-black hover:ring-primary hover:bg-primary border-none bg-white hover:text-black" />
          </div>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default TopSellingProducts;
