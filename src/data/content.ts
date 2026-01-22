// Single source of truth for all portfolio content
// To update your portfolio, just edit this file - no component changes needed

export const profile = {
  name: "Hector M. Lopez",
  title: "Full-Stack Engineer",
  subtitle: "Python · Go · Rust · TypeScript",
  tagline:
    "Building production-grade developer tools, APIs, and modern user interfaces.",
  about: `I thrive at the intersection of technical precision and creative exploration. As a full-stack engineer — choosing Python for rapid iteration, Go for performance, Rust for safety, and TypeScript for robust interfaces.`,
  aboutExtended: [
    `My approach to problem-solving is deeply analytical. Whether I'm designing a database migration system or crafting a component library, I apply the same algorithmic thinking and attention to detail that drives everything I build.`,
    `Outside of code, I'm a music producer and audio engineer. I create instrumental beats and design sounds using Ableton Live, approaching music through math, theory, and experimentation — the same systematic mindset I bring to software architecture.`,
  ],
  github: "https://github.com/hlop3z",
  linkedin: "https://linkedin.com/in/hector-lopez-it",
  resumeUrl: "#", // Add your resume URL here
};

export const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certs", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export interface Project {
  name: string;
  description: string;
  longDescription?: string;
  tech: string[];
  github: string;
  demo?: string;
  featured: boolean;
}

// Import cached stars (fetched by pre-build script)
import starsData from "./stars.json";

// Extract owner/repo from GitHub URL
function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
  const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);
  if (match) {
    return { owner: match[1], repo: match[2] };
  }
  return null;
}

// Get stars from cached data
function getStars(url: string): number | null {
  const parsed = parseGitHubUrl(url);
  if (!parsed) return null;
  const key = `${parsed.owner}/${parsed.repo}`;
  return (starsData as Record<string, number | null>)[key] ?? null;
}

// Get all projects with their star counts
export function getProjectsWithStars(): (Project & { stars: number | null })[] {
  return projects.map((project) => ({
    ...project,
    stars: getStars(project.github),
  }));
}

export const projects: Project[] = [
  {
    name: "astroladb",
    description: "Schema-centric tooling language",
    longDescription:
      "Define a database schema once, then automatically generate migrations for PostgreSQL/SQLite, OpenAPI specs, GraphQL schemas, and type definitions for TypeScript, Go, Python, and Rust. No ORM, no framework lock-in.",
    tech: ["Go", "PostgreSQL", "SQLite", "GraphQL"],
    github: "https://github.com/hlop3z/astroladb",
    featured: true,
  },
  {
    name: "spoc",
    description: "Framework for building frameworks",
    longDescription:
      "A foundational Python framework for creating dynamic and adaptable applications through schema-based design. Define modular components, plugins, and extensible architectures.",
    tech: ["Python", "Framework", "Plugins"],
    github: "https://github.com/hlop3z/spoc",
    featured: true,
  },
  {
    name: "dinja",
    description: "Safe, deterministic MDX rendering",
    longDescription:
      "A Rust HTTP service for MDX rendering with Python and TypeScript clients. Render MDX into HTML, JavaScript, JSON, or schema formats with custom components and YAML frontmatter support.",
    tech: ["Rust", "Python", "TypeScript", "MDX"],
    github: "https://github.com/hlop3z/dinja",
    featured: true,
  },
  {
    name: "uizy",
    description: "Small footprint, big impact",
    longDescription:
      "A lightweight CSS framework (~6KB JS, ~6.5KB CSS) with utility-first CSS, pre-built Web Components, integrated state management, and a plugin architecture for extensibility.",
    tech: ["TypeScript", "CSS", "Web Components"],
    github: "https://github.com/dufeutech/uizy",
    featured: true,
  },
  {
    name: "waria",
    description: "Framework-agnostic UI primitives",
    longDescription:
      "30+ accessible Web Components meeting WCAG 2.1 Level AA standards. Unstyled and composable primitives that work with Vue, React, Svelte, or vanilla JS — zero dependencies.",
    tech: ["TypeScript", "Web Components", "Accessibility"],
    github: "https://github.com/dufeutech/waria",
    featured: true,
  },
  {
    name: "dbcontroller",
    description: "Unified database interface",
    longDescription:
      "A Python library providing a single controller abstraction for SQLite, PostgreSQL, MySQL, and MongoDB. Simplify database interactions across different backends.",
    tech: ["Python", "SQLAlchemy", "MongoDB"],
    github: "https://github.com/hlop3z/dbcontroller",
    featured: false,
  },
];

export const skills = {
  languages: [
    { name: "Python", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Go", level: "Advanced" },
    { name: "Rust", level: "Intermediate" },
    { name: "SQL", level: "Advanced" },
    { name: "Bash", level: "Intermediate" },
  ],
  frontend: [
    "React",
    "Vue",
    "Web Components",
    "Tailwind CSS",
    "Accessibility (ARIA)",
    "Design Systems",
  ],
  backend: [
    "FastAPI",
    "GraphQL",
    "REST APIs",
    "gRPC",
    "Strawberry",
    "SQLAlchemy",
  ],
  databases: ["PostgreSQL", "SQLite", "MongoDB", "Redis"],
  devops: ["Docker", "Linux", "CI/CD", "AWS", "GCP", "Git"],
};

export const certifications = [
  {
    name: "Web Programming with Python and JavaScript",
    issuer: "CS50 — Harvard University",
    date: "Dec 2021",
    url: "https://cs50.harvard.edu/certificates/feaedf43-da66-45bd-a4c0-8242a56d30c9",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Apr 2019",
    url: "https://www.credly.com/badges/6c4c7b4c-c1f7-40de-a1c2-66a51f539750",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: profile.github,
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: profile.linkedin,
    icon: "linkedin",
  },
];
