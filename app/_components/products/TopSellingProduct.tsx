"use client";
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
  useCarousel,
} from "@/components/ui/carousel";
import { shuffleArray } from "@/utils/shuffleArray";
const TopSellingProducts = () => {
  const { canScrollNext } = useCarousel();
  const [shuffledProducts, setShuffledProducts] = React.useState(products);

  React.useEffect(() => {
    setShuffledProducts(shuffleArray(products));
  }, []);
  return (
    <Wrapper className="flex flex-col">
      <Container>
        <TitleSubtitle title="Top Selling Products" subtitle="Here is Our New" />
      </Container>
      <Container className="  md:mx-0 md:mr-auto p-2 md:p-0 lg:p-0  ">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full"
        >
          <CarouselContent className={`p-4 ${canScrollNext ? "md:-ml-56" : ""}`}>
            {shuffledProducts.map((product, index) => (
              <CarouselItem
                key={product.title}
                className="basis-1/2 md:basis-1/4 lg:basis-1/5"
              >
                <ProductCard
                  titlePosition="Bottom"
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  isLast={index === products.length - 1} // Apply opacity only when the last
                  isFirst={index === 0} // Apply opacity only when the first
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-12 -bottom-6 sm:hidden">
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

export default TopSellingProducts;
