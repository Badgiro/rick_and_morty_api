import { characters } from '../../constants'

const Pagination = ({ info }) => {
  const ratio = info && info.count && Math.ceil(info.count / 8)
  const pages = ratio && Array.from(Array(ratio + 1).keys())

  if (pages) pages.shift()

  const multipleCharacters = async (url, characters) => {
    const charsPerPage = await fetch(url + characters)
    const data = await charsPerPage.json()
    console.log(data)
  }

  const handleClick = (currentPage) => {
    const listOfIds = (currentPage - 1) * 8 + 1;

    const list = [];

    for (let i = 0; i < 8; i++) {
      list.push(i + listOfIds);
    }
    
    multipleCharacters(characters + '/', list);
  }

  return (
    <div>
      <ul>
        {pages &&
          pages.map((item) => {
            return (
              <span onClick={() => handleClick(item)} key={item}>
                {item}
              </span>
            )
          })}
      </ul>
    </div>
  )
}

export default Pagination
