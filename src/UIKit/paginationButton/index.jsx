import { TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const PeopleSearch = ({ handleSubmit }) => {
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      action=""
      style={{ display: "flex" }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        type="search"
        name="search"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <IconButton
              type="submit"
              sx={{
                height: "100%",
                width: "auto",
                padding: 0, // убираем внутренние отступы для иконки
                color: "black", // цвет иконки
                backgroundColor: "transparent", // прозрачный фон
                borderRadius: "50%", // круглую форму вокруг иконки
                "&:hover": {
                  backgroundColor: "transparent", // прозрачный фон при наведении
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </form>
  );
};

export default PeopleSearch;
