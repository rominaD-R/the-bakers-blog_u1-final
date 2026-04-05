import React, { useState } from 'react'
import { Routes, Route } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import './Search.css'
import { recipeMockData } from '../data/recipes'

function Search() {

    const [results, setResults] = useState([...recipeMockData]);
    const [search, setSearch] = useState('');

    const returnResults = (e) => {
        console.log("SEARCHING:  " + search);
        let { value } = e.target;
        setSearch(value);
        let actualResults = recipeMockData.filter((recipe) => recipe.title.toLowerCase().includes(search) == true);
        if (value == '') {
            actualResults = recipeMockData;
        }
        setResults(actualResults);
    };

    return (
        <div className='text-cont search'>
            <h2>Find your perfect recipe</h2>
            <div>
                <input type="text" name="search" id="searchbar" placeholder='Search by title...' value={search} onChange={returnResults} />
            </div>
            <div className='search-bottom'>
                <div className='filters'>
                    FILTERS HERE
                </div>
                <div id='resultsDiv'>
                    {results.map((recipe) => <RecipeCard recipe={recipe} />)}
                </div>
            </div>
        </div>
    )
}

export default Search;
