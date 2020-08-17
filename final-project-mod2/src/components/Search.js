import React from 'react';
const [searchValue, setSearchValue] = useState("");

const handleSearchInputChanges = (e) => {
  setSearchValue(e.target.value);
}