---
title: "Qu'est-ce qu'une VM ou machine virtuelle ?"
description: "Une machine virtuelle est comme un bus d'écoliers que l'on utiliserait à la place de voitures individuelles pour conduire des enfants à l'école : ressources partagées, moins cher et facile à utiliser."
name: 'Virtual machine'
shortName: 'VM'
summary: ''
keywords: ['virtual machine', 'vm', 'compute', 'server']
relatedTerms: ['containers-and-docker', 'baremetal-server', 'load-balancer']
---

Une machine virtuelle est comme un bus scolaire. Au lieu de demander à chaque parent d'utiliser sa voiture (serveur physique) une fois par jour et ainsi payer l'essence supplémentaire, ils mutualisent leurs moyens en utilisant un bus scolaire, qui coûte moins d'essence et est plus facile à utiliser.

Les machines virtuelles sont des systèmes informatiques virtuels s'exécutant sur un hôte physique : des serveurs sur des serveurs. Comme les serveurs physiques, ils exécutent des applications et un système d'exploitation.

Ils peuvent être utilisés pour déployer plusieurs services isolés sur une seule plateforme. De cette façon, au lieu de payer pour de nombreuses petites boîtes que vous devez configurer manuellement, vous pouvez avoir une grande boîte sur laquelle s'exécutent plusieurs services de votre application.

Pour fonctionner, le serveur hôte physique exécute un hyperviseur qui est chargé de découper le gâteau en plusieurs parties pour toutes les machines virtuelles qui s'exécutent dessus (CPU, RAM, SSD, etc.)

## Avantages des machines virtuelles

- Moins cher que des serveurs dédiés ou [serveurs baremetal](#baremetal-server "Qu'est-ce qu'un serveur baremetal ?")
- Peut faire fonctionner plusieurs systèmes d'exploitation sur une même machine

## Machines virtuelles vs Containers

Les machines virtuelles sont souvent comparées aux [containers](#containers-and-docker "Qu'est-ce qu'un container et Docker ?"), les containers répondant à un objectif similaire : exécuter différentes parties isolées d'une application sur une seule machine.

Alors que le système d'un conteneur (comme Docker) s'exécute sur le système d'exploitation de la machine physique, les machines virtuelles ont leurs propres systèmes d'exploitation s'exécutant sur l'hyperviseur.

Ainsi, l'exécution de plusieurs containers sur une machine physique a tendance à être plus légère que l'exécution de plusieurs machines virtuelles. Cependant, les machines virtuelles semblent être un meilleur choix pour exécuter des applications qui nécessitent toutes les ressources et fonctionnalités du système d'exploitation.

Dans certains cas, les deux concepts peuvent s'exécuter l'un sur l'autre, des containers s'exécutant à l'intérieur d'une machine virtuelle sur un énorme ordinateur physique dans un datacenter.

## Aller plus loin avec les machines virtuelles

- Comprendre [qu'est-ce qu'une VM en 60 secondes](https://www.youtube.com/watch?v=N5gworNCJuY) grâce à Women Techmakers
- Regarder [en quoi les containers sont-ils différents des machines virtuelles](https://www.youtube.com/watch?v=TvnZTi_gaNc)
