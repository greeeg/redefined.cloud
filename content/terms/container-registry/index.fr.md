---
title: "Qu'est-ce qu'un Container registry ?"
description: "Un Container registry est comme un livre de recettes central dans lequel n'importe quel cuisinier d'un restaurant peut retrouver ce dont il a besoin."
name: 'Container registry'
summary: ''
keywords: ['container', 'registry', 'docker hub']
relatedTerms:
  [
    'containers-and-docker',
    'container-orchestration-and-kubernetes',
    'microservice-architecture',
  ]
---

Un Container registry est un emplacement central utilisé pour stocker des images Docker, prêtes à être utilisées pendant la phase de développement ou de déploiement.

Dans une [architecture conteneurisée](#containers-and-docker "Qu'es-ce que Docker et les containers ?"), chaque service d'une application est un container. De manière à déployer ces containers dans le Cloud, nous avons besoin d'images Docker : ce sont des fichiers constitués de plusieurs couches qui définissent le fonctionnement d'un service de sorte à pouvoir le déployer n'importe où.

Si chaque équipe ou ingénieur était responsable du stockage de ses propres images, il serait assez difficile pour les ingénieurs d'infrastructure de déployer l'application entière, devant ainsi interroger chaque équipe pour sa part du travail.

A la place, on utilise un Container registry, qui permet de conserver toutes les images Docker de manière privée et sécurisée. Ainsi, on sait où chercher pour trouver la dernière version du code de chaque équipe, prête à être déployée.

Certains Container registries peuvent même effectuer une analyse de vulnérabilité sur les images téléchargées afin de détecter des problèmes avant même d'être déployées.

En suivant des [principes de continuous delivery](#continuous-delivery "Qu'est-ce que le Continuous delivery ?"), les images Docker peuvent être créées et téléchargées sur le Container registry automatiquement lorsque du code est ajouté au système de contrôle de source.

## Avantages d'un Container registry

- Améliorer le temps de déploiement/livraison
- Mettre en place une stratégie de déploiement
