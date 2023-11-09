# Visual MongoDB Backend

The Backend is used to communicate to a mongoDB server through the official mongoDB nodejs driver.

## Usage

## Base URL

- The base URL for the API is: `http://localhost:4000/`

## Authentication

- All requests, except `/connect-to-mongodb` require a mongoDB URL in the header

```javascript
  headers: {
    'Content-Type': 'application/json',
    'mongoURL': mongoURL as string,
  },
```

## Endpoints

### Connect to mongoDB server

- **URL:** `/connect-to-mongodb`
- **Method:** POST
- **Description:** Receives credentials and mongoDB adress and returns a concatenated mongoURL
- **Request Parameters:**
  - in post request body:

  ```json
  {
  "user":"",
  "password":"",
  "adress": "127.0.0.1",
  "port":"27017"
  }
  ```

- **Response:**

  ```json
  {
  "mongoURL": "mongodb://localhost:27017/",
  "message": "Successfully connected to MongoDB"
  }
  ```

### Get a list of available databases

- **URL:** `/query-databases`
- **Method:** GET
- **Description:** Lists all available databases on the server
- **Request Parameters:**
  - None

- **Response:**

  ```json
  [
  "admin",
  "config",
  "local",
  "yourdatabase"
  ]
  ```

### Get a list of available collections in a database

- **URL:** `/query/:database`
- **Method:** GET
- **Description:** Lists all available databases on the server
- **Request Parameters:**
  - database [name of the database you want to see collections from]

- **Response:**

  ```json
  [
  "playlists",
  "users"
  ]
  ```
