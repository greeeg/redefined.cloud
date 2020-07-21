---
title: "Qu'est-ce que l'intégration continue ou CI ?"
name: 'Continuous integration'
description: "L'intégration continue s'apparente au fait d'assembler une voiture pièce par pièce tout en s'assurant qu'il n'y a pas de problème au lieu de tout assembler à la fin."
shortName: 'CI'
summary: ''
keywords: ['continuous integration', 'ci/cd', 'ci']
relatedTerms: ['continuous-delivery', 'logging', 'service-level-objective']
---

Imaginons que vous et vos amis décidiez de construire une voiture. Vous acceptez que chacun d'entre vous se consacre à l'élaboration d'une partie de la voiture, pour ainsi vous retrouver une fois que l'ensemble est terminé.

Le problème avec cette approche est qu'il y a de grandes chances que vous vous retrouviez avec des pièces indépendamment fonctionnelles mais qui ne s'emboîtent pas. Malgré un plan pré-établi, chacun d'entre vous a dû apporter des ajustements à sa pièce pour que celle-ci fonctionne. Ces petits ajustements, bien que limités, ont pour conséquence à l'échelle de la voiture de ne plus permettre son assemblage.

Une meilleure approche à ce type de problématique est l'intégration continue. Régulièrement, vous décidez de vous retrouver afin de comparer vos avancées et vérifier le fonctionnement de l'ensemble. Ainsi, vous êtes en mesure de parer aux ajustements faits par vos amis pour ne pas compromettre le projet dans sa globalité.

Les principes d'intégration continue sont largement utilisés dans le développement d'applications Cloud. Chaque équipe d'ingénieurs travaillant sur des services différents collaborent sur une même base de code. À chaque modification majeure, des tests automatisés peuvent être exécutés de manière à détecter des régressions ou nouvelles interactions entre services sources de bugs.

Généralement, les modifications des ingénieurs sont validées en créant un build et en exécutant des tests automatisés sur ce build. Ce processus de validation automatisé se révèle être particulièrement efficace dans l'amélioration continue de la qualité de code d'organisations, tout en évitant les désagréments d'une mise en production de code non fonctionnel.

## Aller plus loin avec l'intégration continue

- Lire [comment Google utilise les principes de CI à grande échelle](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45880.pdf) en effectuant plus de 150 millions de tests/jour
- En apprendre plus sur [les bonnes pratiques de CI/CD](https://www.digitalocean.com/community/tutorials/an-introduction-to-ci-cd-best-practices)
