---
title: "Qu'est-ce que le Serverless ?"
description: 'Le Serverless est similaire au fait de louer un bureau dans un espace de co-working au lieu de locaux entiers.'
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

Le Serverless est similaire au fait de louer un bureau dans un espace de co-working au lieu de locaux entiers. Dans les deux cas, vous louez un espace de travail (puissance de calcul), la seule différence étant qu'avec un espace de co-working, vous n'avez pas à gérer de bureaux, d'étages, acheter un bâtiment, etc, vous ne faîtes que louer tout l'espace dont vous avez besoin en fonction du nombre de collaborateurs dont vous disposez.

Avec le Serverless, vous n'interagissez pas directement avec des serveurs, qui sont des machines physiques dans un datacenter. À la place, vous laissez le soin à votre cloud provider de déterminer les ressources (puissance de calcul) dont votre application a besoin, en fonction de :

- Trafic
- Localisation de vos utilisateurs
- Besoins (CPU, RAM, etc.)

Le Serverless peut grandement simplifier la manière dont vous déployez votre code en production. En effet, vous n'avez plus besoin de prévoir la montée en charge, les capacités serveur, etc.

Le seul point important à prendre en compte avec le Serverless est que votre application ne doit pas dépendre d'un état local qui n'existerait que sur la machine sur lequel le code est exécuté (session, cache, etc.).

Le Serverless ne doit pas être confondu avec les [microservices](#microservice-architecture "Qu'est-ce qu'une architecture orientée microservices ?"). Les deux sont généralement associés mais il est tout à fait possible d'exécuter une application monolithique dans un contexte serverless.

## Avantages du Serverless

- Montée en charge simple
- Haute disponibilité
- Vous ne payez que pour le temps d'exécution de votre code (pas de frais lorsqu'il n'y a pas d'activité)
