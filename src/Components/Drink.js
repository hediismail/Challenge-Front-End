import React from 'react';
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

const Drink = ({ drink }) => {
    return (
        <Card style={{ width: '18rem', border: "5px blue solid", margin: "1%" }}>
            <Card.Img variant="top" src={drink.strDrinkThumb} />
            <Card.Body>
                <Card.Title style={{ color: "cornflowerblue" }}>{drink.strDrink}</Card.Title>
                <Card.Text>
                    {drink.strAlcoholic}
                </Card.Text>
                <Card.Text>
                    Category: {drink.strCategory}
                </Card.Text>
                <Link to={`/detail/${drink.idDrink}`}>
                    <Button variant="primary">
                        Detail
                </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Drink
