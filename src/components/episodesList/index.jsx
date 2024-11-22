import Episode from "../episode";

const EpisodesList = ({ episodes }) => {
  return (
    <div>
      <ul>
        {episodes.map((episode) => {
          return <Episode key={episode.id} episode={episode} />;
        })}
      </ul>
    </div>
  );
};

export default EpisodesList;
