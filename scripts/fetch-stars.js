// Pre-build script to fetch GitHub stars
// Run before build to cache star counts

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repos = [
  "hlop3z/astroladb",
  "hlop3z/spoc",
  "hlop3z/dinja",
  "hlop3z/fastberry",
  "dufeutech/uizy",
  "dufeutech/waria",
  "hlop3z/dbcontroller",
];

async function fetchStars(repo) {
  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-Site",
  };

  // Use GitHub token if available
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers,
    });

    if (!response.ok) {
      console.warn(`  Failed to fetch ${repo}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data.stargazers_count ?? null;
  } catch (error) {
    console.warn(`  Error fetching ${repo}:`, error.message);
    return null;
  }
}

async function main() {
  console.log("Fetching GitHub stars...\n");

  const stars = {};

  for (const repo of repos) {
    const count = await fetchStars(repo);
    stars[repo] = count;
    if (count !== null) {
      console.log(`  ${repo}: ${count}`);
    }
  }

  // Write to src/data/stars.json
  const outputPath = path.join(__dirname, "..", "src", "data", "stars.json");
  fs.writeFileSync(outputPath, JSON.stringify(stars, null, 2));

  console.log(`\nStars cached to src/data/stars.json`);
}

main();
