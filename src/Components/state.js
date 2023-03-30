import { useState } from 'react';

export const useSearchResults = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsVisible, setSearchResultsVisible] = useState(false);

  return { searchResults, setSearchResults, searchResultsVisible, setSearchResultsVisible };
};

export const useMovies = () => {
  const [movies, setMovies] = useState([]);

  return { movies, setMovies };
};

export const useSelectedMovie = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return { selectedMovie, setSelectedMovie };
};

export function dritt() {
    console.log("kuk")
}
