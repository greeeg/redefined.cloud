const fs = require('fs');
const path = require('path');

require('dotenv').config();

const getTermsPaths = () => {
  const termsDirectory = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'terms'
  );

  const pages = [];

  fs.readdirSync(termsDirectory, {
    withFileTypes: true,
  })
    .filter((element) => element.isDirectory())
    .map((directory) => {
      fs.readdirSync(path.join(termsDirectory, directory.name)).forEach(
        (file) => {
          const regex = /index.([a-z-]+).md/g;
          const [_, lang] = regex.exec(file) || ['', ''];

          pages.push({
            path: `/${lang}/${directory.name}`,
            priority: 0.75,
          });
        }
      );
    });

  return pages;
};

const getPostsPaths = () => {
  const postsDirectory = path.resolve(
    __filename,
    '..',
    '..',
    'content',
    'posts'
  );

  const pages = [];

  fs.readdirSync(postsDirectory, {
    withFileTypes: true,
  })
    .filter((element) => element.isDirectory())
    .map((directory) => {
      fs.readdirSync(path.join(postsDirectory, directory.name)).forEach(
        (file) => {
          const regex = /index.([a-z-]+).md/g;
          const [_, lang] = regex.exec(file) || ['', ''];

          pages.push({
            path: `/${lang}/posts/${directory.name}`,
            priority: 0.75,
          });
        }
      );
    });

  return pages;
};

const generateSitemapLinks = (links) => {
  let base = ``;

  links.forEach((link) => {
    base += `
      <url>
        <loc>${process.env.NEXT_PUBLIC_BASE_URL}${link.path}</loc>
        <priority>${link.priority}</priority>
      </url>`;
  });

  return base;
};

const generateSitemap = () => {
  let links = [
    {
      path: '/en',
      priority: 1.0,
    },
    {
      path: '/en/about',
      priority: 0.75,
    },
    {
      path: '/en/list',
      priority: 0.75,
    },
    {
      path: '/en/terms-and-privacy',
      priority: 0.25,
    },
    ...getTermsPaths(),
    ...getPostsPaths(),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${generateSitemapLinks(links)}
    </urlset>`;
};

fs.writeFileSync(
  path.resolve(__filename, '..', '..', 'public', 'sitemap.xml'),
  generateSitemap()
);
