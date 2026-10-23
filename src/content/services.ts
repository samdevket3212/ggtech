export type ServiceCategory = 'design' | 'development' | 'growth';
export type ServiceArtKind = '2d-3d' | 'game' | 'brand' | 'uiux' | 'web' | 'software' | 'marketing';

export interface Service {
  slug: string;
  number: string;
  name: string;
  /** Option label used by the contact form. */
  contactLabel: string;
  category: ServiceCategory;
  eyebrow: string;
  headline: string;
  summary: string;
  cardText: string;
  sectionHeading: string;
  body: string[];
  deliverablesLabel: string;
  deliverables: string[];
  approachHeading: string;
  approachBody: string;
  faqs: { question: string; answer: string }[];
  ctaHeading: string;
  ctaLabel: string;
  relatedProjects: string[];
  relatedServices: string[];
  seoTitle: string;
  seoDescription: string;
  art: ServiceArtKind;
  visualDirection: string;
}

export const serviceCategories: { id: ServiceCategory; number: string; label: string; heading: string; description: string }[] = [
  { id: 'design', number: '01', label: 'Design', heading: 'The art of standing out.', description: 'Visual thinking that gives ideas identity, shape, depth, and meaning.' },
  { id: 'development', number: '02', label: 'Development', heading: 'Ideas made functional.', description: 'Technical execution that turns thoughtful creative work into usable, scalable digital experiences.' },
  { id: 'growth', number: '03', label: 'Digital Growth', heading: 'Creative that connects.', description: 'Digital campaigns, content, and audience-focused marketing that extend the reach of great creative work.' },
];

