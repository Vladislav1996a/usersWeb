import { configureStore } from "@reduxjs/toolkit";
import tableSlice from "../features/table/tableSlice";

export const store = configureStore({
  reducer: {
    table: tableSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
