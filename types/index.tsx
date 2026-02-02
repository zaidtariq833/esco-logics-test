import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { RefObject } from "react";

export type TypeCharacteristics = {
  icon: string;
  title: string;
  desc: string;
};

export type TypeProductCatalogue = {
  id?: number;
  image: string;
  title: string;
  price: string;
  category: string;
};

export type TypeNav = {
  navName: string;
  dropdown?: string[];
};

export type ProductsSlice = {
  products: TypeProductCatalogue[];
};

export type TypeInputField = {
  placeholder: string;
  image: string;
  className: string;
  dispatchFunc: () => any;
};

// export type ProductFilterType = {
//   key: string;
//   label: string;
// };
