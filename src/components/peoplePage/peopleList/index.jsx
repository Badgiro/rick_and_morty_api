import { useSelector } from "react-redux";
import Person from "../person";
import styles from './style.module.css'


const PeopleList = () => {
const people = useSelector((state=> state.people.multipleCharacters))

console.log(people)
  return (
    <div>
      <ul className={styles.peopleList} >
        {people && people.map((person) => (
          <Person key={person.id}  person={person} />
        ))}
      </ul>

    </div>
  );
};

export default PeopleList;