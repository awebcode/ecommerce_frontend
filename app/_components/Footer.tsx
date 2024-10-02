import Container from "@/components/reusables/contents/Container";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="!bg-[#FFF7EB]  text-gray-700 py-16">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-start">
          {/* Logo and Description */}
          <div className="lg:w-1/3 text-left">
            <div className="text-3xl md:text-6xl font-bold mb-8 bg-gray-600 rounded-lg p-3 text-white inline-block">
              LOGO
            </div>
            <p className="text-gray-600 ">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using
              Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col lg:flex-row gap-8 mt-8 lg:mt-0">
            <div>
              <h4 className="font-bold mb-4">Pages</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-yellow-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/service" className="hover:text-yellow-500">
                    Service
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:text-yellow-500">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/accessories" className="hover:text-yellow-500">
                    Accessories
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-yellow-500">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Our Policies</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/terms" className="hover:text-yellow-500">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/warranty" className="hover:text-yellow-500">
                    Warranty Policy
                  </a>
                </li>
                <li>
                  <a href="/refund" className="hover:text-yellow-500">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="/tracking" className="hover:text-yellow-500">
                    Tracking
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li>📞 +8806666-000000</li>
                <li>📍 Here is your shop Location, and City Name</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-left py-6 my-3 text-gray-500 border-t-[1px] border-primary">
          <p>&copy; 2024 yourfit. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
