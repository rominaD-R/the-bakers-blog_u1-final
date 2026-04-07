import React from 'react'
import { Routes, Route, Link } from 'react-router';
import Tag from './Tag';

export default function RecipeCard( { recipe } ) {
  return (
    <div className='recipe-card'>
      <Link className='link-recipe' to={`/recipe/${recipe.id}`}>
        <div className='recipe-card-img'>
            <img src={recipe.mainImage} alt={recipe.title} />
        </div>
      </Link>
        <div className='recipe-card-text'>
          <Link className='link-recipe' to={`/recipe/${recipe.id}`}>
              <h4>{recipe.title}</h4>
          </Link>
            {recipe.tags.map((tag) => <Tag tag={tag} />)}
        </div>
    </div>
  )
}
