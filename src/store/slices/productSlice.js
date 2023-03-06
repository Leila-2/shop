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
        payload.quantity = 1;
        state.product = [payload];
      } else {
        const itemInCart = state.product.find((item) => item.id === payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          payload.quantity = 1;
          state.product = [...state.product, payload];
        }
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
