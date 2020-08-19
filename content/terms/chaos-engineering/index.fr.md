---
title: "Qu'est-ce que le Chaos engineering ?"
description: "Le Chaos engineering consiste à intentionnellement tenter de causer des pannes pour détecter des faiblesses avant qu'elles ne causent des dommages, comme les crash tests automobiles."
name: 'Chaos engineering'
summary: ''
keywords: ['chaos engineering']
relatedTerms: ['observability', 'monitoring', 'containers-and-docker']
---

Le Chaos engineering est similaire aux crash tests automobiles durant lesquels on cherche à casser les choses intentionnellement afin de voir à quel point une application est résistante à ces situations.

Si jamais vous deviez acheter une voiture, il est probable que vous n'accepteriez pas d'en acheter une qui n'a pas subi de crash tests, certifiant ainsi de sa sécurité en cas d'accident. En effet, le savoir vous rend confiant dans votre choix.

Dans le même esprit, la plupart des ingénieurs n'aiment pas l'idée de déployer des systèmes et des applications qui n'ont pas été testés pour des conditions inattendues ou des pannes partielles.

Le Chaos engineering est une des solutions imaginées par des ingénieurs chez Netflix afin de bâtir de la confiance entre ses équipes techniques. En tentant de produire des pannes dans l'environnement de production, le Chaos engineering apporte une confiance nécessaire en l'application et sa capacité à supporter des conditions turbulentes.

Cela peut également mettre en évidence des faiblesses potentielles avant qu'elles n'affectent tous les utilisateurs.

## Types de Chaos engineering

- Pannes d'infrastructure (stockage, calcul, etc.)
- Pannes de réseau (DNS, bande passante)
- Pannes d'application (microservice non disponible)

## Aller plus loin avec le Chaos engineering

- Lire [les principes du Chaos](http://principlesofchaos.org/?lang=ENcontent) pour maîtriser ces techniques de test
- En apprendre plus sur [les pratiques de Netflix](https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116) en matière de Chaos engineering
