import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardC() {
  return (
    <div className="card-deck">
        <div className="card">
    
      <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
      <div className="card-footer">
      <Button variant="primary">Find Out More</Button>
      </div>
   
    </div>
    </div>
    
  );
}

export default CardC;