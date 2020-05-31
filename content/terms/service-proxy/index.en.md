---
title: 'What is a Service Proxy?'
description: 'A service proxy is like a gatekeeper between a service and incoming requests.'
name: 'Service proxy'
summary: ''
keywords: ['service proxy', 'microservices']
relatedTerms:
  [
    'container-orchestration-and-kubernetes',
    'load-balancer',
    'microservice-architecture',
  ]
---

A service proxy is like a gatekeeper between a service and incoming requests. Instead of directly receiving requests from the outside, services receive request from their proxy.

A service proxy acts as an intermediary, with the ability to perform additional tasks for the service like:

- Load balancing
- Security
- Caching
- and more.

In a distributed architecture like microservices, some of the biggest challenges are how services communicate and how to improve observability. Service proxies improve the way services communicate in a controlled and standardized way.

## Advantages of service proxy

- Granularity
- Traffic management
- Service discovery
- Monitoring & Analytics
- Security

One of the most used service proxy is Envoy, developed by Lyft. It is also used within a service mesh called Istio.
