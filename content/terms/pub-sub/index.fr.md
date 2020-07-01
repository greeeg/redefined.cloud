---
title: 'What is Pub/Sub or the Publish/Subscribe pattern?'
description: 'Pub/Sub is like a stock market where investors publish sell orders and buyers subscribe to those orders to receive messages when new ones arrive.'
name: 'Pub Sub'
summary: ''
keywords: ['pub sub', 'pubsub']
relatedTerms: ['message-broker-message-queue', 'webhook']
---

The Pub/Sub or Publish/Subscribe messaging pattern is like a stock market: publishers are investors selling stocks at a certain price and subscribers are people looking at ask prices and their evolution throughout time.

It is a form of asynchronous messaging service, which moves messages from producers to consumers.

Thus, the Pub/Sub messaging pattern is made of 4 things:

- Publishers: Service(s) producing messages
- Subscribers: Service(s) listening for messages
- Topics: A named resource to which messages are sent by publishers
- Messages: Data sent by publishers to a specific topic

Pub/Sub is often compared/associated to [message queuing](#message-broker-message-queue 'What is a Message broker?'), which is also a form of asynchronous messaging service. The main difference is that pub/sub messaging allows multiple consumers to receive each message in a topic, whereas message queuing only distributes it to one. Moreover, pub/sub messaging ensures that each consumer receives messages in a topic in the exact order in which they were received by the messaging system.

Publish-subscribe use cases are frequently associated with stateful applications. Stateful applications care about the order of messages received because the ordering of messages determines the state of the application and will, as a result, impact the correctness of whatever processing logic the application needs to apply.

## Use cases for Pub/Sub

- Heavy workload to distribute between different instances (eg. video processing)
- Logging to multiple systems

## When to use Pub/Sub

- Service-to-service communication
