import React from 'react'
import { Routes, Route, Link } from 'react-router';

export default function RecipeCard( { recipe } ) {
  return (
    <Link className='link-recipe' to={`recipe/${recipe.id}`}>
      <div className='recipe-card'>
        <div className='recipe-card-img'>
            <img src={recipe.mainImage} alt={recipe.title} />
        </div>
        <div className='recipe-card-text'>
            <h4>{recipe.title}</h4>
            <p>{recipe.tags}</p>
        </div>
      </div>
    </Link>
  )
}
