import { MenuItem, Select } from "@mui/material";

const Filter = ({
  searchParams,
  setSearchParams,
  searchItems,

  paramName,
}) => {
  const onParamChange = (newValue) => {
    const params = { ...Object.fromEntries(searchParams) };

    if (!newValue) {
      delete params[paramName];
    } else {
      params[paramName] = newValue;
    }

    setSearchParams(params);
  };

  return (
    <Select
      defaultValue=""
      onChange={(e) => onParamChange(e.target.value)}
      displayEmpty
      sx={{ maxWidth: "240px", width: "100%" }}
    >
      <MenuItem sx={{ fontWeight: "650" }} value="">
        {`All ${paramName.charAt(0).toUpperCase() + paramName.slice(1)}`}
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
