import React, { useState } from 'react';
import { Form, FormControl, Button } from "react-bootstrap"

const Search = (props) => {
    function handelSearch(e) {
        props.setSearch(e.target.value)
    }
    return (
        <Form inline style={{display: "flex",justifyContent: "center"}}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handelSearch}/>
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}

export default Search
