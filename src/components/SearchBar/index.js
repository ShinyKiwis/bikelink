import { useEffect, useState } from "react";
import SearchBarStyle from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
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

const SearchBar = ({ selectedFilter, setSelectedFilter }) => {
  // Loaded Google Map here in order for AutoComplete to work
  // The API keep saying quota limitation
  const filterOptions = ["Place", "Bus", "Bike", "Theaters", "Markets"];
  console.log(selectedFilter);
  return (
    <>
      <div className={SearchBarStyle.search_container}>
        <SearchInput />
      </div>
      <Filter />
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
