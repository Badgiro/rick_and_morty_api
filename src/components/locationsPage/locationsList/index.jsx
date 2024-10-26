import Location from "../location";

const LocationsList = ({ locations }) => {
  console.log(locations);

  return (
    <div>
      <ul>
        {locations.results &&
          locations.results.map((location) => {
            return <Location key={location.id} location={location} />;
          })}
      </ul>
    </div>
  );
};

export default LocationsList;
