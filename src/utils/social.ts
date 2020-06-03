export const getFacebookShareLink = (path: string): string => {
  const link = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;

  return `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
};

export const getTwitterShareLink = (path: string): string => {
  const link = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;

  return `https://twitter.com/intent/tweet/?url=${encodeURIComponent(
    link
  )}&hashtags=RedefinedCloud`;
};

export const getLinkedinShareLink = (path: string): string => {
  const link = `${process.env.NEXT_PUBLIC_BASE_URL}${path}`;

  return `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    link
  )}
  `;
};
