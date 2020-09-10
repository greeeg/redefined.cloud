---
title: 'Monitoring expliqué : quelle est la différence entre Logging, Tracing et Profiling?'
description: 'Connaitre les outils à notre disposition afin de gagner en visiblité dans un système Cloud et nos différents services.'
tag: 'Monitoring'
date: '2020-06-08'
---

Alors que beaucoup d'organisations et d'ingénieurs évoluent vers un nouveau paradigme qui change la façon dont nous concevons et exploitons des applications Cloud, le besoin d'un [monitoring](#monitoring "Qu'est-ce que le Monitoring Cloud ?") et d'une [observability](#observability "Qu'est-ce que l'observability ?") efficaces est encore plus important pour atteindre des objectifs de fiabilité et de satisfaction utilisateurs.

En effet, avec le Cloud Computing, la visibilité au sein de nos services est essentielle, plus particulièrement en ce qui concerne les [containers](#containers-and-docker "Qu'est-ce que Docker et un container ?"), les [microservices](#microservice-architecture "Qu'est-ce qu'un microservice ?") et les architectures distribuées. Alors qu'il apparait comme difficile d'imaginer un avion voler sans aucun moyen de connaître l'état de ses systèmes embarqués, il est encore plus dur d'imaginer une flotte d'appareils voler au dessus de zones habitées sans tours de contrôle pour aiguiller les pilotes et monitorer l'ensemble.

De ce point de départ, nous devrions être d'accord sur le fait que le monitoring est essentiel car :

- Des problèmes surgiront, même avec les meilleures applications conçues par les meilleurs ingénieurs
- Avec des architectures distribuées apparaissent des problèmes distribués, qui peuvent avoir un impact significatif lorsque l'on est pas préparé à les détecter et y faire face
- Cela laisse apparaître les erreurs tôt et offre des pistes d'améliorations

En considérant tous ces éléments, par quoi devrions-nous commencer et quelles sont les différences entre le Logging, Tracing et Profiling ?

## Logging : prendre des notes de tous les évènements se produisant dans un système

Commençons par la façon la plus simple de comprendre le comportement d'un système : les logs.

Un log est un enregistrement d'événements se produisant au fil du temps : une capture d'écran de quelque chose associée à une date.

![Une liste de logs affichés dans Datadog](/monitoring-explained-differences-logging-tracing-profiling/datadog-logs.jpg)

Une liste de logs affichés dans Datadog

Un manifeste de vol est un bon exemple de ce principe : on enregistre la liste de tous les passagers et membres d'équipage à bord d'un appareil avant le départ afin de connaître le nom de toutes les personnes en vol à tout instant.

Dans le contexte d'applications Cloud, le logging peut être utilisé pour enregistrer des données sur les requêtes entrantes (durée, statut, utilisateur concerné), requêtes en base de données, usage du load balancer et bien plus. Cela nous donne des informations précieuses lorsque des bugs surviennent qui permettent de déterminer la raison d'une baisse de performances ou d'une panne.

Bien que la tentation de logger tout ce qui se passe dans un système est grande, cette stratégie peut se révéler onéreuse et inefficace. Il faut trouver le juste milieu entre tout logger et ne rien logger de manière à disposer de suffisamment de contexte pour que cela soit utile.

Le logging consiste en plusieurs étapes :

- Collecte & Ingestion : lorsque vous générez des logs dans différents services, vous avez besoin d'un emplacement central où les envoyer
- Traitement : les logs ingérés sont enrichis de métadonnées et d'attributs pour une utilisation future
- Indexage : les logs sont segmentés en groupes pour générer des métriques et des tableaux de bord

Avec des outils tels que la [ELK stack](https://www.elastic.co/what-is/elk-stack), [Datadog](https://docs.datadoghq.com/logs/) ou encore [AWS CloudWatch](https://aws.amazon.com/cloudwatch/), vous êtes en mesure de générer des informations pertinentes à partir d'énormes quantités de logs provenant de centaines de services différents.

### Aller plus loin avec le Logging

- En apprendre plus à propos de la [Elastic stack](https://logz.io/learn/complete-guide-elk-stack/#intro) pour collecter, agréger et analyser des logs à l'aide d'Elasticsearch, Logstash et Kibana
- Découvrir comment la solution de Logging d'AWS, [AWS CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_architecture.html), fonctionne
- Lire comment des services tels que [Datadog](https://docs.datadoghq.com/logs/) permettent de collecter des logs et de les utiliser pour monitorer votre application

## Tracing : le parcours d'une requête à travers tout un système

Bien que le logging par service soit un bon moyen d'introspection, il n'est pas suffisant pour donner une vue d'ensemble d'une requête se propageant à travers une architecture distribuée. Dans une architecture orientée microservices, une requête est le résultat de nombreuses interactions entre différentes entités (API, bases de données, message queues) qui peuvent toutes être source d'erreurs.

Le Tracing agit comme une boîte noire lors d'un crash aérien : il permet de comprendre comment les choses se sont déroulées durant le crash, découvrir la chaîne d'évènements qui a conduit au problème.

Il fournit une vue bas niveau pour comprendre :

- ce qui a déclenché quoi dans le programme
- avec quels arguments
- dans quel ordre
- combien de temps a duré chaque étape

Il permet de découvrir rapidement la source de baisses de performances ou bien de trouver la cause de pannes lorsqu'elles se produisent.

Le résultat produit par le Tracing peut être visualisé de deux manières :

- Traces : cela ressemble à un flame graph avec des bandes et leurs métadonnées associées
- Service maps : cela ressemble à un nuage de noeuds avec des liens symbolisant les flux de requêtes

![Exemple d'une trace distribuée avec la ELK stack](/monitoring-explained-differences-logging-tracing-profiling/distributed-tracing.png)

Exemple d'une trace distribuée avec la ELK stack

Avec des outils tels que [Open Tracing](https://opentracing.io/), [AWS X-Ray](https://aws.amazon.com/xray/) ou encore [Zipkin](https://zipkin.io/), il est possible de créer des traces et service maps pour bénéficier d'un contexte plus riche et plus pertinent lors de la résolution de pannes.

### Aller plus loin avec le Tracing

- Comprendre [comment Uber utilise le Tracing distribué](https://www.youtube.com/watch?v=EW9GjQNcyzI) pour faire face à la complexité associée aux microservices
- Regarder [comment Lyft a mis en place et utilise le Tracing distribué](https://www.youtube.com/watch?v=URCLeycMrhU)
- Lire [comment Netflix a construit des outils d'observability](https://netflixtechblog.com/lessons-from-building-observability-tools-at-netflix-7cfafed6ab17) pour mieux comprendre ses systèmes
- En apprendre plus sur des outils tels que [Open Tracing](https://opentracing.io/) et [Jaeger Tracing](https://www.jaegertracing.io/)

## Profiling & Metrics : mesurer l'état d'un système à travers le temps

Le Profiling et les metrics sont les dernières pièces du puzzle du Monitoring. Ensemble, ils fournissent un aperçu statistique de la santé d'un système et des événements suivis au fil du temps.

Le Profiling logiciel permet de créer des profils tout comme les profileurs dans la police. Au lieu de chasser des malfrats, il permet de mettre la main sur de mauvaises performances.

![Des metrics affichée dans Grafana à l'aide de Prometheus](/monitoring-explained-differences-logging-tracing-profiling/metrics-and-profiling.png)

Des metrics affichée dans Grafana à l'aide de Prometheus

Les profils vont de la mesure bas niveau de l'utilisation d'un processeur aux mesures de niveau supérieur comme la latence d'un service. Lorsqu'ils sont aggrégés et observés ensemble, ce sont des signaux puissants qui donnent une vue globale d'un système et peuvent aider à détecter des problèmes.

Comme pour le Logging, il est facile de penser que plus vous aurez de metrics, mieux sera votre Monitoring. Bien que cela soit tentant, il est plus pertinent de mesurer les choses qui affectent directement les utilisateurs de votre application afin de pouvoir détecter et alerter efficacement les ingénieurs si nécessaire.

Avec des outils tels que [Prometheus](https://prometheus.io/), [Zabbix](https://www.zabbix.com/) ou encore [Datadog](https://docs.datadoghq.com/tracing/profiling/?tab=java), il est possible de construire des profils et metrics pour améliorer la façon dont vous surveillez vos services et votre infrastructure sous-jacente.

### Aller plus loin avec le Profiling & les metrics

- En apprendre plus sur [les signaux en or SRE](https://medium.com/faun/how-to-monitor-the-sre-golden-signals-1391cadc7524) tels que décrits par Steve Mushero
- Lire [l'introduction de Digital Ocean sur le Monitoring & l'Alerting](https://www.digitalocean.com/community/tutorials/an-introduction-to-metrics-monitoring-and-alerting)

## En conclusion

Lorsqu'ils sont utilisés ensemble, le Logging, le Tracing et le Profiling peuvent vous donner des informations essentiels sur vos services et systèmes : détecter les anomalies lorsqu'elles se produisent et comprendre rapidement la cause principale de problèmes de performances.

Bien que le Monitoring soit idéal pour répondre aux questions que vous vous posez déjà sur votre application, il ne se révèle utile que lorsque votre système tombe en panne de manière prévisible. [L'Observability](#observability "Qu'est-ce que l'Observability ?") est un moyen d'aller encore plus loin pour gagner en visibilité dans un système.
