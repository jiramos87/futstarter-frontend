import React from "react";

const PlayerCard =() => {
    return(
        <div>
                <Card style={{ width: '6rem' }}>
            <Card.Img variant="top" src="https://cdn.futbin.com/content/fifa22/img/players/158023.png?v=23" />
            <Card.Body>
                <Card.Title>Messi</Card.Title>
            </Card.Body>
            <ListGroup horizontal>
                <ListGroup.Item>99</ListGroup.Item>
                <ListGroup.Item>99</ListGroup.Item>
                <ListGroup.Item>99</ListGroup.Item>
                <ListGroup.Item>99</ListGroup.Item>
                <ListGroup.Item>99</ListGroup.Item>
                <ListGroup.Item>99</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}
export default PlayerCard;