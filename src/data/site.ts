export const site = {
  name: 'Semiha K. Bali',
  shortName: '',
  professionalTitle: 'Computational Chemist',
  affiliation: 'Postdoctoral Researcher · Lawrence Livermore National Laboratory',
  email: 'semihakevserbali@gmail.com',
  biography:
    'I am a computational chemist working at the intersection of molecular simulation, drug discovery, and protein-small molecule interactions. My research combines molecular dynamics, binding free-energy calculations, quantum chemistry, and cheminformatics to investigate challenging questions in human health.',
  description:
    ' ',
  location: '',
  profiles: [
    { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=f4STODwAAAAJ&hl=en' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/semiha-kevser-bali' },
    { label: 'GitHub', url: 'https://github.com/halleyverse' },
  ],
  contentReady: true,
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'CV & Contact', href: '/contact/' },
] as const;
