import Person from "../person";

const PeopleList = ({ people }) => {
  return (
    <div>
      <ul>
        {people.map((person) => {
          return <Person key={person.id} person={person} />;
        })}
      </ul>
    </div>
  );
};

export default PeopleList;
