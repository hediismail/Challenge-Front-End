import React from 'react'
import { Spinner } from 'react-bootstrap'
import Drink from './Drink'

const DrinksList = ({ search, drinks, loadDrinks }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: "2%", backgroundColor: "antiquewhite" }}>
            {loadDrinks ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                    drinks.drinks.filter((el) => el.strDrink.toLowerCase().includes(search.toLowerCase())).length > 0 ? drinks.drinks.filter((el) => el.strDrink.toLowerCase().includes(search.toLowerCase())).map((el) =>
                        <Drink drink={el} />) : <h2 style={{ display: '' }}>No Cocktails Matched Your Search criteria</h2>
                )}
        </div>
    )
}

export default DrinksList
