import { courseStructure } from './courseStructure.js';

export function getManualStats() {
  const groups = courseStructure.map((group) => ({
    ...group,
    availableChapters: group.chapters.filter((chapter) => chapter.status === 'Disponible').length,
  }));
  const totalChapters = groups.reduce((total, group) => total + group.chapters.length, 0);
  const availableChapters = groups.reduce((total, group) => total + group.availableChapters, 0);

  return {
    totalChapters,
    availableChapters,
    pendingChapters: totalChapters - availableChapters,
    availableDays: groups.filter((group) => group.availableChapters > 0).length,
    completeDays: groups.filter((group) => group.availableChapters === group.chapters.length).length,
  };
}
