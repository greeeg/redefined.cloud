---
title: 'What is Infrastructure as Code or IaC?'
name: 'Infrastructure as Code'
description: 'Infrastructure as code is a way to provision and manage any cloud services.'
shortName: 'IaC'
summary: ''
keywords: ['infrastructure as code', 'iac']
relatedTerms: ['cloud-provisioning']
---

In the good old time of the internet, creating an infrastructure consisted in setting up every single server, operating system, config files and so on.
This procedure was done manually by a sysadmin following a step-by-step procedure, hopping to write as few mistakes as possible.

Infrastructure as Code is here to help by automating setup and management by writing a human readable description of the wanted infrastructure.
You can ask to create an S3 bucket with pre-defined IAM policies, or an entire Kubernetes cluster, on any cloud provider that you want.

## Benefits of using Infrastructure as code

- Save your entire infrastructure on files and git
- Apply and rollback a large, complexe infrastructure with a single line in your CLI
- Reuse pre-configured modules

## Examples of tools to do Infrastructure as code

- [Terraform](https://www.terraform.io/)
- [AWS Cloudformation](https://aws.amazon.com/fr/cloudformation/)
