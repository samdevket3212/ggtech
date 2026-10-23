export type ProjectTone = 'orbit' | 'playstate' | 'kinetic' | 'flowstate';
export type WorkFilter = 'all' | '2d-3d' | 'game' | 'branding' | 'uiux' | 'development';

export interface Project {
  slug: string;
  index: string;
  name: string;
  title: string;
  /** 'Studio Concept' until replaced by an authorized client project. */
  type: 'Studio Concept' | 'Client Project';
  categories: string[];
  disciplines: string[];
  filters: Exclude<WorkFilter, 'all'>[];
  summary: string;
  overview: string;
  idea: string;
  direction: string;
  focusAreas: string[];
  gallery: { caption: string; variant: number }[];
  relatedServices: string[];
  tone: ProjectTone;
  coverAlt: string;
  seoDescription: string;
}

export const workFilters: { id: WorkFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: '2d-3d', label: '2D / 3D' },
  { id: 'game', label: 'Game Design' },
  { id: 'branding', label: 'Branding' },
  { id: 'uiux', label: 'UI/UX' },
  { id: 'development', label: 'Development' },
];

export const projects: Project[] = [
  {
    slug: 'orbit',
    index: '01',
    name: 'ORBIT',
    title: 'A World in Motion',
    type: 'Studio Concept',
    categories: ['3D Art', 'Visual Direction', 'Interactive Concept'],
    disciplines: ['3D Art', 'Creative Direction', 'Interactive Visuals'],
    filters: ['2d-3d'],
    summary: 'An exploration of dimension, movement, and immersive visual storytelling.',
    overview:
      'ORBIT is a visual exploration of depth, motion, and dimensional storytelling. Built around sculptural forms and an atmospheric visual language, the concept explores how abstract 3D artwork can define the personality of a digital experience.',
    idea: 'ORBIT asks how far abstract, dimensional artwork can carry the personality of a digital experience before a single word of copy appears.',
    direction:
      'Soft metallic surfaces, deep shadows, fluid geometry, reflective materials, and dramatic lighting create a sense of movement and possibility.',
    focusAreas: ['Visual Concept Development', 'Dimensional Art', 'Material and Lighting Exploration', 'Motion Direction', 'Interactive Presentation Concept'],
    gallery: [
      { caption: 'Full-screen hero artwork', variant: 0 },
      { caption: 'Close-up material exploration', variant: 1 },
      { caption: 'Wide abstract environment', variant: 2 },
      { caption: 'Color and lighting studies', variant: 3 },
      { caption: 'Website application mockup', variant: 4 },
    ],
    relatedServices: ['2d-3d-design', 'game-design', 'web-development'],
    tone: 'orbit',
    coverAlt: 'A glossy violet sphere circled by a lime orbit ring against a deep black and violet atmosphere.',
    seoDescription: 'ORBIT, a GG Technology Media studio concept exploring dimension, motion and immersive 3D visual storytelling.',
  },
  {
    slug: 'playstate',
    index: '02',
    name: 'PLAYSTATE',
    title: 'Designed for Play',
    type: 'Studio Concept',
    categories: ['Game Design', 'Interface Design', 'Concept Art'],
    disciplines: ['Game Design', 'UI/UX', 'Digital Art'],
    filters: ['game', 'uiux'],
    summary: 'A futuristic game interface concept built around clarity, atmosphere, and player immersion.',
    overview:
      'PLAYSTATE explores an imagined futuristic gaming interface where atmosphere, information, and interaction work together. The goal is to develop an interface language that feels expressive while keeping player decisions clear.',
    idea: 'PLAYSTATE explores how a game interface can stay atmospheric and expressive while every decision a player makes remains easy to read.',
    direction: 'High-contrast interfaces, geometric HUD elements, futuristic typography, vivid lighting, and layered environmental imagery.',
    focusAreas: ['Game Art Direction', 'Interface Systems', 'HUD and Menu Concepts', 'Iconography', 'Player Experience', 'Visual Prototyping'],
    gallery: [
      { caption: 'Game environment hero', variant: 0 },
      { caption: 'Main menu concept', variant: 1 },
      { caption: 'HUD design', variant: 2 },
      { caption: 'Inventory interface', variant: 3 },
      { caption: 'Typography and icon system', variant: 4 },
    ],
    relatedServices: ['game-design', 'ui-ux-design', '2d-3d-design'],
    tone: 'playstate',
    coverAlt: 'A futuristic game scene in deep blue with a cyan perspective grid, a HUD panel and a glowing targeting reticle.',
    seoDescription: 'PLAYSTATE, a GG Technology Media studio concept for a futuristic game interface built around clarity and immersion.',
  },
  {
    slug: 'kinetic',
    index: '03',
    name: 'KINETIC',
    title: 'Identity in Every Direction',
    type: 'Studio Concept',
    categories: ['Brand Identity', '2D Graphics', 'Motion'],
    disciplines: ['Logo Design', 'Brand Identity', 'Motion Graphics'],
    filters: ['branding', '2d-3d'],
    summary: 'A bold identity experiment where typography, color, and movement work as one system.',
    overview:
      'KINETIC is an experimental identity system built around movement, contrast, and visual adaptability. It explores how a memorable visual language can move consistently across print-inspired graphics, digital interfaces, and motion.',
    idea: 'KINETIC tests whether one identity system can move between print, screens and motion without losing its voice.',
    direction: 'Bold typography, electric color combinations, modular geometry, and oversized graphic elements.',
    focusAreas: ['Logo Exploration', 'Visual Identity', 'Typography', 'Color Systems', 'Brand Applications', 'Motion Principles'],
    gallery: [
      { caption: 'Logo statement', variant: 0 },
      { caption: 'Color and typography composition', variant: 1 },
      { caption: 'Brand posters', variant: 2 },
      { caption: 'Digital applications', variant: 3 },
      { caption: 'Animated logo concept', variant: 4 },
    ],
    relatedServices: ['branding-logo-design', '2d-3d-design', 'digital-marketing'],
    tone: 'kinetic',
    coverAlt: 'An oversized black letter K on cream with an orange block and a lime disc.',
    seoDescription: 'KINETIC, a GG Technology Media studio concept for an identity system built on typography, color and motion.',
  },
  {
    slug: 'flowstate',
    index: '04',
    name: 'FLOWSTATE',
    title: 'Complexity Made Clear',
    type: 'Studio Concept',
    categories: ['UI/UX', 'Product Design', 'Software Interface'],
    disciplines: ['UI/UX', 'Product Design', 'Software Interface'],
    filters: ['uiux', 'development'],
    summary: 'A thoughtful digital product concept designed to make complex workflows feel simple.',
    overview:
      'FLOWSTATE explores a modern software dashboard designed to simplify complex information and workflows. The concept focuses on hierarchy, navigation, visual clarity, and a coherent component system.',
    idea: 'FLOWSTATE looks at how hierarchy, navigation and a consistent component system can make a dense workflow feel calm.',
    direction: 'Clean interface panels, warm neutral backgrounds, refined typography, subtle blue-violet accents, and thoughtful information density.',
    focusAreas: ['Product Experience', 'Dashboard Design', 'Navigation Architecture', 'Component Systems', 'Responsive Interfaces', 'Interface Prototyping'],
    gallery: [
      { caption: 'Main dashboard hero', variant: 0 },
      { caption: 'Navigation details', variant: 1 },
      { caption: 'Analytics interface', variant: 2 },
      { caption: 'Component system', variant: 3 },
      { caption: 'Mobile adaptations', variant: 4 },
    ],
    relatedServices: ['ui-ux-design', 'software-development', 'web-development'],
    tone: 'flowstate',
    coverAlt: 'Layered white software interface panels with violet data accents on a warm off-white background.',
    seoDescription: 'FLOWSTATE, a GG Technology Media studio concept for a software dashboard that makes complex workflows clear.',
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
