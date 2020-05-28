---
title: 'What is Continuous delivery or CD?'
description: 'Continuous delivery is like serving meals plate by plate instead of waiting for everything to be ready.'
name: 'Continuous delivery'
shortName: 'CD'
summary: ''
keywords: ['continuous delivery', 'ci/cd', 'cd']
relatedTerms:
  [
    'continuous-integration',
    'service-level-agreement',
    'service-level-objective',
  ]
---

Continuous delivery is an engineering practise in which you want to reduce the time between writing the first line of code and deploying it live to customers in a safe and reliable way.

Imagine Bob and Jane who both own a renown ice cream shop with exotic flavours. Each day, they have hundreds of customers who come to buy their ice creams.

Bob always fears that something can go bad during the day so he like to prepare all his ice cream in the morning. This way, he and his team do not have to think about creating new ones before the next day.

On the other hand, Jane likes to progressively prepare her ice cream throughout the day, depending on urgent needs or a small number of clients.

For Halloween, they both decided to create a special pumpkin ice cream. What they don't know is that their pumpkin delivery in the morning was bad quality. When they open their respective stores, they discover it. Jane is really quick to react, she decides to prepare new ones and stop selling the bad ones. However, Bob is in a really bad situation where he basically have to wait for the next day or react to something he's not prepared for.

In this example, Jane is following continuous delivery best practises where Bob is not. Instead of having slow release cycles, Jane automated her release process so she can deliver changes at any point in a sustainable way.

In an engineering environment, it would mean having automated testing and builds when pushing new code to your source control system, to guarantee everything is ready to be shipped.

With [continuous deployment](#continuous-deployment 'What is Continuous deployment?'), you can go one step further and automate the way your code is released on your production server, without any human interaction.

## Digging deeper in Continuous delivery

- Learn more about [the difference between Continuous delivery & Continuous integration with Atlassian](https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)
- Read more about [a commit life in a continuous delivery pipeline at LeBonCoin](https://medium.com/leboncoin-engineering-blog/leboncoin-commits-life-960a86cd35ff)
