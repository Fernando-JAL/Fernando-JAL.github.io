export const metrics = [
  { value: "10+", description: "years of scientific software & research" },
  { value: "4+", description: "years in software testing & ADAS validation" },
  { value: "5+", description: "years in software engineering, ML & data" },
  { value: "12+", description: "technical projects and research workflows" },
];

export const projects = [
  {
    name: "ADAS Perception",
    type: "Machine Learning / Computer Vision",
    url: "https://github.com/ObsidianHonorCoders/adas-ml-detection",
    image: "/adas-ml-detection.png",
    imageAlt: "ADAS perception project concept visual",
    summary: "Experimental ADAS object-detection project using YOLO11n and automotive datasets such as BDD100K, focused on reproducible ML experiments and evaluation workflows.",
    focus: ["Python", "YOLO11n", "Computer Vision", "BDD100K", "Model Evaluation", "MLOps"],
  },
  {
    name: "SimuCaS-V1",
    type: "Desktop Application / Scientific Computing",
    url: "https://github.com/Fernando-JAL/SimuCaS-V1",
    image: "/simucas-v1.png",
    imageAlt: "Robotic manipulator simulation software visual",
    summary: "Windows application for building and simulating serial robotic manipulators in 3D, covering kinematics, transformations, and numerical simulation workflows.",
    focus: ["C++", "Robotics", "Numerical Methods", "Kinematics", "3D Visualization", "OpenGL"],
  },
];

export const testimonials = [];

export const experience = [
  {
    period: "May 2022 - Present",
    role: "Software Test Engineer / Functional Test Owner",
    company: "Aumovio",
    current: true,
    highlights: [
      "Developed Python tools for ADAS validation and false-positive/negative analysis.",
      "Automated image analysis and labeling workflows, reducing processing effort by up to 95%.",
      "Built testing workflows for radar- and camera-based driving functions to support validation and debugging.",
    ],
  },
  {
    period: "2016 - 2018",
    role: "Scientific Software Developer / Researcher",
    company: "UNAM, Centro de Geociencias",
    current: false,
    highlights: [
      "Developed C/C++ computational models for fractured petroleum reservoirs.",
      "Implemented numerical methods using PDEs and fractional calculus.",
      "Built real-time graphical tools for model configuration and simulation.",
    ],
  },
  {
    period: "2012 - 2014",
    role: "Scientific Software Researcher",
    company: "UNAM, Centro de Geociencias",
    current: false,
    highlights: [
      "Contributed to a CONACYT-SENER-funded petroleum reservoir modeling project.",
      "Developed mathematical models for triple-porosity and permeability systems.",
      "Applied numerical simulation and inverse modeling to reservoir data.",
    ],
  },
];

export const credentials = [
  { year: "2026", name: "Databases and SQL for Data Science with Python", issuer: "IBM / Coursera", description: "SQL queries, relational databases, and Python-based data analysis." },
  { year: "2023", name: "Data Visualization with Python", issuer: "Coursera", description: "Data visualization and communicating insights using Python." },
  { year: "2022", name: "Curso completo de Machine Learning: Data Science en Python", issuer: "Udemy", description: "Machine learning fundamentals and practical data science with Python." },
  { year: "2022", name: "Getting Started with Git and GitHub", issuer: "Coursera", description: "Version control, branching, merging, and collaborative software development." },
];

export const featuredRepositories = projects.map((project) => ({
  name: project.name,
  url: project.url,
  description: project.summary,
}));
