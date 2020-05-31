---
title: 'What is Tracing?'
description: 'Tracing is like a black box inside a plane: used to understand how things went during a crash.'
name: 'Tracing'
summary: ''
keywords: ['tracing', 'logging', 'monitoring']
relatedTerms: ['observability', 'logging', 'monitoring', 'profiling']
---

Where logging could be compared to a flight manifest, tracing would be the black box used to understand how things went during a crash, to discover the chain of events that led to a problem.

Instead of providing a high level view of event-triggered logs, tracing provides a low-level view of a program's flow (what triggered what in the program, in which order, how long did each step lasts).

Where logs can be used to monitor a service, tracing can be used to debug it when a problem occurs: how did we get there, which function, for how long, parameters passed, etc. Typically a trace is useful for detailed examination of timing issues occurring within a code.
