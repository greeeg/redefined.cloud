---
title: 'What is a Container Registry?'
description: ''
name: 'Container registry'
summary: ''
keywords: ['container', 'registry', 'docker hub']
relatedTerms:
  [
    'containers-and-docker',
    'container-orchestration-and-kubernetes',
    'microservice-architecture',
  ]
---

A container registry is like a book for recipes (container images). It is a central place where to pull recipes when needed, during the development or deployment phase.

In a containarized architecture, each service of your application is a container. In order to deploy those containers into the cloud, we need container images: they are a file comprised of multiple layers which defines that service and can be executed anywhere.

If each team or developer was responsible for storing its own images, it would be quite hard for infrastructure engineers or site reliability engineers to deploy the entire app, having to ask multiple people for their pieces of the cake.

Instead, we use a container registry, which stores all images, in a private and secure way. This way, we know where to look to find the latest version of some team's code, ready to be deployed.

Some container registries are even able to perform vulnerability scanning on uploaded images in order to detect issues even before getting deployed.

Using continuous delivery principles, container images can be created and upload to the container registry automatically when code is added to the source control system.

## Why using a container registry

- Improve continuous delivery/time to deploy
- Organize deployment strategy
