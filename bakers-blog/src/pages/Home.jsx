import { Routes, Route } from 'react-router';
import FeaturedHero from '../components/FeaturedHero';
import CardsRow from '../components/CardsRow';
import { recipeMockData } from '../data/recipes'

function Home() {

    const allTime = recipeMockData.slice(0, 4);
    const newRecipes = recipeMockData.slice(4, 8);

    return (
        <div>
            <FeaturedHero />
            <div className='text-cont'>
                <CardsRow heading={"All Time Favorites"} list={allTime} />
                <CardsRow heading={"New Recipes"} list={newRecipes} />
            </div>
        </div>
    )
}

export default Home;
