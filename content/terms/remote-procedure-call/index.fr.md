---
title: "Qu'est-ce que le Remote procedure call ou RPC ?"
description: "Un Remote procedure call revient à sous-traiter une tâche à quelqu'un d'autre et à utiliser le résultat à votre propre fin."
name: 'Remote procedure call'
shortName: 'RPC'
summary: ''
keywords: ['Remote procedure call', 'rpc', 'communication']
relatedTerms: ['service-proxy', 'microservice-architecture']
---

Remote procedure call, aussi appelé RPC, est similaire au fait d'organiser un dîner et de faire appel à une boulangerie pour du pain : vous souhaitez le résultat (du pain) d'une requête réalisée par un élément extérieur (la boulangerie) pour votre dîner (application) pour qu'il se passe comme prévu.

RPC est un protocole réseau utilisé pour permettre à des services distribués de disucter et fonctionner ensemble. Dans une [architecture orientée microservices](#microservice-architecture "Qu'est-ce qu'une architecture orientée microservices ?"), la logique est réparti dans différents services autonomes indépendants. Si un service nécessite le résultat d'un autre service pour réaliser une action ou récupérer certaines informations, il peut utiliser RPC pour communiquer avec lui.

## RPC vs SOAP vs REST vs GraphQL

RPC peut être comparé à GraphQL, une API Rest ou encore SOAP qui servent le même but : rendre la communication entre services distribués possible. Cependant, ils possèdent des différences et ont été créés pour répondre à des problématiques différentes :

- RPC : Créé à la fin des années 60, c'était une réponse aux défis d'architectures distribuées que rencontraient des ingénieurs à cette époque. Il permet à des services d'exécuter des fonctions d'autres services à distance.
- SOAP : Conçu par Microsoft en 1998, c'est un protocole de communication basé sur le XML et dans la plupart des cas des requêtes HTTP.
- REST : Introduit par Roy Fielding en 2000, c'est une alternative plus légère que SOAP qui définit des ressources avec lesquelles on interagit en utilisant des requêtes HTTP et différents verbes (GET, POST, etc.).
- GraphQL : Créé par Facebook pour répondre à leurs besoins internes en 2012, il permet à des clients de demander exactement ce dont ils ont besoin à l'aide de requêtes basées sur un schéma exposé par le serveur.

## Avantages du RPC

- Interactions simples
- Orienté autour d'actions (appel d'une fonction distante)
- Payload légé
- Hautes performances

L'un des principaux frameworks RPC est [gRPC](https://grpc.io/). Développé par Google, il supporte de nombreux langages de programmation, utilise http/2 et dispose de fonctionnalités telles que l'authentification, le [tracing](#tracing "Qu'est-ce que le Tracing ?") ou encore le [load balancing](#load-balancer "Qu'est-ce qu'un Load balancer ?").

## Aller plus loin avec RPC

- Regarder [la comparaison de Nate Barbettini de RPC, REST et GraphQL](https://www.youtube.com/watch?v=IvsANO0qZEg)
- Comprendre [comment créer des microservices scalables avec gRPC](https://www.bugsnag.com/blog/grpc-and-microservices-architecture) comme protocole de communication
- Regarder comment vous pouvez [générer des APIs unifiées avec gRPC](https://www.infoq.com/presentations/api-pb-grpc/) et les protocol buffers chez Lyft
