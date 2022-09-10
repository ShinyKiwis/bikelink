import { useState } from "react";
import SearchBarStyle from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { GoSettings } from "react-icons/go";

const Filter = () => {
  return (
    <div className={SearchBarStyle.filter_container}>
      <GoSettings className={SearchBarStyle.filter_icon} />
    </div>
  );
};

const FilterItem = ({ title, selectedFilter, setSelectedFilter }) => {
  const pressHandle = () => {
    if (selectedFilter.includes(title)) {
      setSelectedFilter((selectedFilter) =>
        selectedFilter.filter((filter) => filter != title)
      );
    } else {
      setSelectedFilter([...selectedFilter, title]);
    }
  };
  return (
    <span
      onClick={pressHandle}
      className={
        selectedFilter.includes(title)
          ? SearchBarStyle.selected_filter_option
          : SearchBarStyle.filter_option
      }
    >
      {title}
    </span>
  );
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
  const [selectedFilter, setSelectedFilter] = useState([]);
  const filterOptions = ["Place", "Bus", "Bike", "Theaters", "Markets"];
  return (
    <>
      <div className={SearchBarStyle.search_container}>
        <SearchInput />
        <Filter />
      </div>
      <div className={SearchBarStyle.filter_options_container}>
        {filterOptions.map((option) => (
          <FilterItem
            title={option}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        ))}
      </div>
    </>
  );
};

export default SearchBar;
