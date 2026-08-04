---
title: "Predictive Molecular Modeling and Method Development"
overview: "Reliable prediction of affinity, protonation, metal coordination, and force-field behavior through simulation and quantum chemistry."
centralQuestion: "How reliably can computational models predict affinity, protonation, metal coordination, and molecular energetics?"
<!--summary: "I develop and evaluate computational approaches for reliable molecular predictions. My work combines molecular dynamics, docking, alchemical free-energy methods, quantum chemistry, and QM/MM to study binding affinity, protonation equilibria, metal coordination, force-field behavior, and reaction mechanisms. A recurring goal is to identify where a model succeeds, where it fails, and which physical assumptions control the result."-->
methods:
  - "Binding free energy"
  - "QM and QM/MM"
  - "pKa prediction"
  - "Force fields"
  - "Benchmarking"
order: 2
complete: true
visuals:
  - image: "../../assets/research/theme-2/transferrin-coordination.png"
    alt: "Quantum-chemical molecular models of the iron coordination environment in human transferrin."
projects:
  - title: "SAMPL8 host-guest binding-energy predictions"
    status: "Submitted manuscript"
    year: "2026"
    summary: "Evaluating binding-energy predictions by combining molecular dynamics with quantum-mechanical calculations in a blind-challenge setting, with emphasis on method benchmarking, error diagnosis, and the practical limits of molecular models."
    methods: ["MD", "Quantum chemistry", "Host-guest binding", "Benchmarking"]
    images:
      - image: "../../assets/research/theme-2/sampl-host-guest.png"
        alt: "Host-guest molecular structures and computational representations used in a binding-energy prediction challenge."
    featured: true
  - title: "Hybrid MD/QM prediction of small-molecule pKa"
    status: "Manuscript in preparation"
    year: "2026"
    summary: "Developing a workflow that combines conformational sampling, explicit hydration environments, and quantum-mechanical calculations to predict small-molecule protonation equilibria, with emphasis on accuracy and diagnosing difficult low-pKa and charged-state transitions."
    methods: ["MD", "Hydration-site analysis", "DFT", "Protonation thermodynamics"]
    featured: true
  - title: "Iron release from human serum transferrin"
    status: "Published"
    year: "2022"
    summary: "Used quantum-chemical models to test how protonation of iron-coordinating residues destabilizes the transferrin metal-binding site under acidic endosomal conditions. The calculations supported protonation of the axial tyrosine as a plausible route toward iron release and connected local coordination chemistry with a biological pH switch."
    methods: ["DFT", "Metal coordination", "Protonation analysis", "Active-site modeling"]
    images:
      - image: "../../assets/research/theme-2/transferrin-coordination.png"
        alt: "Quantum-chemical molecular models of the iron coordination environment in human transferrin."
    doi: "10.1039/D2OB01518H"
    featured: true
  - title: "Calcium-phosphate force-field parameterization"
    status: "Earlier method-development project"
    year: "2018"
    summary: "Investigated Lennard-Jones 12-6-4 parameters for calcium-phosphate interactions relevant to phosphate-containing dental adhesives. Umbrella sampling and potential-of-mean-force analysis exposed a bimodal interaction landscape and highlighted the difficulty of representing divalent-ion coordination with a single simple interaction model."
    methods: ["LJ 12-6-4", "Umbrella sampling", "WHAM", "PMF", "Ion parameterization"]
    images:
      - image: "../../assets/research/theme-2/calcium-phosphate.png"
        alt: "Molecular models and an energy profile describing calcium-phosphate interactions."
    featured: true
---
