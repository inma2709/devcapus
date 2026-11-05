import { nodeLessonSlugs } from './nodeCourseStructure.js';

export const NODE_MANUAL_NAVIGATION_MESSAGE = 'devcampus:node-manual:navigate';
export const nodeManualHomePath = '/manuales/node-fundamentos';

export function nodeManualPublicPath(slug) {
  return slug ? `${nodeManualHomePath}/lecciones/${slug}` : nodeManualHomePath;
}

export function isNodeLessonSlug(slug) {
  return typeof slug === 'string' && nodeLessonSlugs.has(slug);
}

export function nodeManualMessage(slug) {
  return { type: NODE_MANUAL_NAVIGATION_MESSAGE, slug: isNodeLessonSlug(slug) ? slug : null };
}

export function isNodeManualMessage(data) {
  return data && data.type === NODE_MANUAL_NAVIGATION_MESSAGE && (data.slug === null || isNodeLessonSlug(data.slug));
}

export function trustedOrigin(configuredOrigin, fallbackOrigin) {
  const candidate = configuredOrigin || fallbackOrigin;
  try {
    const parsed = new URL(candidate);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.origin : fallbackOrigin;
  } catch {
    return fallbackOrigin;
  }
}
