import React, { useState } from 'react'
import { Routes, Route } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import './Search.css'
import { recipeMockData } from '../data/recipes'

function Search() {

    const [results, setResults] = useState([...recipeMockData]);

    return (
        <div className='text-cont'>
            <h2>Search Page</h2>
            <div>
                <input type="text" name="search" id="searchbar" placeholder='Search by title...' />
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
