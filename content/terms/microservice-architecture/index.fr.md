---
title: "Qu'est-ce qu'une architecture microservices ?"
description: "Une architecture Microservice est comme résoudre un problème avec un ensemble d'outils simples spécialisés au lieu d'un seul outil complexe multifonction."
name: 'Microservice architecture'
summary: ''
keywords: ['microservice architecture', 'microservice']
relatedTerms: ['monolith-architecture', 'service-mesh', 'serverless']
---

Imaginons que vous vouliez cuisiner un gâteau au chocolat. Avoir une architecture orientée microservice signifierait utiliser différents outils (un bol, une palette de cuisson, un moule à gâteau, etc.) qui ont tous une seule responsabilité et ne sont pas liés dans leur fonctionnement (vous n'avez pas besoin d'un bol pour utiliser un moule à gâteau).

On oppose généralement cette architecture à une [architecture monolithique](#monolith-architecture "Qu'est-ce qu'une architecture Monolith ?"), qui consisterait à utiliser un seul outil pour tout faire dans notre exemple, comme un thermomix.

Les microservices présentent plusieurs avantages par rapport aux monolithes :

- Parce qu'ils sont faiblement couplés, il est facile de mettre à jour/faire évoluer l'un d'eux sans les autres (en utilisant un bol différent sans affecter le fonctionnement du moule à gâteau).
- Dans le cas d'une montée en charge n'impactant qu'une partie de votre application, vous êtes en mesure d'augmenter les ressources disponibles pour cette partie uniquement (augmenter le nombre de moules sans augmenter le nombre de bols) et ainsi économiser de l'argent.
- Vous pouvez avoir différentes équipes travaillant sur différentes parties de votre application (travaillant avec le bol sans savoir comment fonctionne la palette.)

Ce type d'architecture a été popularisé par Netflix et AWS, qui ont fortement investis dans ce domaine et développent des outils pour cela.

## Avantages des microservices

- Des équipes indépendantes organisées autour des capacités métier
- Hautement maintenable et testable

## Inconvénients des microservices

- Nouveaux modèles de communication à mettre en place entre microservices
- Déterminer la responsabilité de la donnée entre microservices
