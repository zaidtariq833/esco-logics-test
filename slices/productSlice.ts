import { productsCatalogue } from "@/constants";
import { ProductsSlice } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: ProductsSlice = {
  products: productsCatalogue,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSearchedProducts: (state, action: PayloadAction<string>) => {
      const lower = action.payload.toLowerCase();

      if (!lower) {
        state.products = productsCatalogue;
        return;
      }

      state.products = productsCatalogue.filter((product) =>
        product.title.toLowerCase().includes(lower),
      );
    },
    setFilteredTabProducts: (state, action: PayloadAction<string>) => {
      console.log(action.payload, "filter tabs");
      state.products = productsCatalogue.filter(
        (product) => product.category === action.payload,
      );
    },
    setPricingFilter: (state, action: PayloadAction<string>) => {
      const sortType = action.payload;
      console.log(sortType, "sorting type");
      state.products = [...state.products].sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
        const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
        return sortType === "Price: Low-High"
          ? priceA - priceB
          : priceB - priceA;
      });
    },
  },
});

export const { setPricingFilter, setFilteredTabProducts, setSearchedProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
