---
title: 'What is Serverless?'
description: 'Serverless is like renting coworking space instead of renting a building.'
name: 'Serverless'
summary: ''
keywords: ['serverless']
relatedTerms:
  [
    'serverless-function',
    'api-gateway-server-proxy',
    'microservice-architecture',
  ]
---

Serverless is like renting coworking space instead of renting a building. In both cases, you're still renting office space (compute power), the only difference is that with a coworking space, you don't have to manage desks, floors, buying new buildings, etc, you just rent as much space as needed depending on how many employees you have.

With serverless, you do not interact directly with servers, which are physical computers in a datacenter. Instead, you let your cloud provider manage the resources (computing power) needed to run your application, depending on:

- Traffic
- Location
- Needs

Serverless can dramatically simplify how you deploy your code to production. Indeed, you do not need anymore to plan for scaling, computing capacity, etc.

The only downside with serverless is that you need to make sure your application doesn't depend on some local state on the current server (sessions, cache, etc).

Serverless should not be confused with microservices. Both are generally associated but you can run a monolith application in a serverless way.

## Benefits of using serverless

- Easy to grow and scale
- High availability
- Only pay for servers actually being used (not charged when your serverless code is not running)
