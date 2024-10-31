import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPerson } from '../../store/slices/personSlice'

const PersonPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { info, episodes, name, photo, status, error } = useSelector((state) => state.person)

  useEffect(() => {
    dispatch(fetchPerson(id))
  }, [dispatch, id])

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'failed') return <div>Error: {error}</div>

  return (
    <div>
      <h1>{name}</h1>
      <img src={photo} alt={name} />
      <ul>
        {info?.map(({ title, data }) => (
          <li key={title}>
            <strong>{title}:</strong> {data}
          </li>
        ))}
      </ul>
      <h3>Episodes:</h3>
      <ul>
        {episodes?.map((episode) => (
          <li key={episode}>{episode}</li>
        ))}
      </ul>
    </div>
  )
}

export default PersonPage