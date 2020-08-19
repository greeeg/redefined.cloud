---
title: "Qu'est-ce qu'une base de données en mémoire ?"
description: 'Une base de données en mémoire est un moyen de stocker des informations pour un accès le plus performant et rapide possible.'
name: 'In-memory database'
summary: ''
keywords: ['memory database', 'database']
relatedTerms: ['relational-database', 'non-relational-database']
---

Une base de données en mémoire est une base de données où l'information est stockée dans la mémoire (RAM) de serveurs, en opposition aux bases de données traditionnelles qui stockent leurs informations dans des SSD ou disques durs.

Les bases de données en mémoire peuvent être des [base de données non relationnelles](#non-relational-database "Qu'est-ce qu'une base de données non relationnelle ?") ou des [base de données relationnelles](#relational-database "Qu'est-ce qu'une base de données relationnelle ?").

## Un usage axé sur les performances et la huate disponibilité

Ce type de base de données est particulièrement utile lorsqu'il s'agit de données qui doivent être consultées en temps réel ou très rapidement : pensez aux plateformes de jeux, aux enchères en temps réel ou aux systèmes logiciels embarqués. Cependant, cela a un prix : par défaut, les données stockées dans les bases de données en mémoire ne sont pas persistantes et peuvent être perdues en cas de panne.

## Avantages des bases de données en mémoire

- Faible latence
- Temps de réponse

## Cas d'usage pour les bases de données en mémoire

- Couche de mise en cache pour les bases de données persistantes
- Applications en temps réel (gaming, système bancaire, enchères)
- Systèmes logiciels embarqués

## Exemples de bases de données en mémoire

- [Memcached](https://memcached.org/)
- [Redis](https://redis.io/)
- [Apache Ignite](https://ignite.apache.org/)
