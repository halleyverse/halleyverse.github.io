export const expertise = [
  {
    title: 'Molecular simulation',
    detail: 'Classical, steered, replica-exchange, and hybrid QM/MM molecular dynamics.',
  },
  {
    title: 'Binding affinity',
    detail: 'Thermodynamic integration, alchemical free-energy calculations, and molecular docking.',
  },
  {
    title: 'Computational chemistry',
    detail: 'DFT active-site modeling, cheminformatics, Python workflows, and HPC-scale analysis.',
  },
  {
    title: 'Structure-based discovery',
    detail: 'Protein-small molecule interactions, cryptic pockets, and multidisciplinary drug design.',
  },
] as const;

export const experience = [
  {
    role: 'Postdoctoral Researcher',
    organization: 'Lawrence Livermore National Laboratory',
    period: 'June 2024 - current',
    bullets: [
      'Collaborate with academic and industry partners on early-stage oncology drug discovery projects.',
      'Apply advanced molecular modeling (MD, REMD, thermodynamic integration) to characterize conformational dynamics and inform structure-based small-molecule design.',
      'Development of new computational methods for cryptic pocket detection.',
      'Design and evaluate proteins for antiviral applications using in silico workflows.',
    ],
  },
  {
    role: 'Co-op, Molecular Engineering and Modeling',
    organization: 'Moderna',
    location: 'Cambridge, Massachusetts',
    period: 'Jan. 2022 - June 2022',
    bullets: [
      'Built a workflow to model RNA-small molecule interactions and screen synthesized compounds by predicted affinity to RNA tertiary structures.',
      'Benchmarked docking and binding free energy methods to evaluate performance on the target RNA systems.',
      'Investigated RNA-bilayer interactions with various ionizable lipids.',
    ],
  },
  {
    role: 'Doctoral Researcher, Chemistry',
    organization: 'Michigan State University',
    location: 'East Lansing, Michigan',
  },
  {
    role: 'Graduate Student Researcher',
    organization: 'Université de Lorraine, LPCT',
    location: 'Nancy, France',
    
  },
  {
    role: "Master's Researcher, Chemistry",
    organization: 'Boğaziçi University',
    location: 'Istanbul, Türkiye',


  },
] as const;

