# MERN Stack Web App Setup Guide

This guide will help you set up a MERN stack web application using Docker.

## Prerequisites

- Ensure you have Docker installed on your machine. If you don't have Docker installed, you can download and install it from [Docker's official website](https://www.docker.com/products/docker-desktop).

## Setup Instructions

1. **Clone the Repository**

    First, copy the git repository using the following link:

    ```sh
    git clone https://github.com/Stefans217/cpd-development.git
    ```

    Then, paste it into your development folder:

    ```sh
    cd your/development/folder
    ```

2. **Navigate to the Project Directory**

    Change directory into the root of the cloned repository:

    ```sh
    cd cpd-development
    ```

3. **Build and Run Containers**

    Run the following command to build and start the Docker containers:

    ```sh
    docker compose up --build
    ```

    If you want to continue running terminal commands after starting the containers, add the `-d` flag:

    ```sh
    docker compose up --build -d
    ```

## Important Notes

- The first time you create the containers, the process may take up to ~2 minutes.
- Subsequent builds will take significantly less time, usually around 20 seconds.

With these steps, your MERN stack web application should be up and running using Docker. Happy coding!
