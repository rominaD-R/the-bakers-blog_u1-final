import React from 'react'
import { useParams, Link } from 'react-router';
import { recipeMockData } from '../data/recipes'

export default function IndividualRecipe() {

    const { id } = useParams();
    let currentRecipe = recipeMockData.filter((item) => item.id == id);
    currentRecipe = currentRecipe[0];

    console.log(id);
    console.log(currentRecipe);

    return (
        <div>
            <h2>{currentRecipe.title}</h2>
        </div>
    )
}
