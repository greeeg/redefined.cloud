---
title: "Qu'est-ce qu'un Service mesh ?"
description: 'Un Service mesh est un outil permettant de standardiser la communication de service à service de manière sécurisée et découplée du code applicatif.'
name: 'Service mesh'
summary: ''
keywords: ['service mesh']
relatedTerms:
  [
    'service-proxy',
    'observability',
    'containers-and-docker',
    'container-orchestration-and-kubernetes',
  ]
---

Imaginons deux groupes d'amis organisant une fête d'anniversaire pour une amie, Lisa. Ils jouent tous un rôle dans l'organisation de cette fête (acheter des ballons, préparer le gâteau, apporter des bougies, etc.).

Le premier groupe d'amis est composé de personnes très différentes les unes des autres qui apprécient travailler de différentes manières. John envoie un texto à Melissa pour des nouvelles tandis que Jane préfère appeler Martin pour préparer leur visite au supermarché, et Bob aime parler de vive voix. À tout moment, il est vraiment difficile pour eux de savoir ce qui se passe et de savoir si tout va être prêt pour la fête.

D'un autre côté, nous avons un groupe d'amis très efficaces et dotés d'un esprit d'équipe. Ils parlent tous en utilisant la même application de messagerie. Ils ont créé un groupe avec différents canaux pour différentes choses à faire et ont ajouté une application à tous les canaux pour suivre leurs progrès.

Dans cette histoire, le deuxième groupe d'amis dispose d'une [architecture orientée microservice](#microservice-architecture "Qu'est-ce qu'une architecture orientée microservices ?") qui utilise un service mesh. L'autre non.

## Faire communiquer efficacement des microservices

Un Service mesh est tout simplement un outil permettant à plusieurs microservices de discuter entre eux de manière standardisée, sécurisée sans introduire de logique spécifique dans le code, avec pour fonctionnalités principales :

- Sécurité : TLS, contrôle d'accès, limitation du nombre de requêtes
- Fiabilité : retries, timeouts, canary releases
- Observability : volumes, latences, taux de réussite

Cet outil est composé de deux éléments principaux :

- Proxy sidecars attachés à chaque service, formant ainsi un data plane (chaque application de messagerie sur chaque téléphone dans notre exemple)
- Control plane, permettant d'accéder au monde extérieur et de monitorer l'ensemble des services (le groupe de discussion entre les personnes)

L'un des principaux avantages liés à l'utilisation d'un service mesh est la mise en place, by default, de mesures de sécurité et d'observabilité dès la conception. Parce que tous les amis du deuxième groupe utilisent la même application de messagerie et communiquent de la même manière entre eux, il est très facile de suivre les objectifs et de comprendre ce qui se passe.

Avec le premier groupe, vous devriez avoir un moyen de suivre les choses pour chaque type de communication (texte, appel, IRL). Il serait plus difficile pour vous de vous assurer que cette fête est une surprise jusqu'au jour venu, car vous auriez à vérifier tous les outils de communication utilisés, au lieu d'un seul.

Les services mesh sont principalement (et peut-être même uniquement) utilisés dans des architecture composées de [services containerisés](#containers-and-docker "Qu'est-ce qu'un container et Docker ?").

## Avantages d'un Service mesh

- Standardiser et sécuriser la manière dont plusieurs services communiquent entre eux
- Bénéficier d'une fiabilité et de principes d'observability sans effort

## Exemples de Service mesh

- [Istio](https://istio.io/)
- [Consul](https://www.consul.io/)
- [Linkerd](https://linkerd.io/)
