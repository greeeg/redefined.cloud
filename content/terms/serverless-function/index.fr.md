---
title: "Qu'est-ce qu'une fonction Serverless ou fonction Lambda ?"
description: 'Une fonction Serverless est un bloc de code déclenché lors de requêtes entrantes qui exécute une logique applicative.'
name: 'Serverless function'
summary: ''
keywords: ['serverless', 'serverless function', 'lambda function']
relatedTerms: ['serverless', 'api-gateway-server-proxy']
---

Les fonctions Serverless sont un des moyens les plus développés pour tirer parti du [paradigme Serverless](#serverless "Qu'est-ce que le Serverless ?"). Elles consistent en de petites entités autonomes de code qui peuvent être montées à l'échelle en fonction du nombre de requêtes/évènements entrants.

Les fonctions Serverless peuvent être considérées comme des [microservices](#microservice-architecture "Qu'est-ce qu'une architecture orientée microservices ?"), en opposition aux [monolithes](#monolith-architecture "Qu'est-ce qu'une architecture monolithique ?").

Elles sont déclenchées par des évènements qui peuvent être :

- Des requêtes HTTP
- Des évènements (mise en ligne d'un fichier, insertion en base de données, etc.)

Les fonctions Serverless sont particulièrement efficaces pour du traitement lourd ponctuel ou de petites logiques applicatives. En effet, au lieu de payer pour un serveur aux ressources importantes utilisées uniquement quelques heures par mois, vous pouvez mettre en place une fonction qui ne s'exécutera que lorsque nécessaire, limitant ainsi vos coûts par rapport à vos besoins.

Des providers cloud importants disposant de fonctions Serverless sont par exemple AWS Lambda, GCP Cloud functions ou Azure functions.
