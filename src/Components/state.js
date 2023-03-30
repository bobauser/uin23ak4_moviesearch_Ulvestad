import { useState } from 'react';


export const useMovies = () => {
  const [movies, setMovies] = useState([]);

  return { movies, setMovies };
};

export const useSelectedMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return { selectedMovie, setSelectedMovie };
};

export function ChangeSelectedMovie(element, setSelectedMovie) {
    console.log(element)
    setSelectedMovie(element)
}
