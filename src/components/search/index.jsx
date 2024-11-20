import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (onSearchSubmit) {
      onSearchSubmit(searchQuery); // Передаем текст запроса
      setSearchQuery(""); // Сбрасываем поле поиска
    }
  };

  return (
    <TextField
      id="outlined-basic"
      label="Search"
      type="search"
      name="search"
      variant="outlined"
      fullWidth
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      InputProps={{
        endAdornment: (
          <IconButton
            type="submit"
            onClick={handleSearch}
            color="primary"
            sx={{ height: "100%", backgroundColor: "transparent" }}
          >
            <SearchIcon />
          </IconButton>
        ),
      }}
    />
  );
};

export default Search;
