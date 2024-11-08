import { useSelector } from "react-redux";
import Person from "../person";
import styles from './style.module.css'


const PeopleList = ({filter}) => {
const people = useSelector((state=> state.people.data))
console.log(people)



  return (
    <div>
      <ul className={styles.peopleList} >
        {people && people.results.map((person) => {
        return <Person key={person.id}  person={person} />
        })}
      </ul>

    </div>
  );
};

export default PeopleList;