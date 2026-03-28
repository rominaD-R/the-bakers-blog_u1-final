import React from 'react'
import './css/FeaturedHero.css'

export default function FeaturedHero() {
  return (
    <>
        <div id='featuredHero'>
            <div className='text-feature'>
                <h2>Featured Recipe!</h2>
                <h4>About the recipe:</h4>
                <p>Intro text.</p>
                <button>Read More</button>
            </div>
        </div>
    </>
  )
}
