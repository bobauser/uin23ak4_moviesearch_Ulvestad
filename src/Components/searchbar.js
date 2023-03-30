import { SearchQuery } from './main.js';
import { useState, useRef } from 'react'
import { FindMovie } from "./main";


export default function SearchBar() {
    
    const [searchResults, setSearchResults] = useState([]);
    const [searchResultsVisible, setSearchResultsVisible] = useState(false);
    const button = useRef(null);

    const handleSearch = async (event) => {
        const searchText = event.target.value;
        if (searchText.length >= 3) {
            const searchlist = await SearchQuery(searchText);
            console.log(searchlist);
            if (searchlist) {
                setSearchResults(searchlist);
            }        
        }
    }

    function handleSearchInputBlur() {
        // Use setTimeout to wait 200ms before hiding the search results
        setTimeout(() => {
            setSearchResultsVisible(false);
        }, 200);
    }

    function handleSearchInputFocus() {
        setSearchResultsVisible(true);
    }
    

    function buttonEffect() {
        const effect = createEffect();
        setTimeout(() => {
            button.current.removeChild(effect);
        }, 600);
    }

    function createEffect() {
        const effect = document.createElement('div');
        effect.className = 'effect';
        button.current.appendChild(effect);
        return effect;
    }
    
    return (
        <>
        <div className="search-container">
            <input type="text" 
                id="search-input" 
                className="search-input" 
                placeholder="Search..." 
                onChange={handleSearch} 
                onBlur={handleSearchInputBlur}
                onFocus={handleSearchInputFocus}/>

            <button id="search-button" className="search-button" onClick={buttonEffect} ref={button}>
            <i className="fa fa-search fa-lg"></i>
                <span></span>
            </button>

            <div className="circle hidden gray-circle"></div>
            <div className="circle hidden white-circle"></div>

        </div>

        <div className={`search-container2 ${searchResultsVisible ? "" : "hidden"}`}>
            <ul id="search-results" className="search-results">
                {searchResults.map((item) => (
                    <li id={item.imdbID} className="liResult" onClick={() => FindMovie(item.imdbID)}>
                        <span className="title">{item.Title}</span>
                        <span className="year">{item.Year}</span>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
