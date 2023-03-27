---
title: "Developing with Docker & React"
excerpt: "A recipe for developing React applications with Docker & docker-compose"
coverImage: "/assets/articles/react-docker.png"
date: "2022-09-30"
---

## Hello, hello, hello!

Greetings! In this article, I will provide you with a recipe for dockerizing a React application while reviewing essential Docker concepts and tools that can improve productivity and save time. By the end of this article, you will learn how to write a Dockerfile and docker-compose file, understand how hot reloading works, and discover volumes, bind mounts, and .dockerignore files.

So, what is Docker? Docker is a platform that eliminates repetitive, mundane configuration tasks and is used throughout the development lifecycle to fast-track and simplify application development. The platform comprises UIs, CLIs, APIs, and security that are engineered to work together across the entire application delivery lifecycle.

Docker attempts to solve the problem of "it runs on your machine, but not on mine," which almost all software engineers will inevitably encounter when they attempt to share their creations with the world. Although we do not need to understand the nitty-gritty details of how Docker works, there are several important concepts we need to understand, starting with the difference between images and containers.

Docker images are the basis of containers. An image is an ordered collection of root filesystem changes and the corresponding execution parameters used within a container runtime. Typically, an image contains a union of layered filesystems stacked on top of each other. An image does not have state and never changes.

On the other hand, a container is a runtime instance of a docker image. A Docker container consists of a Docker image, an execution environment, and a standard set of instructions. The concept is borrowed from shipping containers, which define a standard to ship goods globally. Similarly, Docker defines a standard to ship software.

An image is a read-only bundle of source code, libraries, tools, dependencies, assets, and everything else an application needs to run. Images are defined in a Dockerfile. A container is a running image. Often, an application will require many containers, each depending on specific ports, environmental variables, and ways to communicate with the host system. docker-compose allows us to manage all of this.

For dockerizing a React application, we will write both Dockerfile and docker-compose.yml files. The example source code used can be found here, which is a generic React application generated using create-react-app.

Below is the Dockerfile.dev:

```Dockerfile
FROM node:alpine3.15

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]
```

```yml
version: "3.8"
services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    environment:
      - CHOKIDAR_USEPOLLING=true
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
```

Let's take a closer look at what is happening in our `Dockerfile` and `docker-compose.yml` files.

In our `Dockerfile`, we are:

Defining a new image from node-alpine

- Creating a working directory called app to house our application
- Copying only the package.json and package-lock.json files to the working directory inside the container
- Installing node_modules
- Copying the entire application to the working directory inside the container
- Executing the command npm start

In our `docker-compose.yml` file, we are:

- Declaring which docker-compose version to use
- Defining a service called web
- Telling the build to use the `Dockerfile.dev` in the directory set by the context, which is the current directory "."
- Setting the `CHOKIDAR_USEPOLLING` environment variable to true (this is Node-specific configuration)
- Binding port 3000 of the host machine to port 3000 of the

And thats it folks, thanks for reading!

---

## Notes, Links, & Resources

- Quotes taken directly from Docker's Documentation Site
- `docker system prune --all --force` - cleanup Docker memory issues
- [Chokidar](https://github.com/paulmillr/chokidar)
- [Polling in Programming](<https://en.wikipedia.org/wiki/Polling_(computer_science)>)
- [Docker Documentation](https://docs.docker.com/)
- [Source code](https://github.com/JamesDeLay/docker-react-dev)
