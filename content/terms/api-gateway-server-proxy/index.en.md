---
title: 'What is an API gateway?'
description: 'An API gateway acts as a front desk employee responsible for answering customers requests by asking the relevant underlying services.'
name: 'API gateway'
summary: 'Routing requests to the right service'
relatedTerms: ['microservice-architecture', 'serverless', 'service-mesh']
keywords: ['api', 'gateway', 'proxy', 'api gateway', 'server proxy']
---

Let's imagine you are heading to the state office in order to get your brand new driving license. When entering the building, you meet a front desk employee who is responsible for checking your identity, asking you why you're here. You're then assigned a ticket number which is used to call you and guide you to the right employee and get your driving license.

If no front desk employee was available, you would have to go from desk to desk in order to complete your request. At each step, you would have to introduce yourself (again), prove your identity and explain why you're here.

The more services there are, the more steps you would have to go through and repeat the same pattern.

An API gateway is like a front desk employee. It is responsible for receiving all incoming requests, routing them to the appropriate services and sometimes performs additional tasks (load balancing, rate limiting, authentication/authorization, monitoring).

## The single entrypoint for your application

While some applications in [monolithic architectures](#monolith-architecture 'What is a monolithic architecture?') for example are self-contained, most of them are decoupled in multiple parts, also known as services.

In a [microservice architecture](#microservice-architecture 'What is a microservice architecture?'), your overall application can be made of dozens of services, handled by different teams with different practices and paces. Some of them might not even be available through standard HTTP calls.

While users want to see a unified version of your application, several requests to different services can be necessary to display a page or screen, each of them going through the web (excessive roundtrips).

## Benefits of using an API gateway

- Request routing and composition
- One tool to rule them all (authentication, rate limiting, etc.)
- Protocol translation
- Monitoring

Moreover, in a microservice architecture, services can have their location updated dynamically, or their number of instances increase. With an API gateway, the client does not have to think about it.

If you decide to introduce new services or retire some of them, you want requests to be routed to the right place.

## Digging deeper into API gateways

- Read more about the [API gateway pattern](https://microservices.io/patterns/apigateway.html) on Microservices.io
- Watch how [Netflix uses API gateways to route traffic to hundreds of microservices](https://youtu.be/CZ3wIuvmHeM?t=1046)
- Watch [an explanation from NGINX about API gateways](https://www.youtube.com/watch?v=hYgP0cBORVg)
