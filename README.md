# Weatherapp

There was a beautiful idea of building an app that would show the upcoming weather. The developers wrote a nice backend and a frontend following the latest principles and - to be honest - bells and whistles. However, the developers did not remember to add any information about the infrastructure or even setup instructions in the source code.

Luckily we now have [docker compose](https://docs.docker.com/compose/) saving us from installing the tools on our computer, and making sure the app looks (and is) the same in development and in production. All we need is someone to add the few missing files!

## Prerequisites

* An [openweathermap](http://openweathermap.org/) API key.

## Returning your solution

### Via github

gitHub Repository: https://github.com/dasbiplob/weatherapp/

### Running Locally
## Backend
  1. Navigate to the backend folder and install dependencies:
      npm install
  2. Start the backend server:
     npm start
## Frontend
  1. Navigate to the frontend folder and install dependencies:
      npm install
  2. Start the frontend server:
     npm start
### Testing
## Mocha Test Cases
  To run Mocha test cases, go to the backend folder and run:
  1. npm install
  2. npm test

## Robot Framework Test Cases
  To run Robot Framework test cases, navigate to the test folder and run the following commands:
  pip install robotframework
  pip install robotframework-seleniumlibrary
  robot frontend_tests.robot

### Running with Docker
## Backend
  1. Build the backend Docker image:
      docker build -t weatherapp_backend ./backend
  
  2. Run the backend image:
     docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend
## Frontend
  1. Build the frontend Docker image:
      docker build -t weatherapp_frontend ./frontend
  2. Run the frontend image:
     docker run --rm -i -p 8000:8000 --name weatherapp_frontend -t weatherapp_frontend
## Running as a Whole
  To run the entire application, use Docker Compose:
    docker-compose up

Now the application can be accessed at http://localhost:8000/

