import Search from "../search";
import Filter from "../filter";
import { TypeOfFilter } from "../../services";
import {
  setStatus,
  setGender,
  setSpecies,
} from "../../store/slices/peopleSlice";

const PeopleSorting = ({
  handleSubmit,

  searchParams,
  onSearchChange,
  setSearchParams,
}) => {
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
      <Search onSearchChange={onSearchChange} />
      <Filter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        searchItems={TypeOfFilter.peopleFilters.gender}
        setTypeOfSearch={setGender}
        paramName={"gender"}
      />
      <Filter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        searchItems={TypeOfFilter.peopleFilters.status}
        setTypeOfSearch={setStatus}
        paramName={"status"}
      />
      <Filter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        searchItems={TypeOfFilter.peopleFilters.species}
        setTypeOfSearch={setSpecies}
        paramName={"species"}
      />
    </form>
  );
};

export default PeopleSorting;
