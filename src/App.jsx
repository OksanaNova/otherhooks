import { useState, useEffect, useTransition } from 'react'
import './App.css'
import Comments from './Comments';
import ExampleUseId from './ExampleUseId';

const filterBySearch = (entities, search) => entities.filter(item => item.name.concat(item.body).includes(search))

function App() {

  const [isPending, startTransition] = useTransition();

  const [comments, setComments] = useState([]);

  const [userSearch, setUserSearch] = useState('');

  const handleSearch = (e) => {
    // console.log(e.target.value)
    startTransition(() => {
      setUserSearch(e.target.value)
    });
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

    <ExampleUseId />

    <input onChange={handleSearch} />

    {isPending && (
      <h1>Rendering...</h1>
    )}

    <Comments entities={filterBySearch(comments, userSearch)} />

  
  

    </>
  )
}

export default App
