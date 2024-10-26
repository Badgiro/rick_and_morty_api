import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocations } from "../../store/slices/locationsSlice";
import LocationsList from "../../components/locationsPage/locationsList";

const LocationsPage = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.locations.data);

  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  return <div>{locations && <LocationsList locations={locations} />}</div>;
};

export default LocationsPage;
