import { Routes, Route } from 'react-router';
import FeaturedHero from '../components/FeaturedHero';
import CardsRow from '../components/CardsRow';

function Home() {

    return (
        <div>
            <FeaturedHero />
            <div className='text-cont'>
                <CardsRow heading={"All Time Favorites"}/>
                <CardsRow heading={"New Recipes"} />
            </div>
        </div>
    )
}

export default Home;
