import React from 'react'

export default function RecipeCard( {recipe} ) {
  return (
    <div className='recipe-card'>
        <div className='recipe-card-img'>
            <img src={recipe.mainImage} alt="Chocolate Muffin" />
        </div>
        <div className='recipe-card-text'>
            <h4>{recipe.title}</h4>
            <p>{recipe.tags}</p>
        </div>
    </div>
  )
}
