import { useState } from 'react';
import { SearchMovieList } from './moviecard';

export default function MapS() {
    /**
    const [searchResults, setSearchResults] = useState([]);
    const [searchResultsVisible, setSearchResultsVisible] = useState(false); */
    const { searchResults, setSearchResults, searchResultsVisible, setSearchResultsVisible } = useSearchResults();

    return (
        <div className={`search-container2 ${searchResultsVisible ? "" : "hidden"}`}>
            <ul id="search-results" className="search-results">
                {searchResults.map((item) => (
                    <SearchMovieList imdbID={item.imdbID} title={item.Title} year={item.Year} />
                ))}
            </ul>
        </div>
    )
}

export const useSearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchResultsVisible, setSearchResultsVisible] = useState(false);
  
    return { searchResults, setSearchResults, searchResultsVisible, setSearchResultsVisible };
  };

export function SetResults(results) {
    const { searchResults, setSearchResults, searchResultsVisible, setSearchResultsVisible } = useSearchResults();
    setSearchResults(results)
}
export function SetBlur(blur) {
    const { searchResults, setSearchResults, searchResultsVisible, setSearchResultsVisible } = useSearchResults();
    setSearchResultsVisible(blur)
}