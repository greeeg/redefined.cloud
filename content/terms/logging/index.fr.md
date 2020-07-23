---
title: "Qu'est-ce que le Logging ?"
description: "Le Logging s'apparante au fait de prendre des notes de toutes les choses qui se passent dans votre journée dans un carnet."
name: 'Logging'
summary: ''
keywords: ['logs', 'logging']
relatedTerms: ['observability', 'tracing', 'profiling', 'monitoring']
---

Le Logging est comme écrire dans un carnet chaque fois que vous effectuez une tâche dans votre journée. Au final, vous avez un fichier de logs, votre carnet de notes, sur lequel vous pouvez ensuite revenir si vous avez besoin de clarifier quelque chose (une tâche que vous avez oubliée ou pas entièrement terminée) ou de créer des statistiques (en moyenne, combien de tâches complétez-vous chaque jour).

Le Logging peut souvent être confondu avec le [monitoring](#monitoring "Qu'est-ce que le Monitoring ?"), le [tracing](#tracing "Qu'est-ce que le Tracing ?") ou encore le [profiling](#profiling "Qu'est-ce que le Profiling ?").

Dans le cloud et dans le développement logiciel, tout peut être soumis à la journalisation: http demande des métadonnées entrantes (adresse IP, point de terminaison, durée, etc.), accès à la base de données (contrôle de sécurité) et plus encore. La journalisation peut vous aider à détecter les problèmes (journaux anormaux) et à résoudre les bogues en vous donnant du contexte.

D'un autre côté, il peut être tentant de consigner tout ce qui se passe dans vos services et applications afin que vous puissiez enregistrer et revenir sur tout ce qui s'est passé. Cependant, cette stratégie peut être très coûteuse et inefficace (trouver une aiguille dans une botte de foin).

## Avantages du Logging

- Monitor how your app is doing
- Troubleshoot bugs when they happen with some context
