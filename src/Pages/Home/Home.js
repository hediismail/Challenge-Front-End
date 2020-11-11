import React from 'react'
import DrinksList from '../../Components/DrinksList';

const Home = ({drinks, loadDrinks,search}) => {
    return (
        <div>
            <DrinksList search={search} drinks={drinks} loadDrinks={loadDrinks} />
        </div>
    )
}

export default Home
