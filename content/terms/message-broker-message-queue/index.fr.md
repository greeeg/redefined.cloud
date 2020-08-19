---
title: "Qu'est-ce qu'un Message broker ou fil de messages ?"
description: 'Un Message broker est similaire à une liste de tâches à réaliser au cours de la journée.'
name: 'Message broker'
summary: ''
keywords: ['message broker', 'message queue']
relatedTerms: ['cron-job', 'webhook', 'pub-sub']
---

Une fil de messages est comme une liste de tâches : elles sont ajoutées et retirées de la liste au fur et à mesure qu'elles sont réalisées tout au long de la journée.

C'est une forme de communication asynchrone entre services, composée d'expéditeurs de messages et de récepteurs de ces mêmes messages. Chaque message est traité une seule fois, par un seul récepteur, en opposition au modèle Pub/Sub qui permet à plusieurs récepteurs de recevoir le même message.

Une fil de messages est composée de 4 éléments :

- Expéditeurs : les services qui produisent des messages
- Fil de messages : elle contient tous les messages restants à consommer
- Récepteurs : les services qui écoutent pour de nouveaux messages à traiter
- Message : Données envoyées par les expéditeurs

## Cas d'usage pour les fils de messages

- Charge de travail répétitive et lourde (exemple : génération de fiches de paie)
- Tâches asynchrones (exemple : envoi d'emails)

## Exemples de Message brokers

- [NSQ](https://nsq.io/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [Apache Kafka](https://kafka.apache.org/)
- [Redis](https://redis.io/)
