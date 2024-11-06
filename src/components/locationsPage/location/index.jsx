import { Link } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

const Location = ({ location }) => {
  return (
    <div>
      <li>
        <Link
          to={`/location/${location.id}`}
          style={{ textDecoration: "none", textAlign: "center" }}
        >
          <Card
            hoverable
            style={{
              width: 240,
            }}
          >
            <Meta title={location.name} description={location.type} />
          </Card>
        </Link>
      </li>
    </div>
  );
};

export default Location;
