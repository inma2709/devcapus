import { useEffect } from 'react';

/**
 * Componente para inyectar datos estructurados (Schema.org) en el head
 */
export default function StructuredData({ type = 'Course', data = {} }) {
  useEffect(() => {
    // Datos estructurados base para el curso
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": type,
      "name": "Curso HTML UF1841 - Por Inma Contreras",
      "description": "Manual completo para aprender HTML desde cero hasta nivel profesional. Creado por Inma Contreras, docente especializada en tecnología y desarrollo web.",
      "url": "https://tu-dominio.com/",
      "image": "https://tu-dominio.com/img/tema1/aprenderhtml.png",
      "provider": {
        "@type": "Organization",
        "name": "Inma Contreras - Docente Tecnología",
        "url": "https://tu-dominio.com"
      },
      "creator": {
        "@type": "Person",
        "name": "Inma Contreras",
        "jobTitle": "Docente Tecnología",
        "description": "Docente especializada en tecnología y desarrollo web",
        "knowsAbout": ["HTML5", "CSS3", "JavaScript", "Desarrollo Web", "Programación", "Tecnología Educativa"]
      },
      "instructor": {
        "@type": "Person",
        "name": "Inma Contreras",
        "jobTitle": "Docente Tecnología y Desarrollo Web"
      },
      "educationalLevel": "Beginner to Intermediate",
      "teaches": [
        "HTML5 semántico",
        "Estructura de documentos web",
        "Etiquetas y atributos HTML",
        "SEO básico",
        "Accesibilidad web",
        "Buenas prácticas en HTML"
      ],
      "courseMode": "online",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT20H",
        "instructor": {
          "@type": "Person",
          "name": "Inma Contreras",
          "jobTitle": "Docente Tecnología"
        }
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Estudiantes de desarrollo web",
        "educationalRole": "student"
      },
      "inLanguage": "es",
      "isAccessibleForFree": true,
      "license": "https://creativecommons.org/licenses/by-sa/4.0/",
      ...data
    };

    // Crear o actualizar el script de datos estructurados
    let structuredDataScript = document.getElementById('structured-data');
    
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.id = 'structured-data';
      structuredDataScript.type = 'application/ld+json';
      document.head.appendChild(structuredDataScript);
    }

    structuredDataScript.textContent = JSON.stringify(baseStructuredData);

    // Cleanup al desmontar
    return () => {
      const script = document.getElementById('structured-data');
      if (script) {
        script.remove();
      }
    };
  }, [type, data]);

  return null; // Este componente no renderiza nada visible
}

// Datos estructurados específicos para diferentes tipos de páginas
export const CourseStructuredData = () => (
  <StructuredData type="Course" />
);

export const LearningResourceStructuredData = ({ title, description, tema }) => (
  <StructuredData 
    type="LearningResource"
    data={{
      "name": title,
      "description": description,
      "learningResourceType": "lesson",
      "isPartOf": {
        "@type": "Course",
        "name": "Curso HTML UF1841"
      },
      "position": tema
    }}
  />
);

export const FAQStructuredData = ({ faqs = [] }) => (
  <StructuredData 
    type="FAQPage"
    data={{
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }}
  />
);