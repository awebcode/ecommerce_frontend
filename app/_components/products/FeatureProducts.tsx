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
} from "@/components/ui/carousel";
import { shuffleArray } from "@/utils/shuffleArray";
const FeatureProducts = () => {
  const [shuffledProducts, setShuffledProducts] = React.useState(products);


  React.useEffect(() => {
    setShuffledProducts(shuffleArray(products));
  }, []);

  return (
    <Wrapper className="bg-white" id="feature-products">
      <Container>
        <TitleSubtitle title="Feature Products" subtitle="Visit Our New" />
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full "
        >
          <CarouselContent className="p-4">
            {shuffledProducts.map((product, _) => (
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
                  isFirst={_ === 0}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute right-12 -bottom-6 ">
            <CarouselPrevious className="ring-2 ring-black hover:ring-primary hover:bg-primary border-none bg-white hover:text-black" />
            <CarouselNext className="ring-2 ring-black hover:ring-primary hover:bg-primary border-none bg-white hover:text-black" />
          </div>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default FeatureProducts;
