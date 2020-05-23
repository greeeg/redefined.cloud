---
name: 'Continuous integration'
shortName: 'CI'
summary: ''
keywords: ['continuous integration', 'ci/cd', 'ci']
---

Let's imagine that you and your friends want to build a car. You each agree to focus on building one part of the car, and then you'll come together once everyone's done and slap the whole thing together.

The problem with this approach is that you might all meet up with your finished parts and realize that they don't fit together. You had a plan, but as always things went wrong, so each of you had to make small tweaks to the components you built to make them work. Those small tweaks, though, mean that the parts work individually, but don't fit together for a thousand tiny reasons.

A better approach is continuous integration. A few times a day, you all take your stuff and put together the car with what you have to see if it fits. You'll find that some of your parts don't fit, but then the issue can be addressed quickly and easily because it's only *one* problem rather than a thousand like before.

CI is usually applied to software development but the same idea applies. The project is broken into parts and each team works on one part. A few times a day, they all update the master version of the project with the newest version of their part. That way, when two parts don't interact well, the issue is caught immediately and can be fixed before the problematic code gets used elsewhere.

Developers practicing continuous integration merge their changes back to the main branch as often as possible. The developer's changes are validated by creating a build and running automated tests against the build. By doing so, you avoid the integration hell that usually happens when people wait for release day to merge their changes into the release branch.

Continuous integration puts a great emphasis on testing automation to check that the application is not broken whenever new commits are integrated into the main branch.
