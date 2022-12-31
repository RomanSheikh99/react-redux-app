const productReducers = {
  setProducts: (state, action) => {
    state.products = action.payload;
  },
  setError: (state, action) => {
    state.error = action.payload;
  },
  setLoading: (state, action) => {
    state.loading = action.payload;
  },
};

export default productReducers;
