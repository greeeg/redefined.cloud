---
title: "Qu'est-ce qu'un Service proxy ?"
description: 'Un Service proxy agit comme un agent de contrôle entre un service et les requêtes entrantes.'
name: 'Service proxy'
summary: ''
keywords: ['service proxy', 'microservices']
relatedTerms:
  [
    'container-orchestration-and-kubernetes',
    'load-balancer',
    'microservice-architecture',
  ]
---

Un Service proxy agit comme un agent de contrôle entre un service et les requêtes entrantes. Au lieu de recevoir directement les requêtes venant de l'extérieur, les services concernés les reçoivent de leur proxy.

Un Service proxy agit comme un intermédiaire, avec la capacité d'effectuer des tâches additionnelles pour le service telles que :

- Load balancing
- Sécurité
- Mise en cache
- et bien plus

Dans une architecture distribuée telle q'une composée de [microservices](#microservice-architecture "Qu'est-ce qu'une architecture orientée microservices ?"), certains des défis les plus importants sont liés à la manière dont plusieurs services communiquent entre eux et comment améliorer l'observability de l'ensemble. Les Service proxies améliorent la manière dont les services communiquent entre eux de manière contrôlée et standardisée.

## Avantages d'un Service proxy

- Granularité
- Gestion du trafic
- Service discovery
- Monitoring & Analytics
- Sécurité

## Exemples de Service proxy

- [Envoy Proxy](https://www.envoyproxy.io/)
- [NGINX](https://www.nginx.com/)
- [HAProxy](https://www.haproxy.org/)
