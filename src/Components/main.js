import MovieCard from "./moviecard"
import {useEffect, useState} from 'react'
import searchList from './searches';
import SearchHandeler from "./searchhandler";
import { dritt } from "./state";


var apikey = 'apikey=941b22ac'


export async function SearchQuery(searchQuery) { 
  try {
    const response = await fetch(`http://www.omdbapi.com/?type=movie&s=${searchQuery}&r=json&${apikey}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch movies for "${searchQuery}"`);
    }
    const responseData = await response.text();
    const jsonData = responseData.substring(responseData.indexOf('{'), responseData.lastIndexOf('}') + 1);
    const parsedData = JSON.parse(jsonData);
    //console.log(response);
    //setMovies(movies);
    console.log(parsedData);
    return parsedData.Search;
  } catch (error) {
    console.log(error);
    return [];
  }
}


export default function MainList() {
    var apiLink = "http://www.omdbapi.com/?apikey=" + apikey + "&"
    const [movies, setMovies] = useState([])
    const [selectedMovie, setSelectedMovie] = useState([]);
    
    /*function UpdateMovie() {
      
      selectedMovie = element;
    }  */  

    const getMovies = async (searchQuery) => {
        try {
          const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&r=json&${apikey}`); //type=movie&
          if (!response.ok) {
            throw new Error(`Failed to fetch movies for "${searchQuery}"`);
          }
          const responseData = await response.text();
          const jsonData = responseData.substring(responseData.indexOf('{'), responseData.lastIndexOf('}') + 1);
          const parsedData = JSON.parse(jsonData);
          console.log(parsedData);
          return parsedData.Search;
        } catch (error) {
          console.log(error);
          return [];
        }
      };
      
      const fetchMovies = async () => {
        const allMovies = [];
        /**for (const movie of searchList) {
          const movies = await getMovies(movie.search);
          allMovies.push(...movies);
        } */
        const movies = await getMovies("James Bond");
        allMovies.push(... movies)
        console.log(allMovies);
        setMovies(allMovies);
      };


      useEffect(() => {
        fetchMovies(setMovies);
            //getMovies()
            fetchMovies() 
      }, []);

      
    return (
        <>
        <h1>title</h1>

        
        <main>

        <SearchHandeler children={selectedMovie} />

          {movies?.map((item) => (
              <MovieCard title={item.Title} releaseYear={item.Year} imgSrc={item.Poster} />
          ))}
        </main>
        </>
    )
    
}


export async function FindMovie(imdbID) {
  console.log(imdbID + " yes")
  const movie = await fetch(`http://www.omdbapi.com/?i=${imdbID}&${apikey}`)
  console.log(movie)
  let element = (
    <div className="selected-movie">
        <h2>MEGA MIND</h2>
    </div>
  )
  dritt()
}