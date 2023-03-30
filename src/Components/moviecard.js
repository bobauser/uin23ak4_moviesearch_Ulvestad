import { FindMovie } from "./main";

export default function MovieCard({title, releaseYear, imgSrc, plot}) {
  /*<p className="hidden">${plot}</p> */
  if (imgSrc == null) {
    imgSrc = "https://picsum.photos/200/300"
  }
    return (
      <article className="movie-card">        
        <figure>
          <img className="movie-poster" src={imgSrc} alt={`Poster for ${title}`} />
          
        </figure>
        <div className="movie-details">
          <h2>{title}</h2>
          <p>Released in {releaseYear}</p>
        </div>
      </article>
    );
  }

export function SearchMovieList({imdbID, title, year}) { //onMovieClick
  return (
    <li id={imdbID} className="liResult">
        <span className="title">{title}</span>
        <span className="year">{year}</span>
    </li>
  )
  // onClick={() => FindMovie(imdbID)}    


  /*
      <li id={imdbID} className="liResult" /**onClick={onMovieClick}>
          <span className="title">{title}</span>
          <span className="year">{year}</span>
      </li>
      */
}