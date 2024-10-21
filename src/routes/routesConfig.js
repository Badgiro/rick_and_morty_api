import EpisodePage from "../pages/episodesPage";
import PeoplePage from "../pages/peoplePage";
import LocationsPage from "../pages/locationsPage";
import NotFoundPage from "../pages/notFoundPage";


const RoutesConfig =[
    {
        path: '/',
        component: <PeoplePage/>
    },
    {
        path: '/character',
        component: <PeoplePage/>
    },
    {
        path: '/location',
        component: <LocationsPage/>
    },
    {
        path: '/episode',
        component: <EpisodePage/>
    },
    {
        path: '*',
        component: <NotFoundPage/>
    },
    
]

export default RoutesConfig
