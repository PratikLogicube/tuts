import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

const ProductDetails: React.FC<ProductDetailsProps> = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const productDetails: Product = await data.json();
  console.log(productDetails);

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Row */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <Link
              href="/products"
              className="cursor-pointer text-gray-500 hover:text-gray-700"
            >
              ← All Products
            </Link>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar: Additional Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stylish Tag */}
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-sm font-bold">👚</span>
                </div>
                <span className="text-sm font-medium text-purple-600">
                  Stylish
                </span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-900">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">☆</span>
                <span className="text-gray-600">
                  {productDetails.rating.rate} {productDetails.rating.count}{" "}
                  reviews
                </span>
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm text-gray-600">New York, USA</span>
              </div>
            </div>

            {/* View More Reviews Button */}
            {/* <Button className="w-full cursor-pointer">View More</Button> */}
          </div>

          {/* Center: Product Image Gallery */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4">
              {/* Main Image */}
              <Image
                src={productDetails.image}
                alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                width={800}
                height={600}
                className="w-full h-96 object-contain"
              />

              {/* Thumbnail Images Row */}
              <div className="flex p-4 space-x-2">
                <Image
                  src={productDetails.image}
                  alt="Thumbnail 1"
                  width={80}
                  height={80}
                  className="w-20 h-20 p-1 object-contain rounded cursor-pointer border-2 border-gray-200 hover:border-black"
                />
                <Image
                  src={productDetails.image}
                  alt="Thumbnail 2"
                  width={80}
                  height={80}
                  className="w-20 h-20 p-1 object-contain rounded cursor-pointer border-2 border-gray-200 hover:border-black"
                />
                <Image
                  src={productDetails.image}
                  alt="Thumbnail 3"
                  width={80}
                  height={80}
                  className="w-20 h-20 p-1 object-contain rounded cursor-pointer border-2 border-gray-200 hover:border-black"
                />
              </div>
            </div>
          </div>

          {/* Right: Product Details Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 border">
              {/* New Arrival Badge */}
              <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full mb-4">
                NEW ARRIVAL
              </span>

              {/* Title and Rating */}
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {productDetails.title}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-0.5">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">☆</span>
                </div>
                <span className="text-sm text-gray-600">
                  {productDetails.rating.rate}
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-4">
                {productDetails.rating.count} reviews | 1,919 sold
              </div>

              {/* Price */}
              <div className="text-3xl font-bold text-gray-900 mb-6">
                ${productDetails.price}
              </div>

              {/* Category */}
              <div className="mb-6">
                <span className="text-sm font-medium text-gray-500">
                  Category:
                </span>
                <span className="text-sm font-semibold text-gray-900 ml-1">
                  {productDetails.category}
                </span>
              </div>

              {/* Available Colors */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Available Colors
                </h3>
                <div className="flex space-x-2 mb-2">
                  <div className="w-5 h-5 bg-black rounded-full border-2 border-white shadow-sm cursor-pointer"></div>
                  <div className="w-5 h-5 bg-gray-300 rounded-full border-2 border-white shadow-sm cursor-pointer"></div>
                  <div className="w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm cursor-pointer"></div>
                </div>
                <span className="text-xs text-gray-500">• Only 5 left</span>
              </div>

              {/* Sizes */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Size</h3>
                <div className="flex space-x-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className={`w-8 h-8 border rounded cursor-pointer hover:bg-gray-100 ${
                        size === "S" ? "bg-gray-100" : ""
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">
                  Description:
                </h3>
                <p className="text-sm text-gray-600">
                  {productDetails.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Shipping and Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Shipping Information */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Shipping Information
            </h3>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                🚚
              </div>
              <span className="text-sm text-gray-600">Delivery</span>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                🌍
              </div>
              <span className="text-sm text-gray-600">
                International Shipping
              </span>
            </div>
            <div className="flex items-center space-x-3 mt-2">
              <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-white text-xs">
                📅
              </div>
              <span className="text-sm text-gray-600">
                Estimated on 27 Oct 2022
              </span>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="space-y-4">
            {/* Review 1 */}
            <div className="flex items-start space-x-4 review-bubble p-4 rounded-lg">
              <div className="flex space-x-0.5 text-sm">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    Alex Mathio
                  </span>
                  <span className="text-xs text-gray-500">13 Oct 2024</span>
                </div>
                <p className="text-sm text-gray-600">
                  NextGen&apos;s dedication to sustainability and ethical
                  practices positions the brand as a responsible choice in the
                  fashion world.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex items-start space-x-4 review-bubble p-4 rounded-lg">
              <div className="flex space-x-0.5 text-sm">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">
                    Alex Mathio
                  </span>
                  <span className="text-xs text-gray-500">13 Oct 2024</span>
                </div>
                <p className="text-sm text-gray-600">
                  NextGen&apos;s dedication to sustainability and ethical
                  practices positions the brand as a responsible choice in the
                  fashion world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
          .star {
            color: #fbbf24;
          }
          .review-bubble {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
          }
          .bg-purple-500 {
            background-color: #8b5cf6;
          }
          .text-purple-600 {
            color: #9333ea;
          }
          .bg-purple-100 {
            background-color: #ede9fe;
          }
          .border-purple-200 {
            border-color: #e9d5ff;
          }
          .available-badge {
            background-color: #eff6ff;
            color: #1e40af;
          }
        `}</style> */}
    </div>
  );
};

export default ProductDetails;
