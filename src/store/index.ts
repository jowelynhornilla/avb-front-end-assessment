import { configureStore } from "@reduxjs/toolkit";

import reducer from "store/slices";

const store = configureStore({
  reducer,
});

export default store;
