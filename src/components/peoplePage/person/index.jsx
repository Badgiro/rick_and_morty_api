import { Link } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

const Person = ({ person }) => {
  return (
    <li>
      <Link to={`/character/${person.id}`}>
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={<img alt={person.name} src={person.image} />}
        >
          <Meta title={person.name} description={person.species} />
        </Card>
      </Link>
    </li>
  );
};

export default Person;
