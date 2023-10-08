export const removeUrlParams = (url: string) => {
  const sanitized = url.split('&');
  if (!url.includes('&')) return url;

  return url.split('&')[0];
};
