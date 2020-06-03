---
title: 'What is a VM or Virtual machine?'
description: 'A Virtual machine is like using a school bus instead of individual cars to bring children to school: shared resources, less expensive & easier to use.'
name: 'Virtual machine'
shortName: 'VM'
summary: ''
keywords: ['virtual machine', 'vm', 'compute', 'server']
relatedTerms: ['containers-and-docker', 'baremetal-server', 'load-balancer']
---

A Virtual machine is like a school bus. Instead of having every parent use their car (physical server) once a day paying for extra gas, they put their kids into a school bus, which costs less gas and is easier to use.

Virtual machines are guest virtual computer systems running on a physical host: computers on top of computers. Like physical computers, they run applications and an operating system.

They can be used to deploy multiple, isolated services on a single platform. This way, instead of paying for many small boxes that you have to set up manually, you can have one big box on top of which multiple services of your application run.

To work, the physical host computer runs a hypervisor which is responsible for slicing the cake in multiple parts for all virtual machines running on it (cpu, ram, ssd, etc.)

## Benefits of using virtual machines

- Cheaper than dedicated or [baremetal servers](#baremetal-server 'What is a Baremetal server?')
- Can run multiple operating system environments on one physical computer

## Virtual machines vs Containers

Virtual machines are often compared to [containers](#containers-and-docker 'What is a Container and Docker?'), as containers solve a similar objective: running different isolated parts of an application on a single piece of hardware.

While a container’s system (like Docker) sits on top of the physical computer's operating system, virtual machines have their own operating systems running on top of the hypervisor.

Thus, running multiple containers on one physical computer tend to be lighter than running multiple virtual machines. However, virtual machines seem to be a better choice for running apps that require all of the operating system’s resources and functionality.

In some cases, both concepts can run on top of each other, having containers running inside a virtual machine on a huge physical computer in a datacenter.

## Digging deeper into virtual machines

- Watch [what is a VM in 60 seconds](https://www.youtube.com/watch?v=N5gworNCJuY) thanks to Women Techmakers
- Watch [how containers differ from virtual machines](https://www.youtube.com/watch?v=TvnZTi_gaNc)
