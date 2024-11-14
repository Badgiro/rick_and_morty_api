
import Location from "../location";
import styles from "./style.module.css";
const LocationsList = ({ locations }) => {
  console.log(locations)
  return (
    <div>
      <ul className={styles.locationsList}>
        {locations && locations.map((location) => {
            return <Location key={location.id} location={location} />;
          })}
      </ul>
    </div>
  );
};

export default LocationsList;
