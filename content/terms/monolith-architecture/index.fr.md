---
title: "Qu'est-ce qu'une architecture monolithique ?"
description: 'Une architecture monolithique est une solution unifiée unique à un problème, où tous les composants de la solution sont combinés.'
name: 'Monolith architecture'
summary: ''
keywords: ['monolithic architecture', 'monolith']
relatedTerms: ['microservice-architecture', 'baremetal-server', 'load-balancer']
---

Une architecture monolithique est comme un outil unique que nous utiliserions pour tout faire, comme un Thermomix pour cuire un gâteau au chocolat.

On oppose généralement cette architecture à une [architecture orientée microservices](#microservice-architecture "Qu'est-ce qu'une architecture orientée microservices ?") qui consisterait à utiliser plusieurs outils très spécifiques pour aboutir au même résultat.

Ce type d'architecture est souvent privilégié aux débuts d'une application Cloud. En effet, vous n'avez qu'un seul outil (ou service) à maintenir et chaque ingénieur peut contribuer à toutes les parties de votre application.

Cependant, lorsque vous avez un pic de trafic, la seule façon de supporter la montée en charge est d'exécuter plusieurs copies de l'application derrière un [load balancer](#load-balancer "Qu'est-ce qu'un load balancer ?"). Si vous avez un site Web e-commerce et que seules les pages de produits subissent un pic de trafic, vous devez tout mettre à l'échelle, même le flow de paiement et la fonction de recherche, ce qui peut entrainer une augmentation de vos coûts.

De plus, plus la taille de votre application augmente, plus il devient difficile pour vos équipes d'y contribuer et d'itérer sur les fonctionnalités. Parce que tout vit au même endroit, vous devez vous assurer de ne pas casser quelque chose accidentellement en mettant à jour des parties de vos fonctionnalités étroitement couplées. Si un bug venait à compromettre le fonctionnement de l'un de vos services, toute votre application risquerait de ne plus fonctionner.

## Avantages d'une architecture monolithique

- Facilité de mise en place
- Simple à déployer et tester
- Lorsqu'elle est assez petite, il est facile d'intégrer de nouveaux ingénieurs

## Inconvénients d'une architecture monolithique

- Vélocité limitée et maintenance importante passé une certaine taille
- Fiabilité
