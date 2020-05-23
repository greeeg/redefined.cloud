---
name: 'Remote procedure call'
shortName: 'RPC'
summary: ''
keywords: ['Remote procedure call', 'rpc', 'communication']
---

Remote procedure call, also known as RPC, is like organizing a dinner and calling your bakery for some bread: you're asking for the result (some bread) of a request performed by a remote service (the bakery) for your dinner (application) to work as expected.

RPC is a transportation protocol used to make distributed services talk and work with each others. In a microservices-oriented architecture, the business logic is divided in independent services. If a service needs another service to perform some action or retrieve some information, it can us RPC to communicate with it.

RPC can be compared to GraphQL, Rest APIs or SOAP which serve the same purpose: making it easy for systems to communicate.

rpc → rest → graphql

Graphql : Ask for exactly what you want

Fundamental unit: query

REST: Here are some resources and what you can do with them

Fundamental unit: resource

While some of them might be more optimized for client/server communication, RPC has some advantages:

- Simple interactions
- Action oriented (calling a remote function)
- Lightweight payloads
- High performance

One of the prominent RPC framework is gRPC. Developed by Google, it supports a lot of programming languages, uses http/2 and has additional features like auth, tracing and load balancing.

[https://www.youtube.com/watch?v=IvsANO0qZEg](https://www.youtube.com/watch?v=IvsANO0qZEg)

[https://www.bugsnag.com/blog/grpc-and-microservices-architecture](https://www.bugsnag.com/blog/grpc-and-microservices-architecture)

[https://www.infoq.com/presentations/api-pb-grpc/](https://www.infoq.com/presentations/api-pb-grpc/)

[https://www.bizety.com/2018/11/12/protocol-buffers-vs-json/](https://www.bizety.com/2018/11/12/protocol-buffers-vs-json/)
