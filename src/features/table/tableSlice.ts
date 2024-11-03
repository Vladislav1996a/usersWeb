import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../types";
import { AppDispatch } from "../../store/store";

interface TableState {
  users: UserData[];
  searchUsers: UserData[];
  total: number;
  isLoading: boolean;
  itemsPerPage: number;
  isError: boolean;
  searchText: string;
}

const initialState: TableState = {
  users: [],
  searchUsers: [],
  total: 0,
  isLoading: false,
  itemsPerPage: 10,
  isError: false,
  searchText: "",
};

export const getUsers = createAsyncThunk<
  { users: UserData[]; total: number },
  string
>("table/getUsers", async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return { users: data.users, total: data.total };
});

export const searchUsers = createAsyncThunk<
  UserData[],
  { url: string; searchText: string },
  { dispatch: AppDispatch }
>("table/searchUsers", async ({ url, searchText }, { dispatch }) => {
  dispatch(setSearchText(searchText));

  const res = await fetch(url);
  const data = await res.json();
  if (searchText.length === 0) return [];
  return data.users;
});

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.users;
        state.total = action.payload.total;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(searchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchUsers = action.payload;
      })
      .addCase(searchUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { setSearchText, setItemsPerPage } = tableSlice.actions;
export default tableSlice.reducer;
