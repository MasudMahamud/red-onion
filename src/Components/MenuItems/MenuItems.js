import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from "react-router-dom";


const style = {
    maxWidth: '300px',
    marginLeft: '100px',
    textAlign: 'center',
    marginTop: '40',
    marginBottom: '40px'

}

const MenuItems = ({ items }) => {

    return (
        <>
            {
                items.map((task) => {
                    const { id, title, description, imgUrl, price } = task;

                    return (
                        <div className="box" key={id}>
                            <CardGroup style={style}>
                                <Card style={{ border: 'none' }}>
                                    <Card.Img variant="top" src={imgUrl} />
                                    <Card.Body>
                                        <h6><Link to={"/item/" + id}>   {title} </Link> </h6>
                                        <small>{description}</small>
                                        <h4>$ {price}</h4>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Last updated</small>
                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        </div>
                    )
                })
            }
        </>
    );
};

export default MenuItems;