---
title: 'What is a Serverless function or Lambda function?'
description: 'A Serverless function is a block of code triggered on incoming requests which executes application logic.'
name: 'Serverless function'
summary: ''
keywords: ['serverless', 'serverless function', 'lambda function']
relatedTerms: ['serverless', 'api-gateway-server-proxy']
---

Serverless functions are one of the most developed way of using the [serverless paradigm](#serverless 'What is Serverless?'). They consist of small and autonomous pieces of code that can be scaled up or down depending on incoming requests.

Serverless functions can be considered as [microservices](#microservice-architecture 'What is a Microservice architecture?'), as opposed to [monoliths](#monolith-architecture 'What is a Monolith architecture?').

They are triggered by events, which can be:

- HTTP requests
- Event (File upload, DB insert, etc.)

Serverless functions are particularly effective for heavy processing. Indeed, instead of paying for a large server which only runs at full capacity for five hours a month, you can setup a function which would only run at that time, being more cost-effective.

Famous serverless function providers are AWS Lambda, GCP Cloud functions or Azure functions.
