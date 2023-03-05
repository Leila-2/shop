import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct(state, { payload }) {
      if (state.product === null) {
        state.product = [payload];
      } else {
        state.product = [...state.product, payload];
      }
    },
    removeProduct(state) {
      state.product = null;
    },
  },
});

export const { setProduct, removeProduct } = productSlice.actions;
export const selectData = (state) => state.product.product;

export default productSlice.reducer;
