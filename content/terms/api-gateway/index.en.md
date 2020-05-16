API Gateway is like a front desk employee that would be responsible for answering customers requests and getting their orders in the back of the store.

Let's say you're building a store which sells furnitures. Given your business is still quite small and you only sell sofas, it's really easy for you to welcome your customers at the front door, find the sofa they're looking for and sell it to them. They all come for the same thing and you only have one ressource, sofas.

At some point, you might start to think about selling other things, chairs for example, because your business is expanding and you're getting more and more clients. When they enter into the store, you have to find out if they're here for a sofa or a chair, and then sell it to them.

It might get even bigger at any given time, and you might hire someone to handle chairs while you handle sofas. But now, if your customer is looking for a sofa and a chair, he has to ask two people and make two requests.

Imagine you're selling hundreds of items and people come to buy different things. They now have to ask multiple employees to fulfil they request.

Here is how the API gateway comes into place. The API gateway is like a front desk employee that would be responsible for taking the customer's request, asking the relevant employees what he needs and giving him directly all his items.

- Request routing, composition, protocol translation
- Aggregate results

Particularly important in a microservices (or service-oriented) architecture, where several teams handle several parts of thee architectures, while users want to see a unified version of the product.

The granularity of APIs provided by microservices is often different than what a client needs.

Services might use a diverse set of protocols, some of which might not be web friendly

The number of service instances and their locations (host+port) changes dynamically

You want to protect your APIs from overuse and abuse, so you use an authentication service and rate limiting.

Over time you’ll add some new API services and retire others, but your clients will still want to find all your services in the same place.

Benefits of using an API gateway

- Performance at scale
- Easy monitoring
