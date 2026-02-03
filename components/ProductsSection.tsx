"use client";

import { productTypeHeadings } from "@/constants";
import InputField from "./shared/InputField";
import PaginatedItems from "./Pagination";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setFilteredTabProducts,
  setPricingFilter,
} from "@/slices/productSlice";
import { nunitoMedium, nunitoSansExtraBold } from "@/fonts/fonts";

export default function ProductsSection() {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.product);
  const [selectedCategory, setSelectedCategory] = useState<string>("Latest");

  const normalSelectionCategory =
    selectedCategory === "Latest" ||
    selectedCategory === "Popular" ||
    selectedCategory === "Featured";

  useEffect(() => {
    dispatch(setFilteredTabProducts("Latest"));
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (normalSelectionCategory) {
      dispatch(setFilteredTabProducts(category));
    } else {
      dispatch(setPricingFilter(category));
    }
  };

  return (
    <section className="px-[20px] 2xl:px-[122px]">
      <div className="flex flex-col items-center justify-between xl:flex-row 2xl:px-[15px]">
        <div className="w-full 2xl:w-auto px-2 lg:px-10 2xl:px-0">
          <ul className="flex flex-row flex-wrap justify-center gap-6 xl:justify-start 2xl:gap-8">
            {productTypeHeadings.map((heading, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(heading)}
                className={`
                  ${nunitoMedium.className}
                  text-[16px] 2xl:text-[18px]
                  leading-7 2xl:leading-8
                  cursor-pointer border-b-2 pb-2
                  ${
                    selectedCategory === heading
                      ? "text-maroon border-maroon font-bold"
                      : "text-dimGray border-transparent"
                  }
                `}
              >
                {heading}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full 2xl:w-auto flex justify-center 2xl:justify-end mt-4 xl:mt-0">
          <InputField placeholder="Search your product here" />
        </div>
      </div>

      {products.length === 0 ? (
        <h3
          className={`${nunitoSansExtraBold.className} text-center text-gray-500 py-10 2xl:text-[50px]`}
        >
          No Products available
        </h3>
      ) : (
        <PaginatedItems itemsPerPage={12} items={products} />
      )}
    </section>
  );
}
