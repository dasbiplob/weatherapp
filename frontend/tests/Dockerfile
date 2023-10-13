# Use an official Python runtime as a base image
FROM python:3

# Set the working directory in the container
WORKDIR /app

# Install Robot Framework and SeleniumLibrary
RUN pip install --no-cache-dir robotframework robotframework-seleniumlibrary
RUN apt-get update && apt-get install -y chromium-driver xvfb

# Copy your test files into the container
COPY . /app/tests


ENV DISPLAY=:99
# Define the entry point command to run the tests
#CMD ["robot", "tests/frontend_tests.robot"]

CMD Xvfb :99 -screen 0 1024x768x16 & robot tests/frontend_tests.robot
