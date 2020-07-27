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

Dans le cadre d'une application Cloud, tout peut être sujet à la création de logs : métadonnées de requêtes HTTP entrantes (adresse IP, endpoint, durée, etc.), accès à la base de données et bien plus. Le Logging peut vous aider à détecter les problèmes (logs d'erreurs) et à résoudre les bugs en vous donnant du contexte (utilisateur concerné, requête concernée).

D'un autre côté, il peut être tentant de logger tout ce qui se passe dans vos services et applications afin que vous puissiez enregistrer et revenir sur tout ce qui s'est passé. Cependant, cette stratégie peut s'avérer être très coûteuse et inefficace (trouver une aiguille dans une botte de foin).

## Avantages du Logging

- Surveilleur l'état de votre application
- Disposer de contexte lors de la résolution de bugs
