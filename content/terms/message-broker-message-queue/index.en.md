---
title: 'What is a Message Broker or Message Queue?'
description: ''
name: 'Message broker'
summary: ''
keywords: ['message broker', 'message queue']
relatedTerms: ['cron-job', 'webhook', 'pub-sub']
---

Message queuing is like a todo list: tasks are added to a list and removed once processed throughout the day.

It is a form of asynchronous messaging service, which moves messages from producers to consumers. Each message is processed only once, by a single consumer, as opposed to Pub/Sub which allows multiple consumers to receive a message.

Message queuing is made of 4 things:

- Producers: Service(s) producing messages
- Queue: A list of messages to be consumed
- Consumers: Service(s) listening for messages
- Message: Data sent by publishers to a specific topic

## Use cases for message queuing

- Repetitive heavy workload (eg. generating payslips)
- Asynchronous work (eg. sending emails)
