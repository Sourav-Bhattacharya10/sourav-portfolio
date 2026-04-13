export interface PersonalInfo {
  name: string;
  role: string;
  experience: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  details: string[];
}

export interface Project {
  name: string;
  desc: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export const personalInfo: PersonalInfo = {
  name: "Sourav Bhattacharya",
  role: "Senior Full-stack Developer",
  experience: "9 Years",
  location: "Bengaluru, India",
  email: "sourav.bhattacharya3@gmail.com",
  phone: "+91 9088388908",
  linkedin: "https://linkedin.com/in/sourav-bhattacharya-89639b88",
  github: "https://github.com/Sourav-Bhattacharya10",
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Redux Toolkit", "Redux Saga", "Micro-Frontend Development"],
  },
  {
    title: "Backend",
    skills: [".NET Core", "Node.js", "Python", "Rust"],
  },
  {
    title: "Database & Cloud",
    skills: ["Cosmos DB", "MongoDB", "PostgreSQL", "Azure", "AWS", "Docker", "Terraform"],
  },
];

export const experience: Experience[] = [
  {
    company: "Optum",
    role: "Senior Software Engineer",
    duration: "Oct 2023 – Present",
    details: ["Developed REM Portal using React.js, Redux Toolkit, and React Hooks."],
  },
  {
    company: "Innova Solutions",
    role: "Senior Software Engineer",
    duration: "Nov 2021 – Oct 2023",
    details: [
      "Developed Contributor Portal with React.js using Redux toolkit and React Hooks for client Conde Nast.",
      "Developed Reimbursement Manager Portal with React.js and Redux for client CHC.",
    ],
  },
  {
    company: "PwC SDC",
    role: "Software Engineer",
    duration: "Nov 2020 – Oct 2021",
    details: [
      "Created Grange Insurance Agent Portal using React.js, Redux, Saga, and Hooks.",
      "Developed APIs in .NET Core using Clean Architecture and CQRS pattern.",
    ],
  },
  {
    company: "Cloud Collab Technologies",
    role: "Software Developer",
    duration: "Nov 2019 – Nov 2020",
    details: ["Developed API and integrated with React.js using Redux, Saga and React Hooks."],
  },
  {
    company: "RAZRLab",
    role: "ML Engineer",
    duration: "Nov 2018 – Nov 2019",
    details: ["Developed machine learning framework like LSTM Multivariate Time Series Regression."],
  },
  {
    company: "TCS",
    role: "System Engineer",
    duration: "Nov 2016 – Nov 2018",
    details: ["Worked on .NET Framework, Microsoft Azure and Power BI for KPMG."],
  },
];

export const education: Education = {
  degree: "B.Tech in Information Technology",
  institution: "JIS College of Engineering",
  duration: "June 2012 – June 2016",
  score: "8.45 CGPA",
};

export const awards = [
  "Stellar Award – Optum",
  "Real-Time Recognition Awards – PwC",
  "On-the-Spot Award – TCS",
];
