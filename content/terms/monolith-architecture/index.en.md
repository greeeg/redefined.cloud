---
slug: 'monolith-architecture'
title: 'Monolith architecture'
description: ''
keywords: ['monolith architecture', 'monolith']
published: true
---

A monolith architecture is like a single tool we would use to do everything, like a Thermomix to cook a chocolate cake.

We generally oppose this architecture to a microservices architecture, which would consist of using very specific different tools to achieve the same result.

It seems to always be the best solution, at least at first. Indeed, you only have one tool (or service) to maintain and every developer can contribute to all parts of your application.

However, when you have a spike of traffic, the only way to scale your application is to run multiple copies of the app behind a load balancer. If you have an ecommerce website and only product pages see a spike of traffic, you have to scale up everything, even the checkout flow and search feature, which can cost a lot.

Moreover, while your application gets bigger, it becomes harder and harder for your teams to contribute to it and iterate on features. Because everything lives in the same place, you have to make sure that you don't accidentally break something by updating parts of your tightly coupled features. And, if a bug happens to make your application crash, all your infrastructure is down.

## Benefits of monolith architecture

- Easy to start with
- Simple to deploy, test and scale horizontally
- When small enough, easy to onboard new developers

## Drawbacks of monolith architecture

- Size of the app can reduce velocity and increase maintenance
- Reliability
