import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchPeople, setStatus } from "../../store/slices/peopleSlice";
import { CHARACTERS, RAM_PARAM_PAGE } from "../../constants";
import Pagination from "../../components/pagination";
import PeopleList from "../../components/peopleList";
import styles from "./style.module.css";
import PageLogo from "../../components/pageLogo";
import logo from "../../assets/images/png/rick-and-morty.png";
import PeopleFilters from "../../components/peopleFilters";

const PeoplePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { results: people = [], info = null } = useSelector(
    (state) => state.people.data || { results: [], info: null }
  );
  const status = useSelector((state) => state.people.status);

  const fetchCutedPersons = (arr) =>
    dispatch(
      fetchPeople(
        `${CHARACTERS}/${RAM_PARAM_PAGE}${arr.toString()}&${searchParams.toString()}`
      )
    );

  const handleStatusChange = (newStatus) => {
    dispatch(setStatus(newStatus));
    const params = { ...Object.fromEntries(searchParams), status: newStatus };
    setSearchParams(params);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.search.value;
    const params = {};
    if (query) params.name = query;
    if (status) params.status = status;
    setSearchParams(params);
  };

  useEffect(() => {
    dispatch(fetchPeople(`${CHARACTERS}?${searchParams.toString()}`));
  }, [dispatch, searchParams, status]);

  return (
    <div className={styles.people}>
      <PageLogo logo={logo} />
      <PeopleFilters
        handleSubmit={handleSubmit}
        onStatusChange={handleStatusChange}
      />
      {people && info && <PeopleList />}
      {info && people && (
        <Pagination multipleItemsFetch={fetchCutedPersons} info={info} />
      )}
    </div>
  );
};

export default PeoplePage;
