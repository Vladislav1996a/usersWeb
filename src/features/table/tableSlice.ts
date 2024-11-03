import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TableColumns, UserData } from "../../types";
import { AppDispatch } from "../../store/store";

const initialTableColumns = [
  {
    columnName: "Full name",
    display: true,
  },
  {
    columnName: "Birthday",
    display: true,
  },
  {
    columnName: "Gender",
    display: true,
  },
  {
    columnName: "Email",
    display: true,
  },
  {
    columnName: "Phone",
    display: true,
  },
  {
    columnName: "Username",
    display: true,
  },
  {
    columnName: "General Info",
    display: true,
  },
  {
    columnName: "Domain",
    display: true,
  },
  {
    columnName: "IP",
    display: true,
  },
  {
    columnName: "MAC IP",
    display: true,
  },
  {
    columnName: "Address",
    display: true,
  },
  {
    columnName: "Bank",
    display: true,
  },
  {
    columnName: "University",
    display: true,
  },
  {
    columnName: "Company",
    display: true,
  },
  {
    columnName: "EIN",
    display: true,
  },
  {
    columnName: "SSN",
    display: true,
  },
];

interface TableState {
  users: UserData[];
  searchUsers: UserData[];
  total: number;
  isLoading: boolean;
  itemsPerPage: number;
  isError: boolean;
  searchText: string;
  tableColumns: TableColumns[];
}

const initialState: TableState = {
  users: [],
  searchUsers: [],
  total: 0,
  isLoading: false,
  itemsPerPage: 10,
  isError: false,
  searchText: "",
  tableColumns: initialTableColumns,
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
    setDisplayTableColumn: (state, action) => {
      state.tableColumns = state.tableColumns.map((item) => {
        if (item.columnName === action.payload.columnName) {
          return { ...item, display: action.payload.display };
        }
        return item;
      });
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

export const { setSearchText, setItemsPerPage, setDisplayTableColumn } =
  tableSlice.actions;
export default tableSlice.reducer;
