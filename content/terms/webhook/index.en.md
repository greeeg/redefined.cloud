---
title: 'What is a Webhook?'
description: 'A Webhook is like a P.O. Box third-party applications can use to notify you when something happens.'
name: 'Webhook'
summary: ''
keywords: ['webhook']
relatedTerms: ['message-broker-message-queue', 'pub-sub', 'cron-job']
---

Webhook are an automated way for your application or third-party applications to notify you when events happen, like your bank when an online purchase is made with your credit card.

Instead of manually checking your balance every hour (which refers to polling), you get updates delivered live, as they happen. This makes webhooks much more efficient for both provider and consumer.

A webhook is made of two things:

- An HTTP endpoint: the address to which the update or request should be sent
- Data: Information about the update, which can be GET parameters or a POST body request

Applications like [Twilio](https://www.twilio.com/) or [IFTT](https://ifttt.com/) are primarily based on webhooks to work.

## Benefits of using webhooks

- Easily integrate third-party services
- Avoid unnecessarily fetching data
