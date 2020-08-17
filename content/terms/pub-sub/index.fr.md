---
title: "Qu'est-ce que Pub/Sub ou le pattern Publish/Subscribe ?"
description: 'Pub/Sub est comme un marché boursier où les investisseurs publient des ordres de vente et les acheteurs souscrivent à ces ordres pour recevoir des messages lorsque de nouveaux arrivent.'
name: 'Pub Sub'
summary: ''
keywords: ['pub sub', 'pubsub']
relatedTerms: ['message-broker-message-queue', 'webhook']
---

Pub/Sub ou le pattern de publication de message Publish/Subscribe est comme un marché financier : les publishers sont des investisseurs vendant leurs actions à un certain prix et les subscribers sont des acheteurs qui reçoivent ces ordres et suivent leur évolution au cours du temps.

C'est une forme de communication asynchrone par message, qui permet de déplacer des messages d'un service (publisher) à un autre service (subscriber).

Ainsi, le pattern de publication de message Pub/Sub est fait de 4 éléments :

- Publishers: Service(s) qui produisent des messages
- Subscribers: Service(s) qui écoutent pour de nouveaux messages
- Topics: Une ressource nommée à laquelle les publishers envoient des messages
- Messages: Données envoyées par les publishers à un topic spécifique

Pub/Sub est souvent comparé/associé aux [message brokers](#message-broker-message-queue "Qu'est-ce qu'un Message broker ?"), qui est également une forme de communication asynchrone par message. La principale différence est que pub/sub permet à plusieurs subscribers de recevoir le même message d'un topic, alors que le message broker ne l'envoie qu'un seul consumer. De plus, la communication par message Pub/Sub s'assure que chaque subscriber reçoive les messages d'un topic dans l'ordre exact dans lequel ils ont été reçus.

Les cas d'utilisation de Pub/Sub sont fréquemment associés à des applications dites stateful. Les applications stateful se soucient de l'ordre des messages reçus car ils déterminent l'état de l'application et ont, par conséquent, un impact sur l'exactitude de la logique de traitement que l'application doit appliquer.

## Cas d'usage pour Pub/Sub

- Charge de travail lourde à distribuer entre différentes instances (eg. traitement vidéo)
- Logging destiné à plusieurs systèmes différents

## Quand utiliser Pub/Sub

- Communication d'un service à un autre
