import FeaturedHero from '../components/FeaturedHero';
import CardsRow from '../components/CardsRow';
import { recipeMockData } from '../data/recipes'

function Home() {

    const allTime = recipeMockData.slice(0, 4);         // All time Favorites Recipes which are the first 4 of the original list
    const newRecipes = recipeMockData.slice(4, 8);      // "New" Recipes which are the last 4 of the original list

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
