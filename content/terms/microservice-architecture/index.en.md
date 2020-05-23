---
name: 'Microservice architecture'
summary: ''
keywords: ['microservice architecture', 'microservice']
---

Let's imagine you want to cook a chocolate cake. Having a microservice architecture would mean to use different tools (a bowl, a cooking paddle, a cake pan, etc) which all have a single responsibility and are not linked in the way they work (you don't need a bowl to use a cake pan).

We generally oppose this architecture to a monolith architecture, which would consist of using a single tool to do it all in our example, like a thermomix.

Microservices have several advantages over monoliths:

- Because they are loosely coupled, it's really easy to update/evolve one of them without the others (using a different bowl without affecting how the cake pan works).
- If you need to scale up and make more cakes and only need more cake pans, you can scale this microservice without scaling up the others, and thus saving money.
- You can have different teams working on different parts of your application (working with the bowl without knowing how the paddle works.)

This type of architecture was popularised by Netflix and AWS, which are heavily invested in that area and are developing tools for it.

## Benefits of using microservices

- Independent teams organized around business capabilities
- Highly maintainable and testable

## Drawbacks of using microservices

- Communication between microservices
- Who owns the data for a given microservice
