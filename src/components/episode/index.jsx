import { Link } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

const Episode = ({ episode }) => {
  return (
    <div>
      <li>
        <Link
          to={`/episode/${episode.id}`}
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
          >
            <Meta title={episode.name} description={episode.air_date} />
          </Card>
        </Link>
      </li>
    </div>
  );
};

export default Episode;
