const $NAME = "plugin_one__About";

import "./style.scss";

const { Grid } = xtylist;

const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "HTML", "CSS", "TypeScript", "SQL", "Bash"],
  },
  {
    category: "Frameworks",
    items: [
      "Django",
      "Flask",
      "FastAPI",
      "Node.js",
      "Preact",
      "React",
      "Vue.js",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"],
  },
  {
    category: "Cloud",
    items: ["AWS", "Docker", "Azure", "Google Cloud"],
  },
];

export default function About(props) {
  return (
    <div x-html {...props} class={[$NAME, props.class, "oy-a"]}>
      <Grid row gap-x="2" gap-y="2" class="my-2 mx-4">
        <Grid cols="12" lg="6" xl="6">
          {/* Skills Section */}
          <div class="skills-section">
            <div class="ta-c">
              <span class="ts-2 td-b">Skills</span>
            </div>
            <div class="mt-2 ts-4 sb-8 e-ns zoom-hover bd-a bw-1 oy-h ox-h br-2">
              <table class="skills-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Skills</th>
                  </tr>
                </thead>
                <tbody>
                  {SKILLS.map((skill) => (
                    <tr key={skill.category}>
                      <td class="td-b">{skill.category}</td>
                      <td>{skill.items.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Grid>

        <Grid cols="12" lg="6" xl="6">
          <div class="ta-c">
            <span class="ts-2 td-b">About Me</span>
          </div>
          <div
            x-html
            theme-color="white"
            class="pa-5 br-2 sb-8 e-ns zoom-hover mt-2 bd-a bw-1"
          >
            <p class="ts-4 text py-2 px-3">
              I'm a seasoned Full-Stack Developer with a passion for building
              dynamic and responsive web applications. With over 8 years of
              experience in the tech industry, I've honed my skills in both{" "}
              <strong>front-end</strong> and{" "}
              <strong>back-end development</strong>, creating seamless and
              efficient digital experiences.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
