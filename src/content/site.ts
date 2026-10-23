export const site = {
  name: 'GG Technology Media',
  shortName: 'GG',
  tagline: 'Design that moves. Technology that delivers.',
  shortTagline: 'Design beyond the ordinary.',
  closingLine: 'Design-led. Digital-minded.',
  location: 'Vista, California, USA',
  locality: 'Vista',
  region: 'CA',
  country: 'US',
  /** Replace with the production domain before launch. */
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com',
  /** Business contact details supplied by the studio. Shown in the footer, contact page, form errors and structured data. */
  email: 'ggtechdesigns@gmail.com' as string | null,
  phone: { display: '(949) 279-1456', tel: '+19492791456' } as { display: string; tel: string } | null,
  /** Leave empty until verified profiles exist. */
  social: [] as { label: string; href: string }[],
  description:
    'GG Technology Media is a design-led creative studio in Vista, California, offering 2D/3D design, game design, branding, UI/UX, web development, software development, and digital marketing.',
};

export const navigation = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Studio', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export const footerExplore = [{ label: 'Home', href: '/' }, ...navigation];

export const homeFaqs = [
  {
    question: 'Can GG Technology Media handle both design and development?',
    answer:
      'Yes. We work across creative design and technical development, making it possible to carry a project from early visual concepts through to a functional digital experience.',
  },
  {
    question: 'Can I hire the studio for design work only?',
    answer:
      'Absolutely. Projects can focus entirely on visual design, branding, game art, UI/UX, or 2D and 3D creative production.',
  },
  {
    question: 'What types of clients do you work with?',
    answer:
      'Our services are suited to startups, businesses, creative teams, game studios, and organizations developing new products or refreshing existing experiences.',
  },
  {
    question: 'Do I need a complete project brief before contacting you?',
    answer: 'Not at all. A clear challenge, rough idea, or early concept is enough to start a conversation.',
  },
  { question: 'Where is GG Technology Media based?', answer: 'GG Technology Media is based in Vista, California.' },
];

export const processStages = [
  {
    number: '01',
    name: 'Discover',
    summary: 'We listen, research, and understand the challenge before defining the direction.',
    heading: 'First, we understand the idea.',
    body: "We discuss your goals, audience, project requirements, references, and priorities. This creates a shared understanding of what we're creating and why.",
    deliverables: ['Project Discovery', 'Creative Brief', 'Scope Definition', 'Reference and Competitor Review', 'Requirements and Goals'],
  },
  {
    number: '02',
    name: 'Design',
    longName: 'Define & Design',
    summary: 'We turn insights into visual concepts, interactive systems, and clear creative decisions.',
    heading: 'Then, we give it shape.',
    body: 'We explore creative directions, establish visual foundations, and refine the selected concept into detailed designs or prototypes.',
    deliverables: ['Moodboards', 'Visual Concepts', 'Wireframes', 'UI/UX Designs', 'Brand Directions', '2D/3D Concepts', 'Interactive Prototypes'],
  },
  {
    number: '03',
    name: 'Develop',
    longName: 'Build & Refine',
    summary:
      'We translate approved designs into functional, responsive, reliable digital products where development is part of the scope.',
    heading: 'The details become the experience.',
    body: 'Depending on the project, this stage includes final creative production, animation, asset preparation, development, testing, and feedback-driven refinement.',
    deliverables: ['Final Design Assets', 'Production-Ready Artwork', 'Functional Website or Application', 'Interaction Implementation', 'Quality Assurance', 'Technical Handoff'],
  },
  {
    number: '04',
    name: 'Launch & Evolve',
    longName: 'Deliver & Evolve',
    summary: 'We refine, test, deliver, and help the experience grow beyond its first release.',
    heading: "Ready for what's next.",
    body: 'We prepare the final work for delivery or launch, document the essentials, and discuss any ongoing improvements, maintenance, or creative support that may be needed.',
    deliverables: ['Final Deliverables', 'Launch Preparation', 'Project Documentation', 'Source or Handoff Files as Agreed', 'Post-launch Support Planning'],
  },
];

export const contactOptions = {
  services: [
    '2D & 3D Design',
    'Game Design',
    'Logo & Brand Identity',
    'UI/UX Design',
    'Web Development',
    'Software Development',
    'Digital Marketing',
    'Something Else',
  ],
  budgets: ['Under $5,000', '$5,000–$15,000', '$15,000–$30,000', '$30,000+', 'Not sure yet'],
  timelines: ['As soon as practical', 'Within 1–3 months', '3+ months', 'Flexible / exploring'],
};
