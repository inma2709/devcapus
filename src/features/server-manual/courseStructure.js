// Adaptador de compatibilidad para los componentes originales del manual Node.
// La estructura canónica vive en nodeCourseStructure.js y no contiene Express.
export {
  nodeCourseStructure as courseStructure,
  allNodeChapters as allChapters,
  getNodeChapter as getChapter,
} from './nodeCourseStructure.js';
