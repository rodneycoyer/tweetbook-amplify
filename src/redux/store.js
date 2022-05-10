import { configureStore } from "@reduxjs/toolkit";
import theme from "./themeSlice";

export default configureStore({
  reducer: {
    theme,
  },
});