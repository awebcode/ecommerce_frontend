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

const FeatureProducts = () => {
  return (
    <Wrapper className="bg-white">
      <Container>
        <TitleSubtitle title="Feature Products" subtitle="Visit Our New." />
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full "
        >
          <CarouselContent className="p-4">
            {products.slice(3, 8).map((product) => (
              <CarouselItem
                key={product.title}
                className="basis-1/2 md:basis-1/4 lg:basis-1/5"
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
          <div className="absolute right-12 -bottom-2 ">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default FeatureProducts;
