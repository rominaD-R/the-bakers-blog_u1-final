import React, { useState } from 'react'
import { useParams, Link } from 'react-router';
import { recipeMockData } from '../data/recipes'
import './IndividualRecipe.css'

export default function IndividualRecipe() {

    const { id } = useParams();
    let currentRecipe = recipeMockData.filter((item) => item.id == id);
    currentRecipe = currentRecipe[0];

    console.log(id);
    console.log(currentRecipe);

    const [commentData, setCommentData] = useState([...currentRecipe.comments]);


    const addComment = (e) => {
        e.preventDefault();
        // const { name, value } = e.target; 
        const currentComment = document.getElementById("commentText").value;
        console.log("Comment added:  " + currentComment);
        setCommentData([...commentData, currentComment]);
        console.log(commentData);
    }

    return (
        <div className='text-cont individual-recipe-page'>
            <h2>{currentRecipe.title}</h2>
            <div className='main-img'>
                <img src={currentRecipe.mainImage} alt={currentRecipe.title} />
            </div>
            <div className='two-col'>
                <div>
                    <h4>Ingredients</h4>
                    <ul>
                        {currentRecipe.ingredients.map((item) => <li>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h4>Utensils</h4>
                    <ul>
                        {currentRecipe.utensils.map((item) => <li>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div>
                <h4>Steps</h4>
                <ol>
                    {currentRecipe.steps.map((item) => <li>{item}</li>)}
                </ol>
            </div>
            <div className='comments-section'>
                <hr />
                <h4>Comments</h4>
                {commentData.map((comment) => <div className='comment'>{comment}</div>)}
                <form id='commentForm' action="">
                    <b>Add your comment!</b>
                    <div>
                        <textarea name="comment" id="commentText"></textarea>
                        <button onClick={addComment} id='submitComment'>Post Comment</button>
                    </div>                    
                </form>
            </div>
        </div>
    )
}
