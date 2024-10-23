import { useEffect } from "react"
import { Link } from "react-router-dom"


const PeopleList = ({people}) => {

  console.log(people)
  useEffect(()=> {
  },[people])
  return (
    <div>
    <ul>
     {people.map(person => {
       return <li key={person.id}>
        <Link to={`/character/${person.id}`}>
        <img src={person.image} alt={person.name} />
         <h3>{person.name}</h3>
         <p>{person.species}</p>
        </Link>
        

       </li>
     })}
    </ul>
     
   </div>
  )
}

export default PeopleList
