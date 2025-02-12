import { useState, useEffect } from 'react'
import './App.css'
import Comments from './Comments';

const filterBySearch = (entities, search) => entities.filter(item => item.name.concat(item.body).includes(search))

function App() {

  const [comments, setComments] = useState([]);

  const [userSearch, setUserSearch] = useState('');

  const handleSearch = (e) => {
    // console.log(e.target.value)
    setUserSearch(e.target.value)
  }

  useEffect(() => {
    const getComment = async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
      // console.log(data);
      setComments(data);
    }
    getComment();
  }, [])


  return (
    <>

    <input onChange={handleSearch} />

    <Comments entities={filterBySearch(comments, userSearch)} />

    </>
  )
}

export default App
