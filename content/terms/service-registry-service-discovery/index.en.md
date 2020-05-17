---
slug: 'service-registry-service-discovery'
title: 'Service registry/discovery'
description: ''
keywords: ['service registry', 'service discovery']
published: true
---

Let's imagine a pizza truck which is available every day in a town. However, each day, the pizza truck is at a different location. Indeed, the pizza truck owner want to make sure every person in this town to know about his pizzas. But because you love pizza, you want to eat one from this specific truck every day. How would you know where to go to get it ?

In a web project, if your code needs to interact with a database, you have to know the address (or URL) of that database to connect to it. But in our case, its address is always changing.

Service registry would be a place (or storage) where you would be sure to always know the current geolocation of the truck, and service discovery would be the act of accessing that information at any given time.

Now, you might be wondering in what possible case a ressource (database, service, etc.) would have its address change. Indeed, a database URL should not change from one day to another.

However, if you're working in a microservice-oriented or containerised architecture, this is pretty common. Indeed, because you want your application to be highly available, you always make sure to progressively release new versions of a service: you create new instances of service A, progressively redirect traffic to those new instances and then shut down old ones. But how should services connected to service A behave? How are they suppose to know how to connect to those new instances? This is when service registry comes into place.

Using container orchestration tools like Kubernetes, you have two ways of registering and discovering services:

- Using DNS (just like domain names)
- Using environment variables

However, when working with complex architectures, you can use what we call a service mesh, which happens to do exactly that (plus a bunch of other things) for you.

Apache Zookeeper

ETCD
