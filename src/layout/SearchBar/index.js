import SearchBarStyle from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

const Filter = () => {
    return (
        <div>
            Filter
        </div>
    )
};

const SearchInput = () => {
  return (
    <div className={SearchBarStyle.search_input_container}>
      <BsSearch className={SearchBarStyle.search_icon} />
      <input
        type="text"
        placeholder="Search Location"
        className={SearchBarStyle.search_input}
      />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className={SearchBarStyle.search_container}>
      <SearchInput />
      <Filter />
    </div>
  );
};

export default SearchBar;
