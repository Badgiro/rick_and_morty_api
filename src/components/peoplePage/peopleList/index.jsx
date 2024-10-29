import { useSelector } from "react-redux";
import Person from "../person";

const PeopleList = () => {
const people = useSelector((state=> state.people.multipleCharacters))

console.log(people)
  return (
    <div>
      <ul>
        {people && people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
      
    </div>
  );
};

export default PeopleList;