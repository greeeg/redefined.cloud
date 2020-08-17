---
title: "Qu'est-ce qu'une base de données relationnelle ou SQL ?"
description: 'Une base de données relationnelle est un moyen de stocker des données sous forme de tableaux comme Microsoft Excel ou Google Sheet.'
name: 'Relational database'
shortName: 'SQL DB'
summary: ''
keywords: ['relational database', 'sql', 'database']
relatedTerms: ['in-memory-database', 'non-relational-database']
---

Une base de données relationnelle (ou SQL) est une base de données où l'information et les relations sont représentés à l'aide de tableaux tel que dans Microsoft Excel ou Google Sheet.

Chaque tableau (relation) est constitué de colonnes (attributs) et de lignes (enregistrements). Chaque information structurée est stockée dans une ligne du tableau. Chaque ligne possède la même liste d'attributs.

Ce type de base de données est particulièrement utile pour des données qui pourraient être représentées sous forme de tableau dans Google Sheet, tel qu'un inventaire, une liste de produits ou encore d'utilisateurs.

Avec des identifiants uniques appelées clé primaire, chaque ligne au sein de tableaux sont facilement identifiables et récupérées. De plus, on peut créer des relations entre différentes lignes de différents tableaux en utilisant des clés étrangères (pour lier un utilisateur à une commande par exemple).

## Cas d'usage pour les bases de données relationnelles

- Stocker tout type de données structurées (produits, transactions, etc.)

Un aspect important de ce type de base de données est la cohérence des données. Chaque colonne (attribut) peut avoir des contraintes à appliquer sur de nouvelles lignes respectant les mêmes règles comme l'unicité, le fait d'être requis ou le type de données. En effet, nous ne voulons pas que deux produits aient le même nom ou que l'un d'eux n'ait pas de prix.

Afin de travailler avec des bases de données relationnelles, nous utilisons des transactions, qui suivent les principes ACID. Les transactions sont un moyen de poser des questions ou de mettre à jour des données dans la base de données. Pour ce faire, nous utilisons un langage informatique appelé SQL (langage de requête structuré).

## Exemples de bases de données relationnelles

- [PostgreSQL](https://www.postgresql.org/)
- [MySQL](https://www.mysql.com/)
- [MariaDB](https://mariadb.org/)

En utilisant des services tels que AWS RDS ou GCP Cloud SQL, il est d'autant plus simple de mettre en place et maintenir ce type de base de données.
