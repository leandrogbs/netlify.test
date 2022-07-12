import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/Nav';
import Characters from './components/Characters';
import Pagination from './components/Pagination'
import React, { useEffect, useState } from 'react'

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialurl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(e => console.log(e))
  }

  const onPrevious = () => {
    fetchCharacters(info.prev)
  }

  const onNext = () => {
    fetchCharacters(info.next)
  }

  useEffect(() => {
    fetchCharacters(initialurl)
  }, [])

  return (
    <div>
      <Nav brand="Rick and Morty App" />
      <div className='container mt-5'>
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </div>
  );
}

export default App;
