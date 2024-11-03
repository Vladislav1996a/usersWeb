import { searchUsers } from "../../features/table/tableSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Search } from "../Search/ Search";

export const MainSearch = () => {
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchParams = {
      url: `https://dummyjson.com/users/search?q=${e.target.value}`,
      searchText: e.target.value,
    };
    dispatch(searchUsers(searchParams));
  };
  const { searchText } = useAppSelector((state) => state.table);
  return <Search search={searchText} handleSearchChange={handleSearchChange} />;
};
