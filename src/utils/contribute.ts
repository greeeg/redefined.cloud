export const getTermContributeLink = ({
  term,
  lang,
}: {
  term: string;
  lang: string;
}) => {
  return `https://github.com/greeeg/redefined.cloud/edit/master/content/terms/${term}/index.${lang}.md`;
};

export const getRepositoryLink = () => {
  return 'https://github.com/greeeg/redefined.cloud';
};
