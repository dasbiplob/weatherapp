# Use an official Python runtime as a base image
FROM selenium/standalone-firefox:latest

# Set the working directory in the container
WORKDIR /app

# Install Python and Pip
USER root
RUN rm -rf /var/lib/apt/lists/*
RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

# Create a virtual environment
RUN python3 -m venv /app/venv

# Download and install GeckoDriver
RUN wget https://github.com/mozilla/geckodriver/releases/download/v0.33.0/geckodriver-v0.33.0-linux64.tar.gz
RUN tar -xvzf geckodriver-v0.33.0-linux64.tar.gz
RUN chmod +x geckodriver
RUN mv geckodriver /usr/local/bin/

# Install Robot Framework and SeleniumLibrary
RUN /app/venv/bin/pip install --no-cache-dir robotframework robotframework-seleniumlibrary

# Install GeckoDriver
COPY driver/geckodriver /usr/local/bin/


# Switch back to non-root user
USER seluser

# Copy your test files into the container
COPY . /app/tests

# Define the entry point command to run the tests
CMD ["/app/venv/bin/robot", "tests/frontend_tests.robot"]
