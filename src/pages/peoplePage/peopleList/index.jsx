import { useEffect } from "react"
import { useSelector } from "react-redux"

const PeopleList = () => {
  const peopleList = useSelector(state => {
    const initial = state.people.data
    return initial
  })
  
  useEffect(()=> {
console.log(peopleList)
  },[peopleList])
  return (
    <div>
      
    </div>
  )
}

export default PeopleList
