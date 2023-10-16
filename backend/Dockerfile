# Use the latest Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies by running npm install
RUN npm i

# Copy the entire project files to the working directory
COPY . .

# Expose port 9000 to allow incoming connections
EXPOSE 9000

# Define the default command to start the application
CMD ["npm","start"]
