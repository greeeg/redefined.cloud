---
title: "Qu'est-ce que Docker et les containers ?"
description: "Un container est comme un camping car : une boîte contenant toutes les choses nécessaires à son fonctionnement, n'importe où."
name: 'Containers & Docker'
shortName: 'Container'
summary: ''
keywords: ['container', 'docker']
relatedTerms:
  ['microservice-architecture', 'virtual-machine', 'container-registry']
---

Un container est comme une boîte contenant tout le nécessaire pour exécuter une application dans le cloud : du code aux dépendances en passant par les outils et paramètres système.

Comme pour les containers dans le domaine du transport de marchandises, les ingénieurs n'ont pas besoin de penser sur quel porte-containers (serveur, infrastructure cloud) le container va être exécuté : il est autonome.

Il contient tous les éléments nécessaires à son fonctionnement. Ce sont des boîtes de forme et de taille standardisée permettant d'expédier des marchandises dans le monde entier. N'importe lequel d'entre eux peut être déplacé par les mêmes grues, navires, trains et camions, car ceux-ci n'interagissent qu'avec la boîte elle-même, quel que soit son contenu.

## Exécuter du code dans les mêmes conditions, quel que soit l'environnement

Les containers sont une réponse à une problématique croissante lorsque l'on travaille avec du code dans différents environnements : il est difficile de s'assurer que deux environnements exécutent du code dans les mêmes conditions.

Supposons que vous déployiez manuellement votre application sur un nouveau serveur. Vous devrez installer votre langage de programmation, pull votre base de code, installer des dépendances, probablement configurer un serveur web, ouvrir certains ports, etc.

Vous devrez peut-être le faire plusieurs fois à l'avenir, lors de la montée en charge de votre application ou lors du déploiement de nouvelles versions de celle-ci. Les risques de non-concordance de configuration ou de version de dépendance sont importants. À l'aide de containers, vous vous assurez que l'environnement dans lequel s'éxecute votre code reste le même au cours du temps. Ainsi, si vous parvenez à faire fonctionner un container sur votre machine, il fonctionnera certainement sur d'autres.

## Avantages des containers

- Déployer des services de manière cohérente dans tous les environnements
- Meilleure expérience de déploiement continu
- Encapsulation de votre code
- Prise en charge de nombreux langages de programmation et plateformes Cloud

Une des solutions les plus utilisées pour créer des containers est Docker. Docker vous aide à travailler avec des containers en suivant 3 principes :

- Docker file : Un fichier Docker est un moyen pour les ingénieurs de décrire comment une application est configurée et exécutée (j'ai besoin de Node.js 12 avec ces dépendances, avec ce port ouvert et cette commande démarrée).
- Docker Image : Une image Docker est comme un package ou une base, qui résulte de l'exécution par Docker de votre fichier Docker. Elle peut ensuite être utilisée pour exécuter votre application.
- Container : Un container Docker est une image Docker s'exécutant sur une machine sur laquelle Docker est installé de manière isolée et sécurisée. Vous pouvez avoir autant de containers en cours d'exécution sur une seule machine que la machine peut en gérer.

Adopter le paradigme des containers peut être aussi simple que de créer un seul container pour votre application monolithique. Cependant, ils se révèlent être particulièrement efficaces dans une architecture orientée microservices.

Lorsque vous travaillez avec de larges applications et services, il est possible de devoir gérer des dizaines d'images Docker et des centaines de containers s'exécutant sur différents serveurs. Dans cette situation, [l'orchestration de containers](#container-orchestration-and-kubernetes "Qu'est-ce que Kubernetes et l'orchestration de containers ?") permet de créer, mettre à jour et supprimer des containers de manière coordonnée avec des outils tels que Kubernetes.

## Aller plus loin avec les containers

- Regarder [comment mettre en place Docker en production](https://www.youtube.com/watch?v=6jT83lT6TU8)
- Regarder [comment créer des images Docker performantes](https://www.youtube.com/watch?v=vlS5EiapiII) avec Abby Fuller
- Regarder [en quoi les containers diffèrent des machines virtuelles](https://www.youtube.com/watch?v=TvnZTi_gaNc)
