---
title: 'What is Object Storage?'
description: ''
name: 'Object storage'
summary: ''
keywords: ['object storage', 'storage']
relatedTerms: ['content-delivery-network', 'load-balancer']
---

If you're building a web service or any other internet-related product, there's no doubt you're gonna have to deal with data, lots of it. And when there's data, there has to be storage where we can safely put it in order to access it at any given time.

One of the most common type of storage you might be familiar with is the filesystem, like the one you have on your computer. Filesystem works like a huge library with thousands of books. When looking at it from outside, it's just a massive amount of paper which doesn't make sense. However, using paths, you're able to easily find a book that you stored 2 months ago: 1st floor, lane 23, rack 4, book 5. Moreover, you can store any type of books, from encyclopaedias (text files), novels (videos) or mangas (mp3).

This way of working with data is quite interesting but isn't very scalable. If the library is full of books, you have to build a new one or extend the existing one.

Using object storage, you want all data you're storing to be stored in the same way and look the same, like boxes you would use when moving out. Those boxes always have the same three things:

- A unique identifier (a number you would write on the box)
- Some metadata (weight, size, etc.)
- The data itself (content of the box)

This way, when you're looking for a specific object, you just have to remember its unique identifier.

It can contain anything you want and this type of storage can theoretically work with an infinite amount of data, as long as the warehouse (cloud infrastructure behind it) has space for it. This way, you don't have to worry about if there's enough space left, or if your box is too big for it.

## Use cases for object storage

- Backups (Databases, media)
- Data archive
- Application assets (user pictures, videos, etc.)

Using services like AWS S3 with AWS Cloudfront, you're able to work with unlimited data in an effective way where it is made available across multiple regions, so your boxes are only few milliseconds away.
