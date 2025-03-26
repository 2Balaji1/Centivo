# Centivo
Simple Node.js Express API that’s connects to a MongoDB
# User API

A simple RESTful API built with Node.js, Express, and MongoDB for managing user data. This API allows you to retrieve user details based on their unique ID, focusing on users aged over 21.

## Approach

The API utilizes Express for routing and Mongoose for MongoDB interaction. It includes error handling for invalid ObjectId formats and ensures that only users over the age of 21 are returned in the response.
