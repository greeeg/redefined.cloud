---
title: "Qu'est-ce que l'Observability ?"
description: "L'observabilité est la capacité d'un système à apporter des réponses à des questions qui n'ont pas encore été posées sur une application ou un service."
name: 'Observability'
summary: ''
keywords: ['observability', 'monitoring']
relatedTerms: ['monitoring', 'logging', 'tracing', 'profiling']
---

Le [Monitoring](#monitoring "Qu'est-ce que le Monitoring ?") est un élément essentiel pour garantir des performances optimales pour les services et applications que nous déployons dans le Cloud afin de répondre aux attentes de nos utilisateurs. En utilisant une combinaison de logs, de traces et de profiles, nous pouvons comprendre l'état actuel et la santé de notre application en fonction de critères et de mesures prédéfinis à examiner.

Cependant, dans des architectures distribuées, tels que des [microservices](#microservice-architecture "Qu'est-ce qu'une architecture orientée microservices ?"), il est difficile d'avoir une vue globale de notre application. Avec le monitoring, il est uniquement possible de détecter des problèmes/seuils d'erreurs préalablement définis. On ne peut que réagir aux incidents qui se produisent.

## Adopter une posture proactive au lieu de réactive

Avec l'Observability, l'objectif est de mettre en place des outils permettant une analyse de services et systèmes proactive, donnant ainsi plus de contexte sur l'état de santé d'un système. Au lieu de monitorer uniquement le taux d'erreurs HTTP renvoyées par votre API, vous mettez en place des outils permettant de connaître l'usage de la mémoire, la latence de votre API etc.

Il existe 3 niveaux d'Observability :

- Au niveau de l'application
- Au niveau de la machine
- Au niveau du réseau

De manière à suivre les bonnes pratiques de l'Observability, vous devez disposer d'une stratégie claire pour accéder aux données qui vous permettre de répondre de manière proactive aux questions que vous vous posez. Une bonne base pour cela repose sur 3 piliers :

- Logs d'évènements : les [logs](#logging "Qu'est-ce que le Logging ?") sont des métadonnées d'évènements s'ayant produits dans le passé. En utilisant des expressions régulières par exemple, vous pouvez filtrer vos logs pour connaître l'état de santé de vos services. Un défi lié à la collecte de logs est le bruit que ces derniers génèrent. Bien qu'ils soient utiles, ils ne se révèlent pertinents que si efficacement filtrés et indexés dû au volume de données qu'ils peuvent générer chaque jour.

- Traces : une [trace](#tracing "Qu'est-ce que le Tracing ?") vous donne une vue bas niveau de l'exécution d'un programme (qu'est-ce qui a déclenché quoi, dans quel ordre, combien de temps a duré chaque étape). Une trace est utile lorsque vous cherchez à identifier quel service est responsable d'une baisse de performance ou d'erreurs dans votre application.

- Metrics : les metrics peuvent être une photo d'un état à un certain moment ou calculé à interval régulier, comme les [profiles](#profiling "Qu'est-ce que le Profiling ?"). Elles représentent des données sous forme de graphs ou de jauges pour donner une image globale d'un système facile à lire.

## Aller plus loin avec l'Observability

- Lire comment [l'équipe infrastructure de Netlify a amélioré son observability tout en augmentant sa vitesse de déploiement](https://www.netlify.com/blog/2020/05/05/what-netlifys-infrastructure-team-learned-as-it-increased-deploy-speed-by-up-to-2x/)
- Regarder [comment Honeycomb a amélioré son observability dans son processus de développement](https://www.infoq.com/presentations/honeycomb-build-ssc/)
