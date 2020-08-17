---
title: "Qu'est-ce que l'Object storage ?"
description: "L'Object storage s'apparente au stockage de fichiers dans des cartons identiques étiquetés par rayonnage dans un entrepôt : faciles à retrouver et scalable à l'infini"
name: 'Object storage'
summary: ''
keywords: ['object storage', 'storage']
relatedTerms: ['content-delivery-network', 'load-balancer']
---

Si vous décidez de créer une application Cloud, il ne fait aucun doute que vous devrez gérer des données en grande quantité. Il est primordial que le stockage de ces données soit scalable, sécurisé et hautement disponible afin de pouvoir y accéder à tout moment.

L'un des types de stockage les plus courants que vous connaissez sans doute est le file system, comme celui que vous avez sur votre ordinateur. Le file system fonctionne comme une immense bibliothèque avec des milliers de livres. De l'extérieur, ce n'est qu'une immense quantité de papier qui n'a pas de sens. Cependant, en utilisant des répertoires et des chemins d'accès, vous pouvez facilement trouver un livre que vous avez stocké il y a 2 mois.

Ce fonctionnement est particulièrement pertinent à l'échelle d'un disque dur mais est peu scalable. En effet, l'organisation de vos fichiers est dépendante des disques durs sur lesquels ils sont enregistrés. Sans système de réplication de données, si la machine sur laquelle le disque dur est installé tombe en panne, vos données ne sont plus accessibles.

Avec l'object storage, pour chaque fichier stocké, la notion de disque dur et de chemin d'accès n'existe pas. Tous les fichiers sont représentés de manière uniforme telles des cartons de taille similaire avec 3 éléments :

- Un identifiant unique (qui vous permettrait de reconnaitre un carton par rapport à un autre)
- Des métadonnées (taille, date de création, etc.)
- Les données elles-mêmes (contenu de la boîte)

De cette manière, il ne vous suffit que de connaitre l'identifiant unique de votre fichier afin de le retrouver.

L'object storage permet de stocker tout type de données avec une montée à l'échelle théorique infinie. Tant que l'infrastructure cloud derrière ce système dispose d'espace, votre application peut continuer à gagner en popularité sans problème.

## Cas d'usage pour l'Object storage

- Backups (base de données, médias)
- Archives
- Fichiers mis en ligne sur votre application (photos de profil, vidéos, etc.)

En utilisant des services tels que AWS S3 avec AWS Cloudfront, vous êtes en mesure de disposer d'espace inifini pour vos données tout en les rendant accessible de manière efficace à travers plusieurs régions.
