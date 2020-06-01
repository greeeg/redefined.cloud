---
title: 'What is Service Registry and Service Discovery?'
description: 'Service registry is a way to list available services, their instances and locations, like a phone number you would use to locate a pizza truck in a city.'
name: 'Service registry/discovery'
summary: ''
keywords: ['service registry', 'service discovery']
relatedTerms:
  [
    'container-orchestration-and-kubernetes',
    'service-mesh',
    'containers-and-docker',
  ]
---

Let's imagine a pizza truck which is available every day in a town. However, each day, the pizza truck is at a different location. Indeed, the pizza truck owner want to make sure every person in this town to know about his pizzas. But because you love pizza, you want to eat one from this specific truck every day. How would you know where to go to get it ?

In a web project, if your code needs to interact with a database, you have to know the address (or URL) of that database to connect to it. But in our case, its address is always changing.

Service registry would be a place (or storage) where you would be sure to always know the current geolocation of the truck, and service discovery would be the act of accessing that information at any given time.

Now, you might be wondering in what possible case a ressource (database, service, etc.) would have its address change. Indeed, a database URL should not change from one day to another.

However, if you're working in a [microservice-oriented](#microservice-architecture 'What is a Microservice architecture?') or [containerised architecture](#containers-and-docker 'What is a Container and Docker?'), this is pretty common. Indeed, because you want your application to be highly available, you always make sure to progressively release new versions of a service: you create new instances of service A, progressively redirect traffic to those new instances and then shut down old ones. But how should services connected to service A behave? How are they suppose to know how to connect to those new instances? This is when service registry comes into place.

Using [container orchestration](#container-orchestration-and-kubernetes 'What is Container orchestration and Kubernetes?') tools like Kubernetes, you have two ways of registering and discovering services:

- Using DNS (just like domain names)
- Using environment variables

However, when working with complex architectures, you can use what we call a service mesh, which happens to do exactly that (plus a bunch of other things) for you.

## Examples of Service registry

- [Apache Zookeeper](https://zookeeper.apache.org/)
- [etcd](https://etcd.io/)

## Digging deeper into Service registry & discovery

- Learn more about [why using Service registry in a microservice architecture](https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/) with NGINX
