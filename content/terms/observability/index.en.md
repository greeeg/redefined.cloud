---
title: 'What is Observability?'
description: 'Observability is the capacity to provide answers to questions you never asked yourself before about an application or service.'
name: 'Observability'
summary: ''
keywords: ['observability', 'monitoring']
relatedTerms: ['monitoring', 'logging', 'tracing', 'profiling']
---

[Monitoring](#monitoring 'What is Monitoring?') is a huge part of making sure services and applications we deploy into the cloud deliver the right performance in order to meet user expectations. Using a combination of logging, tracing and profiling, we can understand the current state and health of our application based on predefined criterias and metrics to look at.

However, in modern distributed architectures, like [microservices](#microservice-architecture 'What is a Microservice architecture?'), it is harder to get the big picture and connect the dots. With monitoring, you're only looking for known issues using automated checks. You only have the possibility to react to incidents.

## Being proactive vs reactive

Observability is the capacity to provide answers to questions you never asked yourself before about an application or service.

Observability is about being able to introspect services and applications to provide context and thus a better understanding of how good a system is currently doing.

There are 3 levels of Observability:

- Application level
- Machine level
- Network level

In order to follow Observability best practises, you need a clear path to access the data used to answer those questions. A good foundation for that is based on 3 pillars:

- Event logs: [Logs](#logging 'What is Logging?') are metadata of events that happened in the past. Using regular expressions, you can filter logs and understand how a service behaves. A common challenge with logs is noise. While they are useful, they can be hard to filter and index due to the volume of data you generate.

- Traces: A [trace](#tracing 'What is Tracing?') gives you a detailed low-level view of a program's flow (what triggered what in the program, in which order, how long did each step lasts). A trace is useful when you need to identify which service caused application errors or find performance bottlenecks.

- Metrics: Metrics can be either a point in time or monitored over intervals, like [profiles](#profiling 'What is Profiling?'). They represent data over intervals in graphs or gauges to give a big picture that is easy to read.

## Digging deeper into Observability

- Read how [Netlify’s Infrastructure Team Improved Observability While Increasing Deployment Speed](https://www.netlify.com/blog/2020/05/05/what-netlifys-infrastructure-team-learned-as-it-increased-deploy-speed-by-up-to-2x/)
- Watch [how Honeycomb improved its observability in the software supply chain](https://www.infoq.com/presentations/honeycomb-build-ssc/)