export const services: Service[] = [
  {
    slug: '2d-3d-design',
    number: '01',
    name: '2D & 3D Design',
    contactLabel: '2D & 3D Design',
    category: 'design',
    eyebrow: 'Visual Design / Art / Motion',
    headline: 'Give your ideas another dimension.',
    summary:
      'From expressive 2D illustrations to immersive 3D environments, we create visual experiences that capture imagination, communicate ideas, and bring digital concepts to life.',
    cardText: 'Bringing ideas into focus through illustration, modeling, visual storytelling, and dimensional art.',
    sectionHeading: 'Visual storytelling without limits.',
    body: [
      'Every image carries a story. We approach 2D and 3D design as opportunities to shape personality, build atmosphere, and create something memorable.',
      "Whether you're exploring a new brand world, visualizing a product, or developing original digital assets, we focus on the details that make the result feel intentional.",
    ],
    deliverablesLabel: 'What we create',
    deliverables: [
      '2D Illustration and Digital Artwork',
      '3D Modeling and Texturing',
      '3D Product Visualization',
      'Character and Environment Art',
      'Motion Graphics and Animation',
      'Marketing and Campaign Visuals',
      'Creative Visual Concepts',
      'Digital Assets for Web, Apps, and Games',
    ],
    approachHeading: 'Concept. Form. Detail. Impact.',
    approachBody:
      'We establish a strong creative direction before developing the artwork, then refine its form, material, composition, and presentation.',
    faqs: [
      { question: 'Do you offer both 2D and 3D design?', answer: 'Yes. Projects can involve either discipline independently or combine them into a consistent visual direction.' },
      { question: 'Can you create assets for games, websites, or marketing?', answer: 'Yes. Artwork can be developed around the technical and visual needs of the intended platform.' },
    ],
    ctaHeading: "Let's bring your vision to life.",
    ctaLabel: 'Start a Design Project',
    relatedProjects: ['orbit', 'kinetic'],
    relatedServices: ['game-design', 'branding-logo-design', 'digital-marketing'],
    seoTitle: '2D & 3D Design Services',
    seoDescription: 'Illustration, 3D modeling, product visualization, character art and motion from GG Technology Media in Vista, California.',
    art: '2d-3d',
    visualDirection: 'Glossy sculptural shapes, wireframe models, illustration layers, material studies, dramatic light.',
  },
  {
    slug: 'game-design',
    number: '02',
    name: 'Game Design',
    contactLabel: 'Game Design',
    category: 'design',
    eyebrow: 'Games / Worlds / Interaction',
    headline: 'Design worlds worth getting lost in.',
    summary:
      "Games are more than screens and systems. They're experiences. We create compelling visual directions, game interfaces, characters, environments, and interactive concepts that make digital worlds feel alive.",
    cardText: 'Crafting interactive worlds, memorable characters, engaging interfaces, and meaningful player experiences.',
    sectionHeading: 'Built for imagination. Designed for players.',
    body: [
      'Memorable games combine visual identity, intuitive interaction, atmosphere, and meaningful creative decisions.',
      'Our game design work connects these elements to help shape coherent and engaging experiences.',
    ],
    deliverablesLabel: 'What we create',
    deliverables: [
      'Game Concept Development',
      'Game Art Direction',
      '2D and 3D Game Assets',
      'Character and Environment Concepts',
      'Game UI and HUD Design',
      'Menu and Interaction Design',
      'Level and Experience Concepts',
      'Gameplay Flow and Visual Prototyping',
      'Icons, Inventory Systems, and Interface Assets',
    ],
    approachHeading: 'Imagine the world. Understand the player. Design the experience.',
    approachBody:
      "We explore the game's visual language and intended interactions, develop concepts, and create assets or prototypes that support the broader game vision.",
    faqs: [
      { question: 'Can you help with game UI design separately?', answer: 'Yes. UI systems, menus, HUDs, icons, and player-facing interactions can be scoped as standalone projects.' },
      {
        question: 'Can you help with a game at the concept stage?',
        answer: "Yes. Early creative direction, visual references, concept artwork, and interaction planning can help establish a project's identity.",
      },
    ],
    ctaHeading: "Let's create your next world.",
    ctaLabel: 'Discuss a Game Project',
    relatedProjects: ['playstate', 'orbit'],
    relatedServices: ['2d-3d-design', 'ui-ux-design', 'software-development'],
    seoTitle: 'Game Design & Game Art Services',
    seoDescription: 'Game concepts, art direction, characters, environments, UI and HUD design from GG Technology Media in Vista, California.',
    art: 'game',
    visualDirection: 'Fictional sci-fi game worlds, neon-accented HUDs, environmental depth, immersive concept art.',
  },
  {
    slug: 'branding-logo-design',
    number: '03',
    name: 'Logo & Brand Identity',
    contactLabel: 'Logo & Brand Identity',
    category: 'design',
    eyebrow: 'Brand Strategy / Identity / Graphics',
    headline: 'Make your identity impossible to mistake.',
    summary:
      'Great brands are recognized before they say a word. We develop memorable logos and cohesive visual identities that communicate personality across digital and physical experiences.',
    cardText: 'Creating visual identities that express character, build recognition, and scale across every touchpoint.',
    sectionHeading: 'More than a logo. A complete visual language.',
    body: [
      'A strong identity brings clarity to what a brand stands for and consistency to how it shows up.',
      'We combine strategic thinking and creative exploration to build visual systems that feel distinctive, adaptable, and unmistakably yours.',
    ],
    deliverablesLabel: 'What we create',
    deliverables: [
      'Logo Design',
      'Logo Refinement and Redesign',
      'Brand Identity Systems',
      'Typography and Color Systems',
      'Brand Guidelines',
      'Business and Marketing Collateral',
      'Social Media Brand Assets',
      'Digital Brand Applications',
      'Brand Motion and Animated Logos',
    ],
    approachHeading: 'Discover the personality. Define the visual direction. Build recognition.',
    approachBody:
      'We explore what makes the brand distinctive, develop creative concepts, and refine the selected direction into a practical identity system.',
    faqs: [
      { question: 'Can you redesign an existing logo?', answer: 'Yes. We can refresh or completely rethink an existing visual identity based on the goals of the project.' },
      { question: 'Do you provide brand guidelines?', answer: 'Brand guidelines can be included so the final identity remains consistent across applications and teams.' },
    ],
    ctaHeading: 'Your next chapter deserves a stronger identity.',
    ctaLabel: 'Build Your Brand',
    relatedProjects: ['kinetic'],
    relatedServices: ['2d-3d-design', 'web-development', 'digital-marketing'],
    seoTitle: 'Logo & Brand Identity Design',
    seoDescription: 'Logo design, identity systems, typography, color and brand guidelines from GG Technology Media in Vista, California.',
    art: 'brand',
    visualDirection: 'Editorial identity systems, dramatic logo applications, posters, embossed typography, packaging-style mockups, bold colored backgrounds.',
  },
  {
    slug: 'ui-ux-design',
    number: '04',
    name: 'UI/UX Design',
    contactLabel: 'UI/UX Design',
    category: 'design',
    eyebrow: 'User Experience / Product Design / Interfaces',
    headline: 'Beautifully simple. Intentionally designed.',
    summary:
      'We design digital interfaces that balance visual distinction with effortless usability, helping people understand, navigate, and enjoy complex digital experiences.',
    cardText: 'Designing intuitive, elegant digital experiences that make interactions feel natural.',
    sectionHeading: 'Every interaction should feel considered.',
    body: [
      'Effective product design starts with understanding the people who will use it.',
      'We shape clear information structures, thoughtful user journeys, and polished visual interfaces that make technology feel intuitive.',
    ],
    deliverablesLabel: 'What we create',
    deliverables: [
      'Website UI/UX Design',
      'Mobile Application Design',
      'SaaS Product Interfaces',
      'Dashboard and Platform Design',
      'User Flows and Wireframes',
      'Interactive Prototypes',
      'Design Systems and Component Libraries',
      'UX Reviews and Interface Improvements',
      'Developer-Ready Design Handoff',
    ],
    approachHeading: 'Understand. Structure. Prototype. Refine.',
    approachBody:
      'We identify key user needs, design the experience architecture, explore visual solutions, and refine interactions through iterative feedback.',
    faqs: [
      { question: 'Do you design both websites and mobile apps?', answer: 'Yes. UI/UX design can cover responsive websites, web applications, mobile interfaces, and connected product ecosystems.' },
      {
        question: 'Can you work with our existing developers?',
        answer: 'Yes. We can prepare organized design files, components, specifications, and handoff materials for a separate engineering team.',
      },
    ],
    ctaHeading: "Let's design something people love using.",
    ctaLabel: 'Start a UI/UX Project',
    relatedProjects: ['flowstate', 'playstate'],
    relatedServices: ['web-development', 'software-development', 'branding-logo-design'],
    seoTitle: 'UI/UX & Digital Product Design',
    seoDescription: 'Website, app, SaaS and dashboard interface design, prototypes and design systems from GG Technology Media in Vista, California.',
    art: 'uiux',
    visualDirection: 'Oversized device mockups, layered UI screens, animated prototypes, expressive grids, elegant editorial product layouts.',
  },
  {
    slug: 'web-development',
    number: '05',
    name: 'Web Development',
    contactLabel: 'Web Development',
    category: 'development',
    eyebrow: 'Websites / Interactive Experiences / Engineering',
    headline: 'Websites built to make an impression.',
    summary:
      'A great website is where design, storytelling, and technology come together. We develop modern, responsive digital experiences that look exceptional and work seamlessly across devices.',
    cardText: 'Building responsive, high-performance websites that transform design concepts into memorable digital experiences.',
    sectionHeading: 'Beyond the ordinary browser experience.',
    body: [
      'We approach web development as an extension of creative design.',
      'From polished business websites to content-rich and interactive experiences, we focus on bringing the approved design to life without compromising usability or performance.',
    ],
    deliverablesLabel: 'What we build',
    deliverables: [
      'Custom Business Websites',
      'Creative Portfolio Websites',
      'Interactive Landing Pages',
      'Responsive Website Development',
      'CMS-Driven Websites',
      'E-commerce Experiences',
      'Frontend Development',
      'Website Redesign and Modernization',
      'Performance and Technical Optimization',
    ],
    approachHeading: 'Design integrity meets clean implementation.',
    approachBody:
      'We select the right architecture for the project, build reusable components, and test the experience across screen sizes and interaction states.',
    faqs: [
      { question: 'Can you build a website from an existing design?', answer: 'Yes. We can implement approved designs and translate them into responsive, functional pages.' },
      { question: 'Can you handle design and development together?', answer: 'Yes. Both can be managed as a connected project to maintain consistency from concept to launch.' },
    ],
    ctaHeading: "Let's build a better digital experience.",
    ctaLabel: 'Discuss Your Website',
    relatedProjects: ['flowstate', 'orbit'],
    relatedServices: ['ui-ux-design', 'software-development', 'digital-marketing'],
    seoTitle: 'Custom Web Development',
    seoDescription: 'Custom, responsive, CMS-driven and e-commerce websites built by GG Technology Media in Vista, California.',
    art: 'web',
    visualDirection: 'Browser windows, immersive page previews, responsive device transformations, animated grid systems, beautiful typography.',
  },
  {
    slug: 'software-development',
    number: '06',
    name: 'Software Development',
    contactLabel: 'Software Development',
    category: 'development',
    eyebrow: 'Applications / Platforms / Digital Products',
    headline: 'Thoughtful software. Real-world impact.',
    summary: 'We build custom digital applications and platforms that turn business needs and product ideas into useful, approachable technology.',
    cardText: 'Developing custom applications and platforms that connect thoughtful design with practical functionality.',
    sectionHeading: 'Designed around people. Engineered around purpose.',
    body: [
      'Software should help people do more with less friction.',
      'We bring product design and engineering together to build clear interfaces, functional workflows, and reliable digital systems.',
    ],
    deliverablesLabel: 'What we build',
    deliverables: [
      'Custom Web Applications',
      'Business Dashboards',
      'Internal Management Platforms',
      'SaaS Products',
      'Customer and Client Portals',
      'API Integrations',
      'Workflow Automation',
      'Product Prototypes and MVPs',
      'Existing Platform Improvements',
    ],
    approachHeading: 'Define the problem. Design the solution. Build with intention.',
    approachBody: 'We clarify priorities, map essential workflows, establish technical requirements, and develop the product iteratively.',
    faqs: [
      {
        question: 'Can you help turn an early software idea into a prototype?',
        answer: 'Yes. We can work from a concept through design, prototyping, and development depending on the project scope.',
      },
      {
        question: 'Do you work on existing software?',
        answer: 'Yes. Existing applications can be considered for redesign, functionality improvements, and selected new features following technical review.',
      },
    ],
    ctaHeading: "Have a product idea? Let's make it real.",
    ctaLabel: 'Discuss Your Software Project',
    relatedProjects: ['flowstate'],
    relatedServices: ['ui-ux-design', 'web-development', 'game-design'],
    seoTitle: 'Custom Software Development',
    seoDescription: 'Custom web applications, dashboards, SaaS products, portals and MVPs from GG Technology Media in Vista, California.',
    art: 'software',
    visualDirection: 'Interactive dashboard interfaces, layered application panels, abstract data visualization, structured technical grids.',
  },
  {
    slug: 'digital-marketing',
    number: '07',
    name: 'Digital Marketing',
    contactLabel: 'Digital Marketing',
    category: 'growth',
    eyebrow: 'Content / Campaigns / Digital Growth',
    headline: 'Make creativity work harder.',
    summary:
      'We combine strong visual storytelling with digital marketing strategies that help brands communicate clearly, reach relevant audiences, and turn attention into meaningful engagement.',
    cardText: 'Combining creative storytelling, content, and strategic campaigns to help brands reach the right audiences.',
    sectionHeading: 'Attention is earned through better ideas.',
    body: [
      'Good marketing starts with understanding the audience and presenting a compelling reason to care.',
      'Our approach connects creative direction, content production, campaign execution, and ongoing learning.',
    ],
    deliverablesLabel: 'What we do',
    deliverables: [
      'Digital Marketing Strategy',
      'Social Media Marketing',
      'Creative Campaign Development',
      'Campaign Graphics and Motion Assets',
      'Content Planning and Production',
      'Landing Page Design',
      'Search Visibility and SEO Support',
      'Paid Campaign Creative',
      'Performance Review and Optimization',
    ],
    approachHeading: 'Understand the audience. Create the message. Refine the results.',
    approachBody: 'We help connect the visual identity and message of a brand with the channels and content formats that serve its goals.',
    faqs: [
      {
        question: 'Can you manage both creative production and marketing?',
        answer: 'Yes. Creative assets and marketing activity can be planned together where included in the engagement scope.',
      },
      {
        question: 'Can digital marketing be combined with website or brand design?',
        answer: 'Yes. Integrated projects can keep messaging, visuals, and digital experiences consistent.',
      },
    ],
    ctaHeading: "Let's give your brand more momentum.",
    ctaLabel: 'Discuss Digital Marketing',
    relatedProjects: ['kinetic'],
    relatedServices: ['branding-logo-design', 'web-development', '2d-3d-design'],
    seoTitle: 'Digital Marketing Services',
    seoDescription: 'Campaign strategy, social content, paid creative and SEO support from GG Technology Media in Vista, California.',
    art: 'marketing',
    visualDirection: 'Modern campaign mockups, social content compositions, typography-led advertisements, motion graphics, clean analytical visuals.',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const servicesByCategory = (c: ServiceCategory) => services.filter((s) => s.category === c);
