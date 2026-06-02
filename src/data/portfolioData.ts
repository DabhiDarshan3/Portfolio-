// ============================================================
// Portfolio Data - Darshan Dabhi
// ============================================================

export const personalInfo = {
  name: "Darshan Dabhi",
  role: "Full Stack Developer",
  tagline: "Laravel Developer | React Developer",
  email: "darshandabhi57@gmail.com",
  phone: "+91 9909697844",
  location: "Rajkot, Gujarat, India",
  company: "TechXperts",
  joinedDate: 'May 2025',
  description:
    "I build scalable web applications, modern SaaS platforms, automation systems, and enterprise solutions using Laravel, React, PHP, and modern web technologies.",
  aboutText:
    "I am a passionate Full Stack Developer specializing in Laravel and React development. I enjoy building scalable applications, business automation systems, CRM integrations, and modern user experiences. Currently working at TechXperts in Rajkot where I develop enterprise-grade applications and modern web platforms.",
};

export const socialLinks = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/in/dabhi-darshan-399513283/",
  portfolio: "#",
};

export const stats = [
  { value: '10+', label: 'Professional Projects Completed', icon: 'Briefcase' },
  { value: '15+', label: 'Technologies Mastered', icon: 'Code2' },
];

// ============================================================
// Skills
// ============================================================
export const skillCategories = [
  {
    name: "Frontend",
    icon: "Monitor",
    color: "#06B6D4",
    skills: [
      { name: "React.js", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "jQuery", level: 85 },
      { name: "AJAX", level: 82 },
    ],
  },
  {
    name: "Backend",
    icon: "Server",
    color: "#6366F1",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "PHP", level: 88 },
      { name: "REST APIs", level: 92 },
    ],
  },
  {
    name: "Database & Tools",
    icon: "Database",
    color: "#8B5CF6",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "Git", level: 85 },
      { name: "Quickbase CRM", level: 80 },
    ],
  },
  {
    name: "Specializations",
    icon: "Zap",
    color: "#F59E0B",
    skills: [
      { name: "API Integration", level: 92 },
      { name: "CRM Integration", level: 85 },
      { name: "SaaS Development", level: 82 },
      { name: "Full Stack Architecture", level: 88 },
      { name: "Geocoding APIs", level: 80 },
      { name: "Performance Optimization", level: 85 },
    ],
  },
];

// ============================================================
// Experience
// ============================================================
export const experience = [
  {
    company: "TechXperts",
    role: "Full Stack Developer",
    location: "Rajkot, Gujarat",
    duration: 'May 2025 – Present',
    type: "Full-time",
    color: "#6366F1",
    responsibilities: [
      "Build enterprise-grade Laravel applications",
      "Develop modern React frontends with best UX practices",
      "Design & implement RESTful API integrations",
      "CRM integrations including Quickbase",
      "Performance optimization and system architecture",
      "Lead decoupled architecture migrations",
    ],
  },
];

