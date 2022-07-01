import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import SearchView from './components/SearchView';
import { useState, useEffect } from 'react';
const api_key = "YOUR_API_KEY";



function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  
  useEffect(() => {
    if(searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchText}&page=1&include_adult=false}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
  }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchResults={setSearchText}/>
      <SearchView keyword={searchText} searchResults={searchResults} />
      
    </div>
  );
}

export default App;
