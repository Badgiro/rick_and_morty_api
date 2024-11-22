import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { EPISODES, RAM_PARAM_PAGE } from "../../constants";
import { fetchEpisode } from "../../store/slices/episodeSlice";
import LocationsList from "../../components/locationsPage/locationsList";

import PageLogo from "../../components/pageLogo";
import LocationSorting from "../../components/locationSorting";
import logo from "../../assets/images/png/rick-and-morty-episodes.png";
import Pagination from "../../components/pagination";
import EpisodesList from "../../components/episodesList";

const EpisodesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { results: episodes = [], info = null } = useSelector(
    (state) => state.episodes.data || { results: [], info: null }
  );

  console.log(episodes);
  const fetchCutedEpisodes = (arr) =>
    dispatch(
      fetchEpisode(
        `${EPISODES}/${RAM_PARAM_PAGE}${arr.toString()}&${searchParams.toString()}`
      )
    );

  const handleSearchChange = (e) => {
    const query = e.target.value;
    const params = { ...Object.fromEntries(searchParams) };

    if (query) {
      params.name = query;
    } else {
      delete params.name;
    }

    setSearchParams(params);
  };

  useEffect(() => {
    dispatch(fetchEpisode(`${EPISODES}?${searchParams.toString()}`));
  }, [dispatch, searchParams]);

  return (
    <div>
      <PageLogo logo={logo} />
      <div>
        {/* <LocationSorting
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          onSearchChange={handleSearchChange}
        /> */}
      </div>

      {episodes.length > 0 ? (
        <EpisodesList episodes={episodes} />
      ) : (
        <p>Not found</p>
      )}

      {info && (
        <Pagination multipleItemsFetch={fetchCutedEpisodes} info={info} />
      )}
    </div>
  );
};

export default EpisodesPage;
