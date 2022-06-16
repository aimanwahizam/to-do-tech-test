import React from "react";

import "./SearchBar.scss";

const SearchBar = (props) => {
  const { addTask } = props;

  return (
    <form className="search-bar" onSubmit={addTask}>
      <input type="text" className="search-bar__input" />
      <input type="submit" value="+" />
    </form>
  );
};

export default SearchBar;
