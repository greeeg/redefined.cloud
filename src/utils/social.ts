export const getFacebookShareLink = (link: string): string => {
  return `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
};

export const getTwitterShareLink = (link: string): string => {
  return `https://twitter.com/intent/tweet/?url=${encodeURIComponent(link)}`;
};

export const getLinkedinShareLink = (link: string): string => {
  return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    link
  )}
  `;
};
