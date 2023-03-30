export default function MovieCard({title, releaseYear, imgSrc}) {
    return (
      <div className="movie-card">
        <img src={imgSrc} alt={`Poster for ${title}`} />
        <div className="movie-details">
          <h2>{title}</h2>
          <p>Released in {releaseYear}</p>
        </div>
      </div>
    );
  }

export function SearchMovieList({imdbID, title, year, onMovieClick}) {
  
      <li id={imdbID} className="liResult" onClick={onMovieClick}>
          <span className="title">{title}</span>
          <span className="year">{year}</span>
      </li>
}