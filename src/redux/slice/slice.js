import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "../operation/operations";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    cart: [],
    favorites: [],
    user: {
      name: "John",
      surname: "Doe",
      job: "Marketer",
      avatar:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    filter: "",
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.count += 1;
        return;
      } else {
        state.cart.push({ ...newItem, count: 1 });
      }

      // const productToAdd = state.products.find((item) => item.id === id);
      // if (!productToAdd) return;
    },
    // increment(state, action) {
    //   const { id } = action.payload;
    //   return {
    //     ...state,
    //     cart: state.cart.map((item) =>
    //       item.id === id ? { ...item, count: item.count + 1 } : item,
    //     ),
    //   };
    // },
    // decrement(state, action) {
    //   const { id } = action.payload;
    //   const updatedCart = state.cart.map((item) =>
    //     item.id === id ? { ...item, count: item.count - 1 } : item,
    //   );
    //   const filteredCart = updatedCart.filter((item) => item.count > 0);
    //   return { ...state, cart: filteredCart };
    // },
    removeProduct(state, action) {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
    toggleFavorite(state, action) {
      const newItem = action.payload;

      const existingItem = state.favorites.find(
        (item) => item.id === newItem.id,
      );

      if (existingItem) {
        state.favorites = state.favorites.filter(
          (item) => item.id !== newItem.id,
        );
      } else {
        state.favorites.push(newItem);
      }
    },
    updateUser(state, action) {
      const { name, surname, job } = action.payload;

      state.user.name = name;
      state.user.surname = surname;
      state.user.job = job;
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    }
  },
});

export const { addToCart, removeProduct, toggleFavorite, updateUser, updateFilter } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
