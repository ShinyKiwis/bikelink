import Map from "../components/Map";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import { useState } from "react";
export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState([]);
  return (
    <div>
      <SearchBar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <Map selectedFilter={selectedFilter} />
      <NavBar />
    </div>
  );
}
