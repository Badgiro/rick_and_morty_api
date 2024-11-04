import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {LOCATIONS} from '../../constants'
import { fetchLocations, fetchMultipleLocations } from "../../store/slices/locationsSlice";
import LocationsList from "../../components/locationsPage/locationsList";
import PageLogo from "../../components/pageLogo";
import logo from '../../assets/images/png/rick-and-morty-locations.png'
import styles from './style.module.css'
import Pagination from "../../components/pagination";

const LocationsPage = () => {
  const dispatch = useDispatch();
  const {results:locations,info } = useSelector((state) => state.locations.data);
  console.log(locations)
  const fetchCutedLocations =(arr)=>  dispatch(fetchMultipleLocations(`${LOCATIONS}/${arr}`))

  useEffect(() => {
    dispatch(fetchLocations(LOCATIONS));
  }, [dispatch]);

  return <div  className={styles.locationsPage} >
     <PageLogo logo={logo}/>
    {locations && <LocationsList locations={locations} />}
    {info && <Pagination multipleItemsFetch={fetchCutedLocations} info={info} count={12} />}

   
    </div>;
};

export default LocationsPage;
