import { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const PeopleStatus = ({ statusQuery, onStatusChange }) => {
  const [status, setStatus] = useState(statusQuery || "");

  const handleChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus);
    onStatusChange(selectedStatus); 
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 120, marginLeft: 2 }}>
      <InputLabel>Status</InputLabel>
      <Select
        value={status}
        onChange={handleChange}
        label="Status"
      >
        <MenuItem value="alive">Alive</MenuItem>
        <MenuItem value="dead">Dead</MenuItem>
        <MenuItem value="unknown">Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};

export default PeopleStatus;