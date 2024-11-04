
import { useSelector } from "react-redux";
import Location from "../location";
import styles from "./style.module.css";
const LocationsList = ({ locations }) => {
  const cutedLocations = useSelector((state=> state.locations.multipleLocations))

  return (
    <div>
      <ul className={styles.locationsList}>
        {cutedLocations &&
          cutedLocations.map((location) => {
            return <Location key={location.id} location={location} />;
          })}
      </ul>
    </div>
  );
};

export default LocationsList;
