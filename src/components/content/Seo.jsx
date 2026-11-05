import { useEffect } from 'react';

export default function Seo({ title, description }) {
  useEffect(() => {
    const fullTitle = `${title} | DevCampus`;
    document.title = fullTitle;

    const url = `https://devcampus.es${window.location.pathname}`;
    const values = {
      description,
      'og:title': fullTitle,
      'og:description': description,
      'og:url': url,
      'twitter:title': fullTitle,
      'twitter:description': description,
    };

    Object.entries(values).forEach(([key, value]) => {
      const selector = key.startsWith('og:')
        ? `meta[property="${key}"]`
        : `meta[name="${key}"]`;
      const element = document.querySelector(selector);
      if (element && value) {
        element.setAttribute('content', value);
      }
    });

    document
      .querySelector('link[rel="canonical"]')
      ?.setAttribute('href', url);
  }, [title, description]);

  return null;
}
