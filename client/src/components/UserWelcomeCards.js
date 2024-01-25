import React from 'react';
import Card from 'react-bootstrap/Card';

const UserWelcomeCards = () => {
  return (
    <div className="user-welcome-cards-block">
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>DB Schema</Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>API Endpoints</Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>API Statistics</Card.Title>

          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserWelcomeCards;
