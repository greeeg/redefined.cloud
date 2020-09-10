---
title: 'What is Profiling?'
description: 'Profiling is about providing a statistic overview of past events to create profiles and catch bad performances or issues.'
name: 'Profiling'
summary: ''
keywords: ['profiling', 'logging', 'tracing']
relatedTerms: ['observability', 'logging', 'tracing', 'monitoring']
---

While [logging](#logging 'What is logging?') tells you what happened and in which order, profiling quantifies it by providing a statistical overview of an inventory of events and timings: how much time your code spent in each area, or how many times a body of code was executed. It helps you create a profile, just like profilers in the police. But instead of catching bad guys, you want to catch bad performances.

It tracks things like memory allocations and garbage collection. Most profilers that developers use are for when they’re having a very bad day.

To work, profilers take screenshots of your service/application at a fixed interval, which is called sampling. Each screenshot contains information like running threads count, CPU usage, etc. Then, all samples are aggregated into a report for you to analyse.

## Benefits of profiling

- Understanding what is causing a spike in CPU usage in your app
