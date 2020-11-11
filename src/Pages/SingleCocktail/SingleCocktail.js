import React, { useEffect, useState } from 'react';
import Axios from "axios";
import { Spinner } from 'react-bootstrap';
import { Card, ListGroupItem, ListGroup } from "react-bootstrap"

const SingleCocktail = (props) => {
    const id = props.match.params.id;
    const [detail, setDetail] = useState([]);
    const [loadDetail, setLoadDetail] = useState(true)
    const getDetail = () => {
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then((res) => {
                setDetail(res.data);
                setLoadDetail(false);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getDetail();
    }, []);
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {console.log(detail.drinks)}
            {loadDetail ? (
                <Spinner animation="border" variant="primary" />
            ) :
                <Card style={{ width: '18rem', border: "5px blue solid", margin: "2%" }}>
                    <Card.Img variant="top" src={detail.drinks[0].strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{detail.drinks[0].strDrink}</Card.Title>
                        <Card.Text>
                            {detail.drinks[0].strInstructions}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        {detail.drinks[0].strIngredient1 ? <ListGroupItem>{detail.drinks[0].strIngredient1}</ListGroupItem> : null}
                        {detail.drinks[0].strIngredient2 ? <ListGroupItem>{detail.drinks[0].strIngredient2}</ListGroupItem> : null}
                        {detail.drinks[0].strIngredient3 ? <ListGroupItem>{detail.drinks[0].strIngredient3} </ListGroupItem> : null}
                        {detail.drinks[0].strIngredient4 ? <ListGroupItem>{detail.drinks[0].strIngredient4} </ListGroupItem> : null}
                        {detail.drinks[0].strIngredient5 ? <ListGroupItem>{detail.drinks[0].strIngredient5} </ListGroupItem> : null}
                        {detail.drinks[0].strIngredient6 ? <ListGroupItem>{detail.drinks[0].strIngredient6} </ListGroupItem> : null}
                    </ListGroup>
                </Card>
            }
        </div>
    )
}

export default SingleCocktail
