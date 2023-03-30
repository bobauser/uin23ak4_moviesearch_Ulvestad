import { SearchQuery } from './searchresults.js';
import { useState, useRef } from 'react'
import { FindMovie } from "./searchresults";
import { SearchResultCard } from "./moviecard"
import {SetResults, SetBlur} from "./mapsearches"


export default function SearchBar() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchResultsVisible, setSearchResultsVisible] = useState(false); 
    const button = useRef(null);

    const handleSearch = async (event) => {
        const searchText = event.target.value;
        if (searchText.length >= 3) {
            const searchlist = await SearchQuery(searchText);
            //console.log(searchlist);
            if (searchlist) {
                //SetResults(searchlist);
                setSearchResults(searchlist)
            }        
        }
        /* else {
            const elements = [<li className="liResult"><span className="title">No Results</span></li>, <li className="liResult"><span className="title">Try Searching something else</span></li>]
            setSearchResults(elements)
        } */
    }

    function handleSearchInputBlur() {
        // Use setTimeout to wait 200ms before hiding the search results
        setTimeout(() => {
            setSearchResultsVisible(false)
            //SetBlur(false);
        }, 200);
    }

    function handleSearchInputFocus() {
        setSearchResultsVisible(true)
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
    /** */
    return (
        <>
        <header>
        <section className='coco'>
            <h1>Welcome</h1>
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
        </section>     
        
            <div className={`search-container2 ${searchResultsVisible ? "" : "hidden"}`}>
                <ul id="search-results" className="search-results">
                    {searchResults.map((item) => (
                        <SearchResultCard key={item.imdbID} imdbID={item.imdbID} title={item.Title} year={item.Year} img={item.Poster} />
                    ))}
                </ul>
            </div>            
        </header>
        </>
    )
}
