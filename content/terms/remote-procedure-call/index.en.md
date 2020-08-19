---
title: 'What is Remote Procedure Call or RPC?'
description: 'Remote procedure call is like outsourcing a task to someone else and use the result to your own end.'
name: 'Remote procedure call'
shortName: 'RPC'
summary: ''
keywords: ['Remote procedure call', 'rpc', 'communication']
relatedTerms: ['service-proxy', 'microservice-architecture']
---

Remote procedure call, also known as RPC, is like organizing a dinner and calling your bakery for some bread: you're asking for the result (some bread) of a request performed by a remote service (the bakery) for your dinner (application) to work as expected.

RPC is a transportation protocol used to make distributed services talk and work with each others. In a [microservices-oriented architecture](#microservice-architecture 'What is a Microservice architecture?'), the business logic is divided in independent services. If a service needs another service to perform some action or retrieve some information, it can us RPC to communicate with it.

## RPC vs SOAP vs REST vs GraphQL

RPC can be compared to GraphQL, Rest APIs or SOAP which serve the same purpose: making it easy for services to communicate. However, they all have their differences and were created to solve different problems:

- RPC: Created in the late 1960s, it was a response to the early distributing computing issues engineers were facing at that time. It allows services to call functions on other servers.
- SOAP: Designed by Microsoft in 1998, it is a messaging protocol based on XML and most often HTTP requests.
- REST: Introduced by Roy Fielding in 2000, it is a lightweight alternative to SOAP which defines resources you can interact with using HTTP requests and different verbs (GET, POST, etc.).
- GraphQL: Created internally at Facebook in 2012, it allows clients to ask for exactly what they want using queries based on a schema exposed by the server.

## Benefits of using RPC

- Simple interactions
- Action oriented (calling a remote function)
- Lightweight payloads
- High performance

One of the prominent RPC framework is [gRPC](https://grpc.io/). Developed by Google, it supports a lot of programming languages, uses http/2 and has additional features like auth, [tracing](#tracing 'What is Tracing?') and [load balancing](#load-balancer 'What is a Load balancer?').

## Digging deeper into RPC

- Watch [Nate Barbettini compare RPC, REST and GraphQL](https://www.youtube.com/watch?v=IvsANO0qZEg)
- Learn [how to create scalable microservices using gRPC](https://www.bugsnag.com/blog/grpc-and-microservices-architecture) as a communication layer
- Watch how you can [generate unified APIs with gRPC](https://www.infoq.com/presentations/api-pb-grpc/) and protocol buffers at Lyft
