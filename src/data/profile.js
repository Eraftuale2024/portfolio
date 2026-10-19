export const profile = {
  name: "Abraham Getachew",
  title: "ERP Developer, Software and AI Engineer",
  headline: "I build ERP systems and AI solutions that run real businesses.",
  lead: "Functional and technical Odoo consultant, software engineer and data practitioner in Addis Ababa. I study how your business works, build the system around it, and use data to improve it.",
  email: "abrahamgetachew2024@gmail.com",
  email2: "abrahamgetachew4384@gmail.com",
  phone: "+251 943 941 897",
  github: "https://github.com/Eraftuale2024/",
  telegram: "@Altholder369",  
  linkedin: "https://www.linkedin.com/in/abraham-getachew-a17821316/",  
  location: "Addis Ababa, Ethiopia",
  education: "BAIS, Addis Ababa University",
};

export const projects = [
  // ---------- ERP ----------
  { category: "erp", title: "School management system", text: "Built from scratch and fully integrated with finance, HR and payroll. 22 modules including online exams, parent and student portals, announcements and mark transfer sheets.", tags: ["Odoo 17", "Portals", "Finance", "HR"] },
  { category: "erp", title: "NGO ERP", text: "An ERP implemented for a non-governmental organization and configured around its finance, HR and operational processes.", tags: ["Odoo", "Implementation"] },
  { category: "erp", title: "Multi-company ERP", text: "One system serving several companies, with separate accounting per company and controlled access between them.", tags: ["Multi-company", "Accounting"] },
  { category: "erp", title: "Full business ERP", text: "A fully implemented, working ERP covering finance, HR, sales, purchase, inventory, manufacturing, projects, quality and fleet.", tags: ["Odoo 17–19", "End to end"] },
  { category: "erp", title: "Payroll customization", text: "Payroll rules adapted for an engineering company, including Ethiopian overtime rates and approvals.", tags: ["HR", "Payroll"] },
  { category: "erp", title: "Tender evaluation", text: "Weighted vendor scoring for goods and services, aligned to Ethiopian procurement practice.", tags: ["Purchase", "Workflow"] },
  { category: "erp", title: "Executive dashboard", text: "A single dashboard for top managers covering all app operations, with access limited by role.", tags: ["Analytics", "Access rights"] },

  // ---------- AI and data ----------
  { category: "ai", title: "House price prediction", text: "A regression model that estimates house prices from property features, with data cleaning and model evaluation.", tags: ["Regression", "Python"] },
  { category: "ai", title: "AI attendance management system", text: "Employee attendance that recognises faces from a camera and records check-ins automatically.", tags: ["Computer vision", "OpenCV"] },
  { category: "ai", title: "Lung cancer detection", text: "A deep learning model that classifies medical images to detect lung cancer.", tags: ["Deep learning", "CNN"] },
  { category: "ai", title: "English–Amharic machine translation", text: "A neural translation model comparing sequence-to-sequence LSTM with attention, with evaluation and deployment.", tags: ["NLP", "Deep learning"] },
  { category: "ai", title: "Handwritten digit recognition", text: "A convolutional network trained on a self-collected photo dataset and deployed as a working recogniser.", tags: ["CNN", "Deployment"] },
  { category: "ai", title: "Ham and spam filtering", text: "A text classification project that separates legitimate messages from spam.", tags: ["NLP", "Classification"], link: "https://github.com/Eraftuale2024/ham-spam-filtering-project" },
  { category: "ai", title: "Crypto price prediction pipeline", text: "An end-to-end data pipeline that collects price data, trains a prediction model and serves results.", tags: ["Data engineering", "ML"] },
];

export const erpGroups = [
  { title: "Finance and people", items: ["Finance and accounting", "HR and payroll", "Expenses", "Timesheets"] },
  { title: "Sales and supply chain", items: ["Sales", "Purchase (local and foreign)", "Inventory", "Manufacturing", "CRM"] },
  { title: "Operations", items: ["Project", "Quality", "Maintenance", "Fleet management", "Documents"] },
];

export const experience = [
  { role: "Techno-Functional Consultant", org: "Kleatu Business Consultancy" },
  { role: "Software Engineer (remote)", org: "ZE-Tech" },
  { role: "Odoo Implementation Officer and Business Analyst", org: "EASE Engineering" },
  { role: "Techno-Functional Consultant", org: "Ashewa Technology" },
  { role: "Odoo Functional Consultant", org: "Top Technology" },
];

export const skillGroups = [
  { title: "ERP and business", items: ["Odoo 17–19", "Gap analysis", "Business analysis", "Implementation and training"] },
  { title: "Software engineering", items: ["Python", "XML and QWeb", "PostgreSQL", "Django", "React", "Node.js", "Git"] },
  { title: "Data and AI", items: ["Data analysis", "Data pipelines", "Machine learning", "Deep learning", "Computer vision", "NLP"] },
];