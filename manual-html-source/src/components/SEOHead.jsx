import { useEffect } from 'react';

/**
 * Componente para gestión dinámica de SEO en cada página
 */
export default function SEOHead({ 
  title, 
  description, 
  keywords = [], 
  canonicalUrl,
  ogImage = `${import.meta.env.BASE_URL}img/tema1/aprenderhtml.png`,
  temaNumber 
}) {
  useEffect(() => {
    // Título optimizado para SEO
    const fullTitle = temaNumber 
      ? `${title} | Tema ${temaNumber} Curso HTML UF1841`
      : `${title} | Curso HTML UF1841 - Manual Completo`;
    
    document.title = fullTitle;

    // Meta description
    updateMetaTag('description', description);
    
    // Keywords (aunque Google no las use, otros buscadores sí)
    if (keywords.length > 0) {
      const keywordString = [
        'curso html',
        'aprender html', 
        'manual html',
        ...keywords
      ].join(', ');
      updateMetaTag('keywords', keywordString);
    }

    // Open Graph
    updateMetaTag('og:title', fullTitle, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    
    // Twitter Card
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);

    // Canonical URL si se proporciona
    if (canonicalUrl) {
      updateLink('canonical', canonicalUrl);
    }

  }, [title, description, keywords, canonicalUrl, ogImage, temaNumber]);

  return null; // Este componente no renderiza nada visible
}

// Función helper para actualizar meta tags
function updateMetaTag(name, content, attribute = 'name') {
  let meta = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  
  meta.content = content;
}

// Función helper para actualizar links
function updateLink(rel, href) {
  let link = document.querySelector(`link[rel="${rel}"]`);
  
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  
  link.href = href;
}
