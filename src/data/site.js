export const about = [
  "I am an ERP developer who works on both sides of a project: the functional side, where I study how a business really operates, and the technical side, where I build the Odoo modules, portals and reports that match it.",
  "Alongside ERP, I build machine learning and data projects in Python, from prediction models and computer vision to language translation, taking each one from raw data to a deployed result.",
  "I work with companies in Ethiopia and remotely with international teams, and I focus on systems that people actually adopt.",
];

export const services = [
  { title: "ERP implementation", text: "Requirements, gap analysis, configuration, data migration, user training and go-live for Odoo 17 to 19." },
  { title: "Custom Odoo development", text: "Python and XML modules, portals, reports and approval workflows built around your real processes." },
  { title: "Local compliance", text: "Ethiopian payroll rules, overtime rates and procurement evaluation set up inside the ERP." },
  { title: "Dashboards and reporting", text: "Executive dashboards that give managers one view of every department, with access limited by role." },
  { title: "AI and machine learning", text: "Prediction, classification, computer vision and language models, from data preparation to deployment." },
  { title: "Software engineering", text: "Web applications and integrations in Python, React and Node.js, connected to your ERP and data." },
];

export const process = [
  { title: "Understand", text: "I study your workflows, documents and pain points before proposing anything." },
  { title: "Design", text: "I map the gaps between how you work and what the system does, and agree on the solution." },
  { title: "Build", text: "I configure and develop in clear steps, with you reviewing along the way." },
  { title: "Launch and support", text: "I train your team, go live with you, and stay available for fixes and improvements." },
];

// Matched to the roles in profile.js by company name. Edit the points to match your real work.
export const experienceDetails = {
  "Kleatu Business Consultancy": [
    "Customize Odoo 17 modules around client workflows",
    "Built a school management suite and weighted tender evaluation for Ethiopian procurement",
    "Redesigned stock transfers to match the company's printed forms",
  ],
  "ZE-Tech": [
    "Remote software engineering on Odoo 17 ",
    
  ],
  "EASE Engineering": [
    "Led n Odoo 19 implementation",
   
  ],
  "Ashewa Technology": [
    "Combined functional analysis with custom development on Odoo projects",
  ],
  "Top Technology": [
    "Configured Odoo modules and trained users as a functional consultant",
  ],
};

// Case studies. "result" is left empty on purpose: add ONE real, true line per study,
// for example: result: "Used daily by 1,200 students across 3 campuses"
// A study with an empty result simply hides that column.
export const caseStudies = [
  {
    title: "School management system",
    kind: "ERP, built from scratch",
    challenge: "A school needed one system connecting academics, finance and HR, instead of separate tools that do not share data.",
    built: [
      "A 22-module Odoo 17 system integrated with finance, HR and payroll",
      "Online exams and parent and student portals",
      "Announcements, activity gallery and mark transfer sheets",
    ],
    result: "",
    tags: ["Odoo 17", "Portals", "Finance", "HR"],
  },
  {
    title: "Payroll and tender evaluation",
    kind: "ERP customization",
    challenge: "Payroll had to follow Ethiopian overtime rates and approval rules, and vendor selection needed a consistent, documented scoring method.",
    built: [
      "Payroll rules with Ethiopian overtime rates and approvals",
      "Weighted tender evaluation criteria, separate for goods and services",
      "Scoring aligned to Ethiopian procurement practice",
    ],
    result: "",
    tags: ["Payroll", "Purchase", "Workflow"],
  },
  {
    title: "English–Amharic machine translation",
    kind: "AI and data",
    challenge: "Translate between English and Amharic, a lower-resource language pair, and find which architecture works better.",
    built: [
      "A sequence-to-sequence LSTM model and an attention-based LSTM model",
      "Evaluation comparing the two approaches",
      "Deployment of the trained model",
    ],
    result: "",
    tags: ["NLP", "Deep learning", "Python"],
  },
];