import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  desc?: string;
  titlePosition?: "Top" | "Bottom";
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price,desc, titlePosition="Top" }) => {
  return (
    <div className="bg-white border p-1 md:p-2  shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {titlePosition === "Top" && (
        <div className="p-1 md:p-2 ">
          <h3 className="text-sm md:text-lg  capitalize font-semibold text-neutral-600">
            {title}
          </h3>
          {desc && <p className="">{desc?.slice(0, 25)+"..."}</p>}
        </div>
      )}
      {/* Product Image */}
      <div className="w-full  relative group overflow-hidden bg-gray-50 rounded-sm">
        <Image
          src={image}
          alt={title}
          height={224}
          width={300}
          className="w-full h-auto rounded-t-md  object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {titlePosition === "Bottom" && (
        <div className="p-1 md:p-2">
          <h3 className="text-sm md:text-lg  capitalize font-semibold text-neutral-600">
            {title}
          </h3>
          {desc && <p className="">{desc?.slice(0, 25)+"..."}</p>}
        </div>
      )}

      {/* Product Title and Price */}
      {/* <div className="p-2 ">
        <p className="text-xs md:text-sm font-medium text-gray-600">
          ${price.toFixed(2)}
        </p>
      </div> */}

      {/* Buttons Section */}
      <div className="p-2 flex justify-between items-center space-x-4">
        {/* Add to Cart Button */}
        <Button
          variant={"outline"}
          className="flex items-center text-[10px] md:text-sm md:space-x-2 rounded-2xl  px-2 md:px-4 py-2 transition-all text-neutral-800 hover:bg-primary hover:text-white"
        >
          <ShoppingCart className="text-neutral-400 h-[12px] md:h-4" />
          <span> Cart</span>
        </Button>

        {/* Search Button */}
        <Button
          size={"icon"}
          className="rounded-xl p-3 transition-all text-white bg-neutral-800 hover:bg-primary hover:shadow-lg"
        >
          <Search />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
