import Search from "../search";
import Filter from "../filter";
import { TypeOfFilter } from "../../services";
import { setType, setDimension } from "../../store/slices/locationsSlice";
import { useState } from "react";

const LocationSorting = ({
  handleSubmit,
  searchParams,
  onSearchChange,
  setSearchParams,
}) => {
  console.log(TypeOfFilter.locationFilters.type);
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
        maxWidth: "1280px",
      }}
    >
      <Search  onSearchChange={onSearchChange} />

      <Filter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        searchItems={TypeOfFilter.locationFilters.type}
        setTypeOfSearch={setType}
        paramName={"type"}
      />
      <Filter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        searchItems={TypeOfFilter.locationFilters.dimension}
        setTypeOfSearch={setType}
        paramName={"dimension"}
      />
    </form>
  );
};

export default LocationSorting;
