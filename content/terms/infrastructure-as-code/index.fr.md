---
title: "Qu'est-ce que l'Infrastructure as Code ou IaC?"
name: 'Infrastructure as Code'
description: "L'Infrastructure as Code est comme une liste de recettes de cuisine utilisée pour automatiser la création et la gestion de tout ce qui peut fonctionner dans le Cloud."
shortName: 'IaC'
summary: ''
keywords: ['infrastructure as code', 'iac']
relatedTerms: ['cloud-provisioning']
---

Aux débuts d'Internet, mettre en place une infrastructure pour votre application nécessitait de mettre en place des serveurs, des configurations réseau, installer des logiciels et les configurer afin que celle-ci puisse fonctionner correctement.

Cette tâche était réalisée manuellement par un sysadmin en suivant une procédure étape par étape, en espérant faire le moins d'erreurs possible. De plus, cela nécessitait un effort important et était source de coûts humains conséquents.

L'Infrastructure as Code est un moyen d'automatiser la manière dont on met en place et gère n'importe quelle infrastructure à l'aide d'une description textuelle de cette dernière, lisible pour des ingénieurs.

L'Infrastructure as Code peut être utilisé pour définir des infrastructures allant d'un simple bucket S3 avec des politiques IAM prédéfinies jusqu'à un [cluster Kubernetes](#container-orchestration-and-kubernetes 'What is a Kubernetes cluster?') entier, le tout sur votre Cloud provider préféré.

Avec l'IaC, il est possible de réaliser des tâches telles que :

- [L'Infrastructure provisioning](#cloud-provisioning "Qu'est-ce que le Cloud provisioning?") pour des serveurs, réseaux & bien plus
- La configuration d'infrastructure (installer des services, gérer des applications)
- Le déploiement d'applications

## Avantages de l'Infrastructure as Code

- Définir votre architecture à l'aide de fichiers lisibles
- Versionner les mises à jour de votre infrastructure à l'aide d'outils comme GIT
- Appliquer & annuler des modifications d'infrastructure à l'aide d'une simple ligne dans un CLI
- Réutiliser des modules préconfigurés

## Exemples d'outils d'Infrastructure as Code

- [Terraform](https://www.terraform.io/)
- [AWS Cloudformation](https://aws.amazon.com/fr/cloudformation/)

## Aller plus loin avec l'Infrastructure as Code

- Regarder [IBM expliquer ce qu'est Terraform, un outil de IaC](https://www.youtube.com/watch?v=HmxkYNv1ksg)
- Lire [ce guide complet sur les premiers pas avec Terraform de HashiCorp](https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code)
