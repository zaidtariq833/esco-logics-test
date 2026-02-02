"use client";
import { TypeProductCatalogue } from "@/types";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "./ProductCard";

interface Props {
  itemsPerPage: number;
  items: TypeProductCatalogue[];
}

export default function PaginatedItems({ itemsPerPage, items }: Props) {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems =
    Array.isArray(items) && items.slice(itemOffset, endOffset);

  const pageCount = Number(
    Array.isArray(items) && Math.ceil(items.length / itemsPerPage),
  );

  useEffect(() => {
    setItemOffset(0);
  }, [items]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = Number(
      Array.isArray(items) && (event.selected * itemsPerPage) % items.length,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-3 px-[20px] xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-4">
        {currentItems &&
          currentItems.map((product: TypeProductCatalogue) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              category={product.category}
            />
          ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        containerClassName="flex gap-2 mt-[40px] mb-[40px] 2xl:mt-[76px] 2xl:mb-[171px] justify-center"
        pageClassName="px-3 py-1 border rounded cursor-pointer"
        activeClassName="h-[32px] w-[32px] bg-golden text-white"
        previousClassName="px-3 py-1 cursor-pointer"
        nextClassName="px-3 py-1 cursor-pointer"
        breakClassName="px-2"
      />
    </>
  );
}
