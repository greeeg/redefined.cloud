---
title: "Qu'est-ce qu'un Webhook ?"
description: "Un Webhook est comme une boîte postale utilisée par des applications tierces pour vous notifier lorsqu'un évènement se produit"
name: 'Webhook'
summary: ''
keywords: ['webhook']
relatedTerms: ['message-broker-message-queue', 'pub-sub', 'cron-job']
---

Les webhooks sont un moyen automatisé pour votre application ou des applications tierces de vous notifier lorsque des évènements se produisent, comme votre banque lorsqu'un achat en ligne est effectué avec votre carte.

Au lieu de vérifier manuellement votre solde toutes les heures (ce qui fait référence au polling), vous recevez des mises à jour en direct, au fur et à mesure qu'elles se produisent. Cela rend les webhooks beaucoup plus efficaces pour le fournisseur et le consommateur.

Un webhook est composé de 2 éléments :

- Un endpoint HTTP : l'adresse à laquelle la mise à jour ou la requête doit être envoyée
- Le payload : Informations à propos de l'évènement, qui peuvent être des paramètres GET ou le body d'une requête POST

Des applications telles que [Twilio](https://www.twilio.com/) ou [IFTT](https://ifttt.com/) sont principalement basées sur des webhooks pour fonctionner.

## Avantages des webhooks

- Intégrer facilement des applications tierces avec son application
- Éviter d'effectuer inutilement des requêtes régulièrement
