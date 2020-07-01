---
title: 'What is a Container registry?'
description: 'A Container registry is like a central book of recipes any cook in a restaurant can use when needed.'
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

A container registry is a central place used to store docker images, ready to be used during development or deployment phase.

In a [containarized architecture](#containers-and-docker 'What is Docker and a container?'), each service of an application is a container. In order to deploy those containers into the cloud, we need container images: they are a file made of multiple layers which define that service and can be executed anywhere.

If each team or engineer was responsible for storing its own images, it would be quite hard for infrastructure engineers or site reliability engineers to deploy the entire application, having to ask multiple people for their pieces of the cake.

Instead, we use a container registry, which stores all images, in a private and secure way. Thus, we know where to look to find the latest version of some team's code, ready to be deployed.

Some container registries are even able to perform vulnerability scanning on uploaded images in order to detect issues even before getting deployed.

Using [continuous delivery principles](#continuous-delivery 'What is Continuous delivery?'), container images can be created and uploaded to the container registry automatically when code is added to the source control system.

## Benefits of using a Container registry

- Improve continuous delivery/time to deploy
- Organize deployment strategy
