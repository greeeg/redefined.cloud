---
title: 'What is Chaos engineering?'
description: 'Chaos engineering is about intentionally trying to break things to spot weaknessses before they create damage, like car crash tests.'
name: 'Chaos engineering'
summary: ''
keywords: ['chaos engineering']
relatedTerms: ['observability', 'monitoring', 'containers-and-docker']
---

Chaos engineering is like car crash tests where you break things intentionally in order to see how resilient your application is to those situations.

If you ever had to buy a car, chances are you would not agree to buy one which didn't go through crash tests, thus certifying that you would (maybe) survive in case of accidents. Indeed, knowing that makes you confident in your choice.

In the same spirit, most engineers don't like the idea of deploying systems and applications which were not tested for unexpected conditions and partial outages.

Chaos engineering is one of the solution Netflix engineers came up with in order to build trust among their teams. By practicing real-world crash tests (production experimentations), chaos engineering brings confidence in an application’s capacity to survive turbulent conditions in production.

It can also highlight potential weaknesses before they impact all users.

## Type of chaos engineering

- Infrastructure failures (storage, cpu, etc.)
- Network failures (DNS, bandwidth)
- Application failure (microservice down)

## Digging deeper in Chaos engineering

- Read [the Chaos principles](http://principlesofchaos.org/?lang=ENcontent) to master those testing techniques
- Learn more about [Netflix's practices](https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116) in terms of Chaos engineering
