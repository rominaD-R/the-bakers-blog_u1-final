import React from 'react'

export default function RecipeCard() {
  return (
    <div className='recipe-card'>
        <div className='recipe-card-img'>
            <img src="https://www.allrecipes.com/thmb/m7IoQUlfO4p1OYm-jamwwJjpY_Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/228553-moist-chocolate-muffins-DDMFS-4x3-a9f73a46938547c99d921613dc167741.jpg" alt="Chocolate Muffin" />
        </div>
        <div className='recipe-card-text'>
            <h4>Recipe Name</h4>
            <p>Tags</p>
        </div>
    </div>
  )
}
