---
title: "Qu'est-ce que le Profiling ?"
description: 'Le Profiling consiste à fournir un aperçu statistique des événements passés pour créer des profils et détecter de mauvaises performances ou des problèmes.'
name: 'Profiling'
summary: ''
keywords: ['profiling', 'logging', 'tracing']
relatedTerms: ['observability', 'logging', 'tracing', 'monitoring']
---

Alors que le [logging](#logging "Qu'est-ce que le Logging ?") permet de savoir ce qui s'est produit et dans quel ordre, le profiling permet de quantifier cela et d'apporter un aperçu statistique de ces évènements et timestamp associés : combien de temps votre code a t-il passé dans ce service ou combien de fois cette fonction a t-elle été appelée. Cela vous aide à créer des profiles, tout comme les profilers dans la police. Au lieu de chercher à identifier des malfrats, vous cherchez à identifier la source de performances dégradées.

Le Profiling permet de suivre des éléments tels que l'allocation de mémoire et le garbage collection. Leur usage se révèle être le plus pertinent lors de pannes importantes.

Pour travailler, les profileurs prennent des captures d'écran de votre service / application à un intervalle fixe, appelé échantillonnage. Chaque capture d'écran contient des informations telles que le nombre de threads en cours d'exécution, l'utilisation du processeur, etc. Ensuite, tous les échantillons sont regroupés dans un rapport que vous pouvez analyser.

## Avantages du Profiling

- Comprendre la cause d'un pic d'utilisation du processeur dans votre application
