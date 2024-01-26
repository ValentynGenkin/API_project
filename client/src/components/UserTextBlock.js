import React from 'react';

const UserTextBlock = () => {
  return (
    <div className="user-text-block">
      <h5>Just 5 steps to get your new API:</h5>
      <br />
      <h6>1. Choose a Schema Name:</h6>
      <p>
        • Come up with a unique and descriptive name for your data schema. This
        will serve as the foundation for your API.
      </p>

      <h6>2. Build the Schema in the Constructor:</h6>
      <p>
        • Use the constructor to define the data structure of your schema.
        Select the necessary fields and their data types.
      </p>

      <h6>3. Name Your Endpoints:</h6>
      <p>• Assign name to your CRUD endpoints.</p>

      <h6>4. Use the Generated Endpoints:</h6>
      <p>
        • Interact with your application using the provided ready-to-use
        endpoints for managing data in your MongoDB database.
      </p>

      <h6>5. Done!</h6>
      <p>
        • Now you have your own API with the defined schema and endpoints for
        data management in your MongoDB database.
      </p>
    </div>
  );
};

export default UserTextBlock;
