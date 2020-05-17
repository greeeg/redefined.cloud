---
slug: 'domain-name-system'
title: 'Domain name system'
shortTitle: 'DNS'
description: ''
keywords: ['dns', 'domain name system']
published: true
---

DNS, which stands for Domain name system, is like a map you would use to associate cities with their geographical positions.

Imagine visiting a country or a state for the first time. Someone told you about this fantastic place where they sell amazing home-made ice creams. The problem is, except the name, you don't know anything about the place.

The first thing you would probably do is go to Google Maps, type the name of the place and wait for it to show you where it is. DNS plays the same role. From an easy-to-remember domain name, it is responsible for giving you the exact and not so easy-to-remember IP address (geographical position) of the website.

## Wait, I never signed for this, or did I?

Well, DNS is one of the most important part of how Internet works. So important that its existence goes back to the early days of the Internet, when it was still called ARPANET. At that time, all websites adresses where listed in a simple text file which was maintained by the Stanford Research institute. Without it, it would have been impossible for computers to discuss between each others. Nowadays, some servers around the world play this key role of maintaining key/value pairs of where a specific domain name should link to.

## It all starts with a domain name

Wether you're using a domain name for an ecommerce website, a serverless function or a database, you now understand the magic going on behind the curtain which makes everything possible. Because DNS servers are the first piece of how your users interact with your cloud architecture, they're really important. Indeed, if no one is able to route your traffic to the proper server, you basically disappear from the map. This is exactly what happened to Cloudflare on July, 2nd 2019, when [all websites using their DNS servers were not accessible for several hours](https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/).

## Making sure you're using the right DNS servers for your domain name

Choosing the right DNS service might be more important than you think. Indeed, if you bought your domain name a long time ago and never checked back which DNS servers you're using, now might be the right time. You want to make sure that you're using something like AWS Route 53, Google Cloud DNS, Cloudflare or something similar which is highly distributed & available.
