
# User Management System in Node.js

This is a User Management System implemented in Node.js that allows users to perform CRUD (Create, Read, Update, Delete) operations on a user table. It includes proper input validation and documentation.

## Setup

1. Ensure you have Node.js installed on your system.
2. Clone this repository using the following command:
   ```
   git clone <repository-url>
   ```
3. Install dependencies by running:
   ```
   npm install
   ```

## Usage

### Starting the Server

To start the server, run the following command:
```
npm start
```

The server will start listening on port 3000 by default.

### Performing CRUD Operations

#### Create a User

To create a new user, send a POST request to `/users` with the following JSON data:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "age": 25,
  "gender": "Male",
  "address": "123 Main St",
  "mobileNo": "1234567890"
}
```

Example using cURL:
```
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
        "name": "John Doe",
        "email": "john.doe@example.com",
        "age": 25,
        "gender": "Male",
        "address": "123 Main St",
        "mobileNo": "1234567890"
      }' \
  http://localhost:3000/users
```

#### Read a User

To retrieve a user by ID, send a GET request to `/users/:userId`.

Example using cURL:
```
curl http://localhost:3000/users/123
```

#### Update a User

To update an existing user, send a PUT request to `/users/:userId` with the updated user data in the request body.

Example using cURL:
```
curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Jane Smith",
        "age": 30
      }' \
  http://localhost:3000/users/123
```

#### Delete a User

To delete a user by ID, send a DELETE request to `/users/:userId`.

Example using cURL:
```
curl -X DELETE http://localhost:3000/users/123
```

## User Table Structure

The user table contains the following fields:
- Name (String, max length: 50)
- Email (String, valid email address)
- Age (Number, between 18 and 100)
- Gender (String, 'Male', 'Female', or 'Other')
- Address (String, max length: 100)
- MobileNo (String, 10-digit number)

## Validation Rules

- Name: Must be a string with a maximum length of 50 characters.
- Email: Must be a valid email address.
- Age: Must be a number between 18 and 100.
- Gender: Must be 'Male', 'Female', or 'Other'.
- Address: Must be a string with a maximum length of 100 characters.
- MobileNo: Must be a valid 10-digit number.
