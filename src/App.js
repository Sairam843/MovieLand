import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './movieCard';
const API_URL = 'http://www.omdbapi.com/?apikey=c032e2d7';

const App = () => {
  const [movies,setMovies]=useState([]);
  const [searchTerm, setSearchTerm]=useState('');
  useEffect(() => {
    searchMovies('Spiderman');
  }, []);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
   
    setMovies(data.Search);
    //console.log(data.Search);
  };

  

  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input 
        placeholder='search for movies' 
        value={searchTerm} 
        onChange={(e)=>setSearchTerm(e.target.value)} />
      <img
      src={SearchIcon}
      alt='search'
      onClick={(e)=>searchMovies(searchTerm)}
      />
      </div>
      {
      movies?.length>0
      ?(
      <div className='container'>
      {movies.map((movie)=>(
      <MovieCard 
     // key={index}
      movie={movie}/>
      ))}
    </div>
      ):(
        <div className='empty'>
          <h2>No Movies</h2> 
    </div>
      )}
      
    </div>
  );
};

export default App;
