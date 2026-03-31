import React from 'react'
import RecipeCard from './RecipeCard'
import './css/CardsRows.css'

export default function CardsRow( {heading} ) {
  return (
    <div className='recipe-list'>
        <h2>{heading}</h2>
        <div className='cards-row'>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    </div>
  )
}
