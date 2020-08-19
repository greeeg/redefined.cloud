---
title: "Qu'est-ce qu'un Service registry et le Service discovery ?"
description: 'Le Service registry est un moyen de lister les services disponibles, leurs instances et localisations, tel un numéro de téléphone que vous utiliseriez pour localiser un camion de pizzas qui se déplace en ville.'
name: 'Service registry/discovery'
summary: ''
keywords: ['service registry', 'service discovery']
relatedTerms:
  [
    'container-orchestration-and-kubernetes',
    'service-mesh',
    'containers-and-docker',
  ]
---

Imaginons un camion de pizzas disponible tous les jours dans une ville. Cependant, chaque jour, ce camion change de localisation, de manière à permettre au plus grand nombre de tester ces pizzas et d'avoir une plus grande clientèle. Étant un grand fan de pizzas, vous souhaitez pouvoir en manger tous les jours de la semaine. Mais comment pourriez-vous savoir où aller chaque jour de la semaine ?

Dans le cas d'une application cloud, si votre code interragit avec une base de données, vous devez connaître son adresse (URL) pour vous y connecter. Mais dans notre cas, cette adresse change constamment.

Le Service registry serait un endroit (source de vérité) où vous auriez la certitude de toujours retrouver la bonne localisation de ce camion, et le Service discovery serait l'acte d'accéder à cette information à n'importe quel instant.

Cependant, vous pourriez vous demander pour quelle raison une ressource (base de données, service, etc.) verrait son adresse changer. En effet, l'URL d'une base de données n'est pas censée évoluer d'un jour à l'autre.

Dans le cas d'une [architecture orientée microservices](#microservice-architecture "Qu'est-ce qu'une architecture orientée microservices ?") ou d'une [architecture containerisée](#containers-and-docker "Qu'est-ce qu'un container et Docker ?"), cela est plutôt commun. En effet, parce que vous souhaitez que votre application soit hautement disponible, vous vous assurez de toujours progressivement sortir de nouvelles versions de vos services : vous créez une nouvelle instance de votre service A, puis progressivement redirigez le trafic vers cette nouvelle instance pour enfin supprimer les anciennes. Mais comment devraient se comporter les services connectés au service A ? Comment sont-ils supposés se connecter à ces nouvelles instances ? C'est à ce moment là que le Service registry entre en action.

En utilisant des outils [d'orchestration de containers](#container-orchestration-and-kubernetes "Qu'est-ce que l'orchestration de containers et Kubernetes ?") tels que Kubernetes, Vous avez deux manières d'enregistrer et de découvrir des services :

- Avec le DNS (tout comme les noms de domaine)
- Avec des variables d'environnement

Cependant, en travaillant avec des architectures complexes, vous pouvez utiliser des outils tels que les [service mesh](#service-mesh "Qu'est-ce qu'un Service mesh ?"), qui font exactement ça (plus un tas d'autres choses) pour vous.

## Exemples de Service registry

- [Apache Zookeeper](https://zookeeper.apache.org/)
- [etcd](https://etcd.io/)

## Aller plus loin avec le Service registry & discovery

- En apprendre plus sur [pourquoi utiliser un Service registry dans une architecture orientée microservices](https://www.nginx.com/blog/service-discovery-in-a-microservices-architecture/) avec NGINX
