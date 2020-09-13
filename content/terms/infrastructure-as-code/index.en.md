---
title: 'What is Infrastructure as Code or IaC?'
name: 'Infrastructure as Code'
description: 'Infrastructure as code is like creating recipes that can be used to automate how we provision & manage anything running in the Cloud.'
shortName: 'IaC'
summary: ''
keywords: ['infrastructure as code', 'iac']
relatedTerms: ['cloud-provisioning']
---

In the good old time of the internet, setting up an infrastructure for your application to run meant setting up servers, configuring networking, installing software and configuring it for it to run properly.

This task was done manually by a sysadmin following a step-by-step procedure, hoping to make as few mistakes as possible. Moreover, it required a lot of effort and the human resources costs were important.

Infrastructure as Code is a way to automate how we setup and manage any given infrastructure by writing a human readable description of it.

Infrastructure as Code can be used to define infrastructures from simple S3 buckets with pre-defined IAM policies or an entire [Kubernetes cluster](#container-orchestration-and-kubernetes 'What is a Kubernetes cluster?'), on any cloud provider that you want.

Tasks that can be defined using IaC include:

- [Infrastructure provisioning](#cloud-provisioning 'What is Cloud provisioning?') for servers, networks & more
- Infrastructure configuration (installing services, managing apps)
- Application deployment

## Benefits of using Infrastructure as Code

- Define your entire infrastructure as readable files
- Version control infrastructure updates using tools like GIT
- Apply & rollback a large, complex infrastructure with a single line in your CLI
- Reuse pre-configured modules

## Examples of tools to do Infrastructure as Code

- [Terraform](https://www.terraform.io/)
- [AWS Cloudformation](https://aws.amazon.com/fr/cloudformation/)

## Digging deeper into Infrastructure as Code

- Watch [IBM explaining what is Terraform, a tool for IaC](https://www.youtube.com/watch?v=HmxkYNv1ksg)
- Read this [complete guide on getting started with Terraform from HashiCorp](https://learn.hashicorp.com/tutorials/terraform/infrastructure-as-code)
