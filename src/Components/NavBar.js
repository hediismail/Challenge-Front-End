import React from 'react';
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Nav style={{ backgroundColor: "gold", fontSize: "125%" }}
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link>Hedix Cocktails</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/">Home</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to="/aboutus">About-us</Link>
                </Nav.Link>
            </Nav.Item>

        </Nav>

    )
}

export default NavBar
