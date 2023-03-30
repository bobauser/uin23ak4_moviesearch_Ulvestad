import MovieCard from "./moviecard"
import {useEffect, useState} from 'react'
import SearchHandeler from "./searchhandler";
import { ChangeSelectedMovie } from "./state";
import { useSelectedMovie } from './state';
import SearchBar from "./searchbar";


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
    const { selectedMovie, setSelectedMovie } = useSelectedMovie();

    
    /*function UpdateMovie() {
      
      selectedMovie = element;
    }  */  

    const getMovies = async (searchQuery) => {
        try {
          //const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&r=json&${apikey}`); //type=movie&
          const response = await fetch(`http://www.omdbapi.com/?type=movie&s=${searchQuery}&r=json&${apikey}`);
          //Fjern kommentaren på øverste API callet og få bare filmer
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

      /** 
      let thing = movies[0]
      console.log(thing)
      let visibleElement = (
        <MovieCard title={thing.Title} releaseYear={thing.Year} imgSrc={thing.Poster} />
      )*/
      /*

        <article id="selected-movie" className="movie-empty">
wqfqfqwfqw
        </article> */
    return (
        <>
        <SearchBar/>
        <main>
        <SearchHandeler children={null} />
          <section>
            {movies?.map((item) => (
                <MovieCard key={item.imdbID} title={item.Title} releaseYear={item.Year} imgSrc={item.Poster}/>
            ))}
          </section>
        </main>
        </>
    )
    
}


export async function FindMovie(imdbID) {
  const { selectedMovie, setSelectedMovie } = useSelectedMovie();
  console.log(imdbID + " yes")
  const movie = await fetch(`http://www.omdbapi.com/?i=${imdbID}&${apikey}`)
  const jsonData = await movie.json();
  console.log(jsonData)
  let element = (
    <div className="selected-movie">
        <h2>MEGA MIND</h2>
    </div>
  )
  ChangeSelectedMovie(element, setSelectedMovie)
}