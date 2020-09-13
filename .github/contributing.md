# Contributing

Thanks for contributing! Please take a look at the issues and PRs to see if there's already some discussion around any contribution you'd like to make.

### Translating terms or posts

If you would like to translate any term, post or page into your language, feel free to do so by opening a PR.

Add a Markdown file with the translation to the corresponding term or post folder. For example `index.fr.md` in `content/terms/domain-name-system/`.

If your language is not translated yet, you will need to follow these steps:

- Update the `src/utils/i18n.ts` file
- Add a locale file for your language in the `content/locales/` folder
- Update the `getStaticPaths` Next.js function for all pages in the `src/pages/[lang]/` folder for your language

### Adding new terms

Before adding any new term, start a discussion by opening an issue.

Then, create a PR and add a folder for your newly created term with a `index.en.md` Markdown file. You can add it to existing trees displayed on the homepage by updating the `content/trees.json` file.

### Fixing bugs or improving the overall website

This website is built using technologies like React.js, Next.js and styled-components. Feel free to suggest improvements or bug fixes.

## Getting started

Make sure to have Git and Node.js installed on your machine.

```sh
git clone git@github.com:greeeg/redefined.cloud.git

cd redefined.cloud

yarn

yarn dev
```
