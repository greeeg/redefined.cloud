---
title: "Qu'est-ce qu'un API gateway ?"
description: 'Un API gateway agit comme un agent de réception chargé de répondre aux requêtes des clients en interrogeant les services sous-jacents pertinents.'
name: 'API gateway'
summary: 'Diriger les requêtes vers le bon service'
relatedTerms: ['microservice-architecture', 'serverless', 'service-mesh']
keywords: ['api', 'gateway', 'proxy', 'api gateway', 'server proxy']
---

Imaginez que vous vous rendiez à la mairie afin de récupérer votre tout nouveau permis de conduire. En entrant dans le bâtiment, un agent de réception est en charge de vérifier votre identité ainsi que de connaître la raison de votre visite. Vous récupérez par la suite un numéro qui vous permettra d'être appelé par le bon employé pour récupérer votre permis.

Si aucun agent de réception n'était disponible, vous devriez vous rendre de bureau en bureau afin de réaliser ce pourquoi vous vous êtes déplacé. A chaque étape, vous devriez vous présenter (à nouveau), prouver votre identité et expliquer la raison de votre visite.

Plus il y a de services, plus vous devriez passer à nouveau par ces étapes et répéter le même schéma.

Un API gateway agit comme un agent de réception. Il est chargé de répondre aux requêtes de l'ensemble des clients, les diriger vers les bons services et parfois effectuer certaines tâches supplémentaires (load balancing, rate limiting, authentification, monitoring).

## Le point d'entrée unique de votre application

Alors que certaines applications Cloud suivent une [architecture monolithique](#monolith-architecture "Qu'est-ce qu'une architecture monolithique ?") dans lesquelles elles sont autonomes, la plupart d'entre elles sont distribuées en plusieurs parties, également appelées services.

Dans une [architecture microservices](#microservice-architecture "Qu'est-ce qu'une architecture microservices ?"), une application peut être composée de dizaines de services, gérés par différentes équipes aux pratiques et rythmes variés. Certains d'entre eux peuvent même ne pas être disponibles via des appels HTTP standard.

Alors que les utilisateurs finals souhaitent bénéficier d'une expérience unifiée de votre application, plusieurs requêtes à différents services peuvent être nécessaires à l'affichage d'une page web, chacun passant par le Web (aller-retour excessifs).

## Avantages d'un API gateway

- Routage et composition des requêtes
- Boîte à outils (authentification, rate limiting, etc.)
- Traduction de protocoles
- Monitoring

De plus, dans une architecture microservices, les services peuvent voir leur adresse changer dynamiquement, ou leur nombre d'instances augmenter. Avec un API gateway, le client n'a pas besoin de se préoccuper de ce type de détail.

Si vous décidez de créer de nouveaux services ou d'en déprécier certains, vous souhaitez que l'ensemble des requêtes soient dirigés vers les bons services.

## Aller plus loin avec l'API gateway

- En apprendre plus sur [le pattern de l'API gateway](https://microservices.io/patterns/apigateway.html) sur Microservices.io
- Regarder comment [Netflix utilise des API gateways pour diriger son trafic vers des centaines de microservices](https://youtu.be/CZ3wIuvmHeM?t=1046)
- Regarder [une explication de NGINX sur les API gateways](https://www.youtube.com/watch?v=hYgP0cBORVg)
