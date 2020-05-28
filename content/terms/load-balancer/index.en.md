---
title: 'What is a Load Balancer?'
description: 'A load balancer is like a traffic cop directing traffic at the entrance of a tunnel to multiple lanes.'
name: 'Load balancer'
summary: ''
keywords: ['elb', 'load balancer', 'proxy', 'reverse proxy']
relatedTerms: ['api-gateway-server-proxy', 'microservice-architecture']
---

A load balancer is like a traffic cop that would be responsible for handling a spike of traffic at the entrance of a tunnel. Instead of having one lane (server) by which all cars pass through without any limitation, you can have a police officer (load balancer), in front of the tunnel, which decides which lanes (servers) next cars should pass through.

Using a load balancer, you can dynamically add or remove servers behind it to improve the availability and speed of your application.

If you don't use a load balancer and directly connect users to a specific server, when there's a spike in traffic, the server can go down. With a load balancer, you just have to boot up a new server (create a new lane) and start sending users to that newly created server.

To do so, load balancers can use different type of algorithm to determine to which server they should send a specific request:

- Round robin: distributes evenly all requests to all servers, without looking at how big/hard the request is to compute
- Least connections: distributes requests to servers which have the least number of still active requests
- And more

Load balancers can also decide to stop sending requests to a specific server if it's down: imagine a car accident on a specific lane.

## Benefits of using a load balancer

- Reduced downtime
- Scalability
- Redundancy
