import React, { useState } from 'react'
import { motion, MotionConfig } from "motion/react"
import RecipeCard from '../components/RecipeCard';
import './Search.css'
import { recipeMockData } from '../data/recipes'

function Search() {

    const [results, setResults] = useState([...recipeMockData]);
    const [search, setSearch] = useState('');

    const returnResults = (e) => {
        let { value } = e.target;
        setSearch(value);
        let actualResults = recipeMockData.filter((recipe) => recipe.title.toLowerCase().includes(search.toLowerCase()) == true);
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
                    <MotionConfig transition={{ duration: 0.4, ease: "easeInOut" }}>
                        {results.map((recipe) => <RecipeCard recipe={recipe} />)}
                    </MotionConfig>
                </div>
            </div>
        </div>
    )
}

export default Search;
