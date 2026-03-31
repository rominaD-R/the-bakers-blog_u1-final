import { Routes, Route } from 'react-router';
import FeaturedHero from '../components/FeaturedHero';
import CardsRow from '../components/CardsRow';

function Home() {

    return (
        <div>
            <FeaturedHero />
            <div className='text-cont'>
                <h2>All Time Favorites</h2>
                <CardsRow />
            </div>
        </div>
    )
}

export default Home;
