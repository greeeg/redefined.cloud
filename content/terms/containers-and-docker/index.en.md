---
title: 'What are Containers and Docker?'
description: 'A container is like a campervan: a box containing everything needed to work, anywhere.'
name: 'Containers & Docker'
shortName: 'Container'
summary: ''
keywords: ['container', 'docker']
relatedTerms:
  ['microservice-architecture', 'virtual-machine', 'container-registry']
---

A container is like a box containing everything needed to run an application in the cloud: from code, dependencies to system tools and settings.

Like shipping containers (in the transportation field), developers don't need to think about on which ship (server, cloud infrastructure) the container is gonna be executed: because it is self-contained.

It comes with all the pieces needed for it to work. They are boxes with a standard shape, size, and locking mechanism used to ship goods around the world. Any shipping container can be moved around by the same cranes, ships, trains, and trucks because these only interact with the box itself, regardless of its contents.

## Running code in the exact same conditions, no matter the environment

Containers are a response to a growing pain when working with code and environments: it is hard to make sure two environments run code in the exact same conditions.

Let's say you are deploying your application on a brand-new server manually. You would have to install your programming language, pull your codebase, install dependencies, probably configure a web server, open some ports, etc.

You might have to do it several times in the future, when scaling up your application or deploying new versions of it. Risks of configuration mismatch or dependency version mismatch are real. Using containers, you make sure this running environment stays the same throughout time. And if a container works on your machine, it will definitely work on someone else's.

## Benefits of using containers

- Deploy services in a consistent way across environments
- Continuous deployment & Testing
- Isolation
- Languages & Cloud platforms support

One of the most used solution to create containers is Docker. Docker helps you work with containers by using 3 principles:

- Docker file: A docker file is a way for developers to describe how an application is set up and started (I need Node.js 12 with those dependencies, with this port opened and this command started).
- Docker Image: A docker image is like a package or base, which results from Docker executing your docker file. It can then be used to run your application.
- Container: A docker container is a docker image running on a machine that has Docker installed in an isolated and secure way. You can have as many containers running on one machine as the machine can handle.

Container can be useful starting with one container if your application is a monolith. However, we can leverage their full potential when working with several different microservices.

When working with huge applications and services, you can have dozens of docker images and thousands of containers running on different servers. This is when [orchestration](#container-orchestration-and-kubernetes 'What is Container orchestration and Kubernetes?') can become handy, helping you create, update and delete those containers in an automated way using tools like Kubernetes.

## Digging deeper in containers

- Watch [what it takes to use Docker in production](https://www.youtube.com/watch?v=6jT83lT6TU8)
- Watch [how to create effective Docker images](https://www.youtube.com/watch?v=vlS5EiapiII) with Abby Fuller
- Watch [how containers differ from virtual machines](https://www.youtube.com/watch?v=TvnZTi_gaNc)
