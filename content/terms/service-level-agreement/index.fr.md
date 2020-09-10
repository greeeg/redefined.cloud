---
title: "Qu'est-ce qu'un Service Level Agreement ou SLA ?"
description: 'Un Service level agreement est un engagement que prend une entreprise envers ses clients en terme de qualité de service.'
name: 'Service level agreement'
shortName: 'SLA'
summary: ''
keywords: ['service level agreement', 'sla']
relatedTerms: ['service-level-objective', 'monitoring', 'observability']
---

SLA est l'acronyme de Service Level Agreement. C'est un document qui définie un engagement légal que prend une entreprise envers ses clients. Ce type de contrat définit notamment un certain nombre de [SLO](#service-level-objective "Qu'est-ce qu'un Service level objective ?"). Si ces objectifs ne sont pas atteints, le contrat n'est pas respecté et peut engendrer des compensations financières de la part de l'entreprise envers ses clients.

À titre d'exemple, AWS a dû dédommager ses clients impactés durant [une panne qui a causé des interruptions de ses services EC2 & RDS](https://aws.amazon.com/message/65648/) avec des crédits cloud. En effet, dans [leur SLA](https://aws.amazon.com/compute/sla/), ils assurent une disponibilité mensuelle de 99.99%, ce qui signifie que leurs services ne peuvent être indisponibles que 4,38 minutes maximum par mois.

Lorsque l'on travaille avec des providers cloud, il est important de vérifier leur SLA. En effet, dans le cas où votre produit est lui-même indispensable à vos clients, si votre provider cloud subit une panne, vous aussi, ce qui peut engager votre responsabilité en matière de dédommagement.
