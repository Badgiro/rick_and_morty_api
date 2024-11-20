import EpisodePage from "../pages/episodesPage";
import PeoplePage from "../pages/peoplePage";
import LocationsPage from "../pages/locationsPage";
import NotFoundPage from "../pages/notFoundPage";
import PersonPage from "../pages/personPage/";
import SingleLocationPage from "../pages/singleLocationPage";

const RoutesConfig = [
  {
    path: "/",
    component: <PeoplePage />,
  },
  {
    path: "/character",
    component: <PeoplePage />,
  },
  {
    path: "/character/:id",
    component: <PersonPage />,
  },
  {
    path: "/location",
    component: <LocationsPage />,
  },
  {
    path: "/location/:id",
    component: <SingleLocationPage />,
  },
  {
    path: "/episode",
    component: <EpisodePage />,
  },
  {
    path: "*",
    component: <NotFoundPage />,
  },
];

export default RoutesConfig;
