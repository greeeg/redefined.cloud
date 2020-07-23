---
title: "Qu'est-ce qu'un Load balancer ?"
description: "Un load balancer s'apparante à un agent de la circulation qui oriente le trafic de véhicules à l'entrée d'un tunnel sur plusieurs voies pour fluidifier l'ensemble."
name: 'Load balancer'
summary: ''
keywords: ['elb', 'load balancer', 'proxy', 'reverse proxy']
relatedTerms: ['api-gateway-server-proxy', 'microservice-architecture']
---

Un load balancer est comme un agent de la circulation qui serait chargé de gérer un pic de trafic à l'entrée d'un tunnel. Au lieu d'avoir une seule voie (serveur) par laquelle toutes les voitures passent sans aucune limitation, vous pouvez avoir un agent de police (load balancer), devant le tunnel, qui décide quelles voies (serveurs) les prochaines voitures doivent traverser.

À l'aide d'un load balancer, vous pouvez ajouter ou supprimer dynamiquement des serveurs derrière lui pour améliorer la disponibilité et la vitesse de votre application.

Si vous n'utilisez pas de load balancer et connectez directement les utilisateurs à un serveur spécifique, en cas de pic de trafic, le serveur peut tomber en panne. Avec un load balancer, il vous suffit de démarrer un nouveau serveur (créer une nouvelle voie) et commencer à envoyer des utilisateurs vers ce serveur nouvellement créé.

Pour ce faire, les load balancer peuvent utiliser différents types d'algorithme pour déterminer à quel serveur ils doivent envoyer une requête spécifique :

- Round robin : distribue uniformément toutes les demandes à tous les serveurs, sans analyser la taille/complexité de la requête
- Least connections : distribue les requêtes aux serveurs qui ont le moins de requêtes encore actives
- Et bien plus

Les load balancer peuvent également décider d'arrêter d'envoyer des requêtes à un serveur spécifique s'il est en panne : imaginez un accident de voiture sur une voie spécifique.

## Avantages d'un load balancer

- Downtime réduit
- Capacité de montée en charge accrue
- Redondance
