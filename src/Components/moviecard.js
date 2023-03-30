import { FindMovie } from "./searchresults";

export default function MovieCard({title, releaseYear, imgSrc, plot}) {
  /*<p className="hidden">${plot}</p> */
  if (imgSrc === "N/A") {
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

export function SearchResultCard({imdbID, title, year, img}) { //onMovieClick
  if (img === "N/A") {
    img = "https://picsum.photos/200/300"
  }
  return (
    <li id={imdbID} className="liResult" style={{backgroundImage: `url(${img})`}}>
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