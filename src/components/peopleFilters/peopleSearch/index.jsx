import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const PeopleSearch = ({ onSearchChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      type="search"
      name="search"
      variant="outlined"
      fullWidth
      onChange={onSearchChange}
      InputProps={{
        endAdornment: (
          <IconButton
            type="submit"
            variant="contained"
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

export default PeopleSearch;