# Visual MongoDB Backend

The Backend is used to communicate to a mongoDB server through the official mongoDB nodejs driver.

## Usage

## Base URL

- The base URL for the API is: `http://localhost:4000/`

## Authentication

- All requests require a mongoDB URL in the body

```json
{
  "mongoURL": "mongodb://localhost:27017/"
}
```

## Endpoints

### Connect to mongoDB Server

- **URL:** `/connect-to-mongodb`
- **Method:** POST
- **Description:** Tries to connect to the provided mongoDB URL
- **Request Parameters:**
  - None

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
  ["admin",
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
