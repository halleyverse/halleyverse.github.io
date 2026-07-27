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
    location: 'Livermore, California',
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
    period: 'Aug. 2019 - May 2024',
    bullets: [
      'Investigated the impact and identified mitigation strategies of PFAS (per- and poly-fluorinated alkyl substances), an environmental pollutant, on human and fish proteins through equilibrium molecular dynamics.',
      'Contributed computational modeling to a multidisciplinary team designing novel anti-tuberculosis compounds; resulting compounds were patented.',
      'Provided computational support for covalent inhibitor discovery programs targeting rare diseases at Reata Pharmaceuticals.',
    ],
  },
  {
    role: 'Graduate Student Researcher',
    organization: 'Université de Lorraine, LPCT',
    location: 'Nancy, France',
    period: 'Feb. 2019 - July 2019',
    bullets: [
      'Developed a new hypothesis for Alzheimer’s disease by providing computational evidence that amyloid peptide aggregation can occur within lipid membranes, modeled across membrane compositions at both all atomistic and coarse grained levels.',
    ],
  },
  {
    role: "Master's Researcher, Chemistry",
    organization: 'Boğaziçi University',
    location: 'Istanbul, Türkiye',
    period: 'Jan. 2016 - July 2018',
    bullets: [
      'Developed a computational framework to study selectivity across two families of cancer therapeutics targeting the Topoisomerase IB DNA complex.',
      'Identified the mechanistic basis for indenoisoquinoline selectivity toward specific DNA bases.',
      'Elucidated the mechanism driving activity differences between active and inactive forms of topotecan.',
      'Modeled the iron release mechanism from the N lobe of human transferrin using quantum mechanical calculations.',
    ],
  },
] as const;

export const education = [
  {
    degree: 'Ph.D. in Chemistry',
    institution: 'Michigan State University',
    period: '2019 - 2024',
    detail: 'Computational modeling of tuberculosis drug discovery and PFAS toxicity.',
  },
  {
    degree: 'M.Sc. in Chemistry',
    institution: 'Boğaziçi University',
    period: '2016 - 2018',
    detail: 'Computational study of topotecan as a Topoisomerase IB inhibitor.',
  },
  {
    degree: 'B.S. in Molecular Biology & Genetics',
    institution: 'Boğaziçi University',
    period: '2010 - 2015',
    detail: 'Bioinformatics analysis of an allatostatin receptor intracellular loop.',
  },
] as const;
