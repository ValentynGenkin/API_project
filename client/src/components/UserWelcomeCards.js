import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const UserWelcomeCards = () => {
  return (
    <div className="user-welcome-cards-block">
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>DB Schema</Card.Title>

          <Card.Text>
            Define the structure of your database. Create a schema to store data
            by selecting necessary fields and their types.
          </Card.Text>
          <Card.Link as={Link} to={'schema'}>
            DB Schema
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>API Endpoints</Card.Title>

          <Card.Text>
            Manage access to your API through entry points, including the
            integration of API keys.
          </Card.Text>
          <Card.Link as={Link} to={'endpoint'}>
            API Endpoints
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }}>
        <Card.Body>
          <Card.Title>API Statistics</Card.Title>

          <Card.Text>Track the statistics of your API</Card.Text>
          <Card.Link as={Link} to={'statistics'}>
            API Statistics
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserWelcomeCards;
