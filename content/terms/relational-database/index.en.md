---
title: 'What is a Relational database or SQL database?'
description: 'A Relational database is a way to store data in tables like Microsoft Word or Google Sheet.'
name: 'Relational database'
shortName: 'SQL DB'
summary: ''
keywords: ['relational database', 'sql', 'database']
relatedTerms: ['in-memory-database', 'non-relational-database']
---

A relational database (or SQL database) is a database where data and relationships are represented in tables like Microsoft Excel or Google Sheet.

Each table (relation) is made of columns (attributes) and rows (records). Each structured piece of data stored in a table is a row. All of them have the same attributes.

This type of database is particularly useful when dealing with data that you could represent in Google sheets, like an inventory, a list of products or users.

With unique identifiers called primary keys, each row in tables can be easily identified and queried. Moreover, we can create relations between different rows from different tables using foreign keys (linking a user to an order for example).

## Use cases for relational databases

- Storing any type of structured data (products, transactions, etc.)

One important aspect of this type of database is data consistency. Each column (attribute) can have constraints to enforce new rows respect the same rules like unicity, required column or data type. Indeed, we don't want two products to have the same name or one of them to not have a price.

In order to work with relational databases, we use transactions, which follow ACID principles. Transactions are a way to ask questions or update data in the database. To do so, we use a computer language called SQL (Structured query language).

Important relational databases are PostgresSQL, MySQL, Oracle or MariaDB. Using services like AWS RDS or GCP Cloud SQL, it is really easy to set up and maintain this type of database.
