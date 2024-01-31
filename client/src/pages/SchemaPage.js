import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../styles/schemaPage.css';

const SchemaPage = () => {
  return (
    <Container className="schema-page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <pre>
          {`
          JSON example:
          {
            "name": {
              "type": "String",
              "required": true,
              "minlength": [6]
            },
            "age": {
              "type": "Number",
              "required": true,
              "min": 0,
              "max": 99
            },
            "address": {
              "city": {
                "type": "String",
                "required": false,
                "default": null
              },
              "country": {
                "type": "String",
                "required": false,
                "default": null
              }
            },
            "phone": {
              "type": "Number",
              "minlength": [6],
              "maxlength": [15],
              "unique": true
            },
            "hobbies": {
              "type": ["String"]
            },
            "friends": [
              {
                "name": "String",
                "age": "Number"
              }
            ],
            "createdAt": {
              "type": "Date",
              "default": "new Date()"
            }
          }
      `}
        </pre>

        <pre>
          {`
  Description:

name:
  type: String - Specifies that the 'name' field should contain strings.
  required: true - Makes the 'name' field mandatory for filling.
  minlength: [6] - Sets the minimum length of the 'name' field to 6 characters.

age:
  type: Number - Specifies that the 'age' field should contain numbers.
  required: true - Makes the 'age' field mandatory for filling.
  min: 0 - Sets the minimum value of the 'age' field to 0.
  max: 99 - Sets the maximum value of the 'age' field to 99.

address:
  city:
    type: String - Specifies that the 'city' subfield in the 'address' field should contain strings.
    required: false - Indicates that the 'city' subfield is not mandatory for filling.
    default: null - Sets the default value of the 'city' subfield to null.

  country:
    type: String - Specifies that the 'country' subfield in the 'address' field should contain strings.
    required: false - Indicates that the 'country' subfield is not mandatory for filling.
    default: null - Sets the default value of the 'country' subfield to null.


phone:
  type: Number - Specifies that the 'phone' field should contain numbers.
  minlength: [6] - Sets the minimum length of the 'phone' field to 6 digits.
  maxlength: [15] - Sets the maximum length of the 'phone' field to 15 digits.
  unique: true - Specifies that the 'phone' field must be unique in the collection.

hobbies:
  type: String - Specifies that the 'hobbies' field should be an array of strings.

friends:
  name:
      type: String - Specifies that the 'name' field in the 'friends' array should contain strings.
    age:
      type: Number - Specifies that the 'age' field in the 'friends' array should contain numbers.

createdAt:
  type: Date - Specifies that the 'createdAt' field should contain a date.
  default: new Date() - Sets the default value of the 'createdAt' field to the current date.

`}
        </pre>
      </div>

      <FloatingLabel
        controlId="floatingTextarea2"
        label="Object structure in JSON format"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '350px', maxWidth: '800px' }}
        />
      </FloatingLabel>
      <Button variant="warning">JSON Check</Button>
      <Button variant="secondary">Save Schema</Button>
    </Container>
  );
};

export default SchemaPage;
