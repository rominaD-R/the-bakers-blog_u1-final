import React from 'react'
import { Routes, Route, Link } from 'react-router';

export default function Tag( { tag } ) {
  return (
    <Link to={`types`}>
        <button className='tag-btn'>
            {tag}
        </button>
    </Link>
  )
}
