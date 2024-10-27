
import Person from "../person";

const PeopleList = ({ people }) => {


  return (
    <div>
      <ul>
        {people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
      
    </div>
  );
};

export default PeopleList;