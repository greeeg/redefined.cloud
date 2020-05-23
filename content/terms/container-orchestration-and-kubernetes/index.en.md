---
name: 'Container Orchestration and Kubernetes'
shortName: 'Kubernetes'
summary: ''
keywords: ['container', 'orchestration', 'kubernetes', 'docker']
---

Container orchestration is like a conductor during a classical music concert: coordinating how instruments play nicely together.

Working with containers make it easy to build, deploy and maintain different part of an application, as everything needed to run a part of it is self-contained and isolated from the rest.

In microservices architectures, applications can be made up of dozens or even hundreds of services, each being maintained by different engineers and deployed at different times, increasing the velocity of the organization.

However, if different services depend on each others, you need to coordinate deployments to make sure nothing will brake. During spikes in traffic, you also need to make sure the right services would scale up while others won't to be cost-effective.

Doing all of this manually can be a solution, until you're dealing with thousands of containers running at any given time.

Container orchestration solutions are here to help you coordinate those operations, from provisioning servers, scaling up or down services, load balancing or monitoring your infrastructure.

## Benefits of using container orchestration

- Manage containarized services at scale (100+)
- Automated scaling mechanisms
- Standardize deployment practises across an organization

One of the most used container orchestration system is Kubernetes. Kubernetes comes with its own vocabulary:

- **Cluster**: A group of nodes with at least one master node and several worker nodes, where the master node is the conductor and worker nodes are musician.
- **Master**: The machine coordinating all Kubernetes nodes.
- **Node:** A machine (virtual or physical) running one or multiple pods.
- **Kubelet**: A service running on each node responsible for applying Master's commands locally, ensuring the defined containers are started and running.
- **Pod**: A group of one or more containers running on a node.
