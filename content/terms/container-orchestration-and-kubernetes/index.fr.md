---
title: "Qu'est-ce Kubernetes et l'orchestration de containers ?"
description: "L'orchestration de containers est comme un chef d'orchestre : s'assurant que chaque instrument est en rythme avec les autres."
name: "Kubernetes et l'orchestration de containers"
shortName: 'Kubernetes'
summary: ''
keywords: ['container', 'orchestration', 'kubernetes', 'docker']
relatedTerms:
  ['containers-and-docker', 'container-registry', 'microservice-architecture']
---

Travailler avec des [containers](#containers-and-docker "Qu'est-ce Docker et les containers ?") rend la construction, le déploiement et la maintenance de différentes parties d'une application simple car tout le nécessaire pour les faire fonctionner est autonome et isolé du reste.

Dans une [architecture microservices](#microservice-architecture "Qu'est-ce qu'une architecture microservices ?"), une application peut être composée de dizaines voire de centaines de services, chacun étant maintenu par différents ingénieurs et déployé à différents instants, augmentant la vélocité de l'organisation.

Cependant, si différents services dépendent les uns des autres, vous devez coordonner les déploiements pour vous assurer leur bon fonctionnement. Pendant les pics de trafic, vous devez également vous assurer que la montée en charge sera assurée pour certains services alors que d'autres resteront inchangés pour limiter les coûts.

Faire tout cela manuellement peut être une solution, jusqu'à ce que vous ayez affaire à des milliers de containers en cours d'exécution simultanée.

Les solutions d'orchestration de containers sont là pour aider à la coordination de ces opérations, du [provisioning](#cloud-provisioning "Qu'est-ce que le Provisioning Cloud ?") de serveurs, la montée en charge de services, le [load balancing](#load-balancer "Qu'est-ce que le Load balancing ?") ou encore [monitorer](#monitoring "Qu'est-ce que le monitoring ?") votre infrastructure.

## Avantages de l'orchestration de containers

- Gérer des services conteneurisés à grande échelle (100+)
- Mécanismes de montée en charge automatisés
- Standardiser les pratiques de déploiement dans une organisation

Une des solutions d'orchestration de containers les plus utilisées est [Kubernetes](https://kubernetes.io/). Kubernetes vient avec son propre vocabulaire :

- Cluster : un groupe de nodes avec au moins un node maître et plusieurs node de travail, où le node maître est le chef d'orchestre et les nodes de travail sont les musiciens
- Master : la machine qui coordonne tous les nodes Kubernetes
- Node : une machine (virtuelle ou physique) qui fait tourner un ou plusieurs pods.
- Kubelet : un service s'exécutant sur chaque node responsable d'appliquer les commandes du node maître, garantissant le démarrage et l'exécution des conteneurs définis
- Pod : un groupe d'un ou plusieurs containers s'executant sur un node

## Aller plus loin avec l'orchestration de containers

- Apprendre Kubernetes de zéro avec [ce cours communautaire de Digital Ocean](https://www.digitalocean.com/community/curriculums/kubernetes-for-full-stack-developers)
- Regarder Brian Dorsey [expliquer comment Kubernetes](https://youtu.be/DGlQgNmobuc?t=123) change la manière dont on pense et parle d'infrastructure informatique
