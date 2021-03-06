---
title: 'What is a Service mesh?'
description: 'A Service mesh is a tool to standardize service-to-service communication in a secure and application-code decoupled way.'
name: 'Service mesh'
summary: ''
keywords: ['service mesh']
relatedTerms:
  [
    'service-proxy',
    'observability',
    'containers-and-docker',
    'container-orchestration-and-kubernetes',
  ]
---

Let's imagine two groups of friends organizing a birthday party for a friend, Lisa. They all play a role in organizing this party (buying balloons, cooking the cake, bringing candles, etc.).

The first group of friends is made of people which are very different from each other and like to work in different ways. John texts Melissa for news while Jane prefers to call Martin to prepare their trip to the supermarket, and Bob likes to talk in real life. At any given time, it's really hard for all of them to know what's going on and to know if everything is gonna be ready for the party.

On the other hand, we have a highly effective and team-spirit group of friends. They all talk using the same messaging app. They set up a group with different channels for different things to do and added an app to all channels to track their progress.

In this story, the second group of friends is running a [microservice-oriented architecture](#microservice-architecture 'What is Microservice architecture?') using a service mesh. The first one isn't.

## Making microservices talk to each other

A service mesh is basically a tool to help microservices talk to each other in a standardised, secure and application-code decoupled way, including:

- Security features: TLS, access-control, request limiting
- Reliability features: retries, timeouts, canary releases
- Observability features: volumes, latencies, success rates

This tool is made of two principal parts:

- Proxy sidecars next to each service, forming the data plane (each messaging app on each people's phones)
- Control plane, to access the outside world and monitor all services (the group on the messaging service)

One major benefit of using a service mesh is that you enforce security and observability by design. Because all friends of the second group are using the same messaging app and communicate in the same way between each other, it's really easy to track goals and understand what's going on.

With the first group, you would have to have a way of tracking things for each communication type (text, call, IRL). It would be harder for you to make sure this party is a surprise until the day comes, because you would have to check all communication tools used, instead of one.

Service mesh is mainly (and maybe only) used in a [containarized services](#containers-and-docker 'What is a Container and Docker?') oriented architecture.

## Benefits of using a Service mesh

- Standardize and secure how services communicate between each others
- Observability and reliability out of the box

## Examples of Service mesh

- [Istio](https://istio.io/)
- [Consul](https://www.consul.io/)
- [Linkerd](https://linkerd.io/)
