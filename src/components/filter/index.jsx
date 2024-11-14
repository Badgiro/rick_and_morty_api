import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";

const Filter = ({
  searchParams,
  setSearchParams,
  searchItems,
  setTypeOfSearch,
  paramName,
}) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onParamChange = (newValue) => {
    const params = { ...Object.fromEntries(searchParams) };

    if (!newValue) {
      delete params[paramName];
    } else {
      params[paramName] = newValue;
    }

    setSearchParams(params);
    setValue(newValue);
  };

  return (
    <Select
      defaultValue=""
      onChange={(e) => onParamChange(e.target.value)}
      displayEmpty
      sx={{ maxWidth: "240px", width: "100%" }}
    >
      <MenuItem value="">
        {paramName.charAt(0).toUpperCase() + paramName.slice(1)}
      </MenuItem>
      {searchItems.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Filter;
