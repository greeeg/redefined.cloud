---
title: "Qu'est-ce que le Tracing ?"
description: "Le Tracing agit comme une boîte noire à l'intérieur d'un avion : comprendre ce qu'il s'est passé lors d'un crash."
name: 'Tracing'
summary: ''
keywords: ['tracing', 'logging', 'monitoring']
relatedTerms: ['observability', 'logging', 'monitoring', 'profiling']
---

Là où le [logging](#logging "Qu'est-ce que le Logging ?") pourrait être comparé à un manifeste de vol, le tracing serait la boîte noire utilisée pour comprendre ce qui s'est produit lors d'un crash et ainsi connaître la chaîne des évènements qui a mené à un problème.

Au lieu de fournir une vue haut niveau des logs créés par des événements, le tracing fournit une vue bas niveau de l'exécution d'un programme (ce qui a déclenché quoi dans le programme, dans quel ordre, combien de temps a duré chaque étape).

Alors que les logs peuvent être utilisés pour monitorer un service, le tracing peut être utilisé pour comprendre la source d'un problème lorsqu'il survient : comment y sommes-nous arrivés, quelle fonction, pendant combien de temps, les paramètres passés, etc. En général, une trace est utile pour un examen détaillé de l'exécution du code.

## Avantages du Tracing

- Comprendre l'exécution d'un programme lors de pannes
- Évaluer la performance d'une requête au sein [d'une architecture orientée microservices](#microservice-architecture "Qu'est-ce qu'une architecture orientée microservices ?")
- Optimiser l'exécution des hot paths de votre application

## Aller plus loin avec le Tracing

- Comprendre [comment Uber utilise le distributed tracing](https://www.youtube.com/watch?v=EW9GjQNcyzI) pour maîtriser la complexité de son architecture orientée microservices
- Regarder [comment Lyft a intégré et utilise désormais le distributed tracing](https://www.youtube.com/watch?v=URCLeycMrhU)
