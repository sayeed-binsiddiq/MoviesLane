import {useEffect,useState} from 'react';
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
const Api_url='https://www.omdbapi.com/?i=tt3896198&apikey=f005186d';

const App =() => { 
  const [movies, setMovies] =useState([]);
  const [searchTerm, setsearchTerm]= useState('');
      const searchMovies= async (title) => {
   const response = await fetch (`${Api_url}&s=${title}`);
   const data= await response.json ();
    setMovies (data.Search);
  }
    useEffect (() => {
      searchMovies ('spiderman');
    },[]
  );

 return (
  <div className='app'>
    <h1>MovieLand</h1>
    <div className= 'search'>
      <input placeholder="Search for movies"
      value={searchTerm}
      onChange={(e)=> setsearchTerm(e.target.value)}/>
      <img src = {SearchIcon}
      alt="search"
      onClick={() => searchMovies(searchTerm)}
      />
      </div>
{movies?.length>0
 ? (
    <div className ="container">
     {movies.map((movie)=>(
      <MovieCard movie={movie}/>
   ))}
</div>
) : (
<div className="empty">
    <h2>no movies found</h2>
</div>
    )}
  </div>
 );
  }

export default App;