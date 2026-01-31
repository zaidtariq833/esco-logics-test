import { productsCatalogue } from "@/constants";
import { TypeProductCatalogue } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: TypeProductCatalogue = {
  id: 0,
  image: "",
  title: "",
  price: "",
  featured: false,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productCategories: (state, action: PayloadAction<TypeProductCatalogue[]>) => {
      action.payload = productsCatalogue;
    },
  },
});

export const { productCategories } = productsSlice.actions;

export default productsSlice.reducer;
