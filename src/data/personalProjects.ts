import type { ImageMetadata } from 'astro';
import chemPlumDrawing from '../assets/projects/chemplum-drawing.png';

type ImageVisual = {
  kind: 'image';
  image: ImageMetadata;
  alt: string;
};

type TerminalVisual = {
  kind: 'terminal';
  ariaLabel: string;
  lines: readonly string[];
};

export type PersonalProject = {
  title: string;
  status: string;
  summary: string;
  technologies: readonly string[];
  repositoryUrl: string;
  linkLabel: string;
  visual: ImageVisual | TerminalVisual;
};

export const personalProjects: readonly PersonalProject[] = [
  {
    title: 'ChemPlum',
    status: 'Active personal project',
    summary:
      'An offline-first Android application for drawing and validating molecular structures, generating canonical SMILES and clean depictions, calculating molecular descriptors, identifying functional groups, and running explicit PubChem searches.',
    technologies: ['Android', 'Kotlin', 'RDKit', 'PubChem'],
    repositoryUrl: 'https://github.com/halleyverse/ChemPlum',
    linkLabel: 'View ChemPlum on GitHub',
    visual: {
      kind: 'image',
      image: chemPlumDrawing,
      alt: 'ChemPlum mobile interface showing a caffeine molecule in the structure editor and RDKit preview.',
    },
  },
  {
    title: 'MDGoblin',
    status: 'Active tool development',
    summary:
      'A transparent command-line auditor for Amber molecular-dynamics inputs. MDGoblin resolves documented defaults, builds a canonical protocol, flags unsupported behavior, and translates the supported subset into a guarded OpenMM workflow.',
    technologies: ['Python', 'Amber', 'OpenMM', 'Protocol auditing'],
    repositoryUrl: 'https://github.com/halleyverse/MDGoblin',
    linkLabel: 'View MDGoblin on GitHub',
    visual: {
      kind: 'terminal',
      ariaLabel: 'Example MDGoblin terminal audit showing an Amber input inspection and a guarded OpenMM conversion.',
      lines: [
        '$ mdgoblin inspect production.in',
        'engine      ambertools25 / sander',
        'defaults    14 resolved',
        'warnings    0 silently discarded',
        '$ mdgoblin convert --output openmm',
        'status      supported subset ready',
      ],
    },
  },
] as const;