// ============================================================
// Projects
// ============================================================
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    subtitle: "PHP & MySQL",
    description:
      "Built a complete e-commerce solution with product management, cart, checkout process, user management, order tracking, and admin dashboard.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    category: "PHP",
    featured: false,
    color: "#F59E0B",
    gradient: "from-amber-500/20 to-orange-500/20",
    icon: "ShoppingCart",
    highlights: ["Product Management", "Cart & Checkout", "Order Tracking", "Admin Dashboard"],
  },
  {
    id: 2,
    title: "Real Estate Management System",
    subtitle: "Property Platform",
    description:
      "Property listing platform with property management, lead tracking, agent management, inquiry handling, and reporting system.",
    technologies: ["PHP", "MySQL", "AJAX"],
    category: "PHP",
    featured: false,
    color: "#10B981",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "Building2",
    highlights: ["Property Listings", "Lead Tracking", "Agent Management", "Reporting"],
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    subtitle: "Laravel Edition",
    description:
      "Modern Laravel-based e-commerce platform with advanced inventory management, order processing, payment integration, and admin analytics.",
    technologies: ["Laravel", "MySQL"],
    category: "Laravel",
    featured: false,
    color: "#EF4444",
    gradient: "from-red-500/20 to-rose-500/20",
    icon: "Store",
    highlights: ["Inventory Management", "Payment Integration", "Order Processing", "Analytics"],
  },
  {
    id: 4,
    title: "Hotel Booking Management System",
    subtitle: "Reservation Platform",
    description:
      "Hotel reservation platform featuring room management, booking workflows, customer management, payment handling, and reporting.",
    technologies: ["Laravel"],
    category: "Laravel",
    featured: false,
    color: "#8B5CF6",
    gradient: "from-violet-500/20 to-purple-500/20",
    icon: "Hotel",
    highlights: ["Room Management", "Booking Workflows", "Payment Handling", "Reporting"],
  },
  {
    id: 5,
    title: "Job Board Platform",
    subtitle: "Recruitment Portal",
    description:
      "Complete recruitment portal with employer dashboard, candidate profiles, job posting management, application tracking, and advanced search.",
    technologies: ["Laravel", "React"],
    category: "Laravel + React",
    featured: true,
    color: "#06B6D4",
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: "Users",
    highlights: ["Employer Dashboard", "Candidate Profiles", "Application Tracking", "Advanced Search"],
  },
  {
    id: 6,
    title: "Lookup Portal",
    subtitle: "US Address Management",
    description:
      "US address management portal using Geocode APIs. Validates, standardizes, and cleans addresses before automatically storing them in Quickbase CRM.",
    technologies: ["Laravel", "React", "Quickbase", "APIs"],
    category: "Laravel + React",
    featured: true,
    color: "#6366F1",
    gradient: "from-indigo-500/20 to-violet-500/20",
    icon: "MapPin",
    highlights: ["Geocode API Integration", "Address Validation", "Data Cleaning", "CRM Synchronization"],
  },
  {
    id: 7,
    title: "Partner Portal Modernization",
    subtitle: "Architecture Migration",
    description:
      "Migrated an existing Laravel Blade application into a fully decoupled architecture with Laravel backend APIs and React frontend.",
    technologies: ["Laravel", "React"],
    category: "Laravel + React",
    featured: true,
    color: "#F97316",
    gradient: "from-orange-500/20 to-amber-500/20",
    icon: "GitBranch",
    highlights: ["Decoupled Architecture", "API Development", "React Frontend", "Performance Improvements"],
  },
  {
    id: 8,
    title: "AI Calling Agent Platform",
    subtitle: "Automated Voice System",
    description:
      "Automated voice calling system that confirms customer orders using AI-powered conversations via Telnyx and Resell AI integration.",
    technologies: ["Laravel", "React", "Telnyx API", "AI Integration"],
    category: "AI & Automation",
    featured: true,
    color: "#EC4899",
    gradient: "from-pink-500/20 to-rose-500/20",
    icon: "Phone",
    highlights: ["AI Voice Calls", "Telnyx Integration", "Resell AI", "Order Confirmation"],
  },
];

export const projectCategories = ["All", "PHP", "Laravel", "Laravel + React", "AI & Automation"];

// ============================================================
// Why Hire Me
// ============================================================
export const whyHireMe = [
  {
    icon: "Layers",
    title: "Full Stack Expertise",
    description: "End-to-end development from database design to pixel-perfect UI with seamless integration.",
    color: "#6366F1",
  },
  {
    icon: "Server",
    title: "Laravel Specialist",
    description: "Deep expertise in Laravel ecosystem — Eloquent, queues, events, APIs, and advanced patterns.",
    color: "#EF4444",
  },
  {
    icon: "Monitor",
    title: "React Development",
    description: "Modern React with hooks, context, performance optimization and beautiful component design.",
    color: "#06B6D4",
  },
  {
    icon: "Database",
    title: "CRM Integration Expert",
    description: "Specialized in Quickbase CRM integration, data sync, and business process automation.",
    color: "#8B5CF6",
  },
  {
    icon: "Link",
    title: "API Integration Specialist",
    description: "From Geocoding APIs to AI voice APIs — skilled at integrating complex third-party systems.",
    color: "#F59E0B",
  },
  {
    icon: "Brain",
    title: "Problem Solver",
    description: "Analytical mindset that breaks complex business problems into elegant technical solutions.",
    color: "#10B981",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Architecture",
    description: "Designs systems that scale — clean code, decoupled services, and performance-first thinking.",
    color: "#F97316",
  },
  {
    icon: "Sparkles",
    title: "Modern UI/UX Creator",
    description: "Crafts stunning interfaces that don't just work — they delight users and drive engagement.",
    color: "#EC4899",
  },
];

export const codeSnippet = `// Building the future, one line at a time
const developer = {
  name: "Darshan Dabhi",
  role: "Full Stack Developer",
  stack: ["Laravel", "React", "PHP"],
  company: "TechXperts",
  passion: "Building scalable apps",
  coffee: "Always ☕"
};

// Available for exciting opportunities
export default developer;`;
