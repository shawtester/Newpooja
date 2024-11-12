"use client";

import { useState } from "react";
import { useBrands } from "@/lib/firestore/brands/read";
import { useCategories } from "@/lib/firestore/categories/read";

export default function BasicDetails({ data, handleData }) {
  const { data: brands } = useBrands();
  const { data: categories } = useCategories();

  // State for featured product status and price range
  const [isFeatured, setIsFeatured] = useState(data?.isFeatured ?? "no");
  const [priceStart, setPriceStart] = useState(data?.priceStart ?? "");
  const [priceEnd, setPriceEnd] = useState(data?.priceEnd ?? "");

  // Handle start price change
  const handleStartPriceChange = (value) => {
    setPriceStart(value);
    handleData("priceStart", value); // Update start price in the data object
  };

  // Handle end price change
  const handleEndPriceChange = (value) => {
    setPriceEnd(value);
    handleData("priceEnd", value); // Update end price in the data object
  };

  // Handle featured product change
  const handleFeaturedChange = (e) => {
    const newFeaturedStatus = e.target.value;
    setIsFeatured(newFeaturedStatus);
    handleData("isFeatured", newFeaturedStatus);
  };

  // Handle stock availability change (Yes/No)
  const handleStockChange = (e) => {
    handleData("isInStock", e.target.value === "yes" ? true : false);
  };

  return (
    <section className="flex-1 flex flex-col gap-3 bg-white rounded-xl p-4 border">
      <h1 className="font-semibold">Basic Details</h1>

      {/* Product Name */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-500 text-xs" htmlFor="product-title">
          Product Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Title"
          id="product-title"
          name="product-title"
          value={data?.title ?? ""}
          onChange={(e) => handleData("title", e.target.value)}
          className="border px-4 py-2 rounded-lg w-full outline-none"
          required
        />
      </div>

      {/* Short Description */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-500 text-xs" htmlFor="product-short-decription">
          Short Description <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Short Description"
          id="product-short-decription"
          name="product-short-decription"
          value={data?.shortDescription ?? ""}
          onChange={(e) => handleData("shortDescription", e.target.value)}
          className="border px-4 py-2 rounded-lg w-full outline-none"
          required
        />
      </div>

      {/* Brand */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-500 text-xs" htmlFor="product-brand">
          Brand <span className="text-red-500">*</span>
        </label>
        <select
          id="product-brand"
          name="product-brand"
          value={data?.brandId ?? ""}
          onChange={(e) => handleData("brandId", e.target.value)}
          className="border px-4 py-2 rounded-lg w-full outline-none"
          required
        >
          <option value="">Select Brand</option>
          {brands?.map((item) => (
            <option value={item?.id} key={item?.id}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-500 text-xs" htmlFor="product-category">
          Category <span className="text-red-500">*</span>
        </label>
        <select
          id="product-category"
          name="product-category"
          value={data?.categoryId ?? ""}
          onChange={(e) => handleData("categoryId", e.target.value)}
          className="border px-4 py-2 rounded-lg w-full outline-none"
          required
        >
          <option value="">Select Category</option>
          {categories?.map((item) => (
            <option value={item?.id} key={item?.id}>
              {item?.name}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Fields */}
      <div className="flex flex-col gap-2">
        <label className="text-gray-500 text-xs">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={priceStart}
            onChange={(e) => handleStartPriceChange(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full outline-none"
            placeholder="Start Price"
            min="0"
          />
          <span className="my-auto">-</span>
          <input
            type="number"
            value={priceEnd}
            onChange={(e) => handleEndPriceChange(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full outline-none"
            placeholder="End Price"
            min="0"
          />
        </div>
      </div>

      {/* Stock Availability (Yes/No) */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-500 text-xs" htmlFor="product-stock">
          In Stock <span className="text-red-500">*</span>
        </label>
        <select
          id="product-stock"
          name="product-stock"
          value={data?.isInStock ? "yes" : "no"}
          onChange={handleStockChange}
          className="border px-4 py-2 rounded-lg w-full outline-none"
          required
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>

      {/* Featured Product Field (Yes/No) */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-500 text-xs" htmlFor="product-is-featured-product">
          Is Featured Product <span className="text-red-500">*</span>{" "}
        </label>
        <select
          id="product-is-featured-product"
          name="product-is-featured-product"
          value={data?.isFeatured ? "yes" : "no"}
          onChange={handleFeaturedChange}
          className="border px-4 py-2 rounded-lg w-full outline-none"
          required
        >
          <option value="no">No</option>
          <option value="yes">Yes</option>
        </select>
      </div>
    </section>
  );
}
