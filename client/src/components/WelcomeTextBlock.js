import React from 'react';

const WelcomeTextBlock = () => {
  return (
    <div>
      <h3>Welcome to Your Personal API Generator!</h3>
      <p>
        This tool allows you to effortlessly create your own API. Simply follow
        a few steps to set up your MongoDB schema and define standard endpoints
        for basic CRUD operations (Create, Read, Update, Delete).
      </p>
      <p>
        1. <strong>Create MongoDB Schema:</strong> Define the data structure for
        your API by selecting the necessary fields. Our tool will automatically
        generate a ready-to-use MongoDB schema for you.
      </p>
      <p>
        2. <strong>Define Standard CRUD Endpoints:</strong> You have four
        standard endpoints for basic operations:
      </p>
      <ul>
        <li>
          <strong>Create:</strong> Add new data to your database.
        </li>
        <li>
          <strong>Read:</strong> Retrieve data from the database for viewing or
          using in your application.
        </li>
        <li>
          <strong>Update:</strong> Modify existing data in the database
          according to your needs.
        </li>
        <li>
          <strong>Delete:</strong> Remove data from the database that you no
          longer need.
        </li>
      </ul>
      <p>
        3. <strong>Integrate Your API:</strong> Get the generated generated
        endpoints and easily integrate it into your application. Your API is now
        ready to use with four standard CRUD endpoints.
      </p>
      <p>
        Thanks to this tool, creating, managing, and maintaining your API
        becomes a straightforward and efficient task. Enjoy the benefits of your
        new API!
      </p>
    </div>
  );
};

export default WelcomeTextBlock;
