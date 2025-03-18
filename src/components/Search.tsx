import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Search.css";



//TODO : mettre en place la recherche avec plusieurs critères cfnotepad +


const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/results?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Rechercher"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="rechercher" onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default Search;
