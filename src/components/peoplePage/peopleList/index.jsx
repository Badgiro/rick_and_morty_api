import { useSelector } from "react-redux";
import Person from "../person";
import styles from './style.module.css'


const PeopleList = ({filter}) => {
const people = useSelector((state=> state.people.multipleCharacters))
console.log(people)



  return (
    <div>
      <ul className={styles.peopleList} >
        {people && people.filter(person => person.name.includes(filter)).map((person) => (
          <Person key={person.id}  person={person} />
        ))}
      </ul>

    </div>
  );
};

export default PeopleList;