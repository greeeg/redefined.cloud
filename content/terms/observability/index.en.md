---
title: 'What is Observability?'
description: 'Observability is the capacity to provide answers to questions you never asked yourself before about an application or service.'
name: 'Observability'
summary: ''
keywords: ['observability', 'monitoring']
relatedTerms: ['monitoring', 'logging', 'tracing', 'profiling']
---

Monitoring is the activity of observing the state of a system over time. Monitoring provides automated checks that you can execute against a distributed system to make sure that none of the things you predicted signify any trouble. you are only looking for known issues.

proactive introspection of distributed systems for greater operational visibility.

Observability is about generating a deep understanding of what should be changed to improve your environment.

Observability is about providing context.

With observability, you can ask new questions about unknowns and if you’ve followed observability best practices, you should have the data you need to answer those questions (and a clear path to access that data) within your collected logs.

In order to have a foundation for observability, you need three things:

**Logs**: Logs are a verbose representation of events that have happened. Logs tell a linear story about an event using string processing and regular expressions. A common challenge with logs is that if you haven’t properly indexed something, it will be difficult to find due to the sheer volume of log data.

**Traces**: A trace captures a user’s journey through your application. Traces provide end-to-end visibility and are useful when you need to identify which components cause system errors, find performance bottlenecks, or monitor flow through modules.

**Metrics**: Metrics can be either a point in time or monitored over intervals. These data points could be counters, gauges, etc. They typically represent data over intervals, but sometimes sacrifice details of an event in order to present data that is easier to assimilate.
