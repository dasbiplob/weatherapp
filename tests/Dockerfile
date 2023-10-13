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

# Install Robot Framework and SeleniumLibrary
#RUN pip3 install --no-cache-dir robotframework robotframework-seleniumlibrary
RUN /app/venv/bin/pip install --no-cache-dir robotframework robotframework-seleniumlibrary

# Install ChromeDriver
#RUN apt-get update && apt-get install -y chromium-driver
# Switch to non-root user
USER seluser

# Copy your test files into the container
COPY . /app/tests

# Define the entry point command to run the tests
CMD ["/app/venv/bin/robot", "tests/frontend_tests.robot"]
