const $NAME = "plugin_one__Intro";

import "./style.scss";
import Photo from "/me.jpg";

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

export default function Intro(props) {
  return (
    <div x-html {...props} class={[$NAME, props.class]}>
      <Grid row gap-x="2" gap-y="2" class="my-2 mx-4">
        <Grid cols="12">
          <div class="d-f dx-ce">
            <img
              src={Photo}
              class="br-100p sb-12 spin"
              height="250px"
              width="250px"
            ></img>
          </div>
        </Grid>
        <Grid cols="12" lg="6" xl="6">
          <div class="ta-c">
            <span class="ts-2">About Me</span>
          </div>
          <p
            x-html
            theme-color="white"
            class="ts-4 text mt-2 py-2 px-3 br-2 sb-8 e-ns zoom-hover"
          >
            I’m a seasoned Full-Stack Developer with a passion for building
            dynamic and responsive web applications. With over 8 years of
            experience in the tech industry, I’ve honed my skills in both
            front-end and back-end development, creating seamless and efficient
            digital experiences. I specialize in <strong>Python</strong> and
            <strong> JavaScript/TypeScript</strong>, and have a proven track
            record of delivering high-quality projects on time and within
            budget. My expertise extends to designing and implementing{" "}
            <strong>
              RESTful APIs, managing databases, and optimizing performance to
              ensure scalability and reliability
            </strong>
            . My journey in tech has been driven by a desire to solve complex
            problems and innovate. Whether it’s developing a new feature,
            refactoring existing code, or collaborating with cross-functional
            teams, I bring a proactive and solution-oriented mindset to every
            project. Beyond coding, I’m an advocate for clean code practices and
            continuous learning.
          </p>
        </Grid>
        <Grid cols="12" lg="6" xl="6">
          {/* Skills Section */}
          <div class="skills-section">
            <div class="ta-c">
              <span class="ts-2">Skills</span>
            </div>
            <table class="skills-table mt-2 ts-4 sb-8 br-2 e-ns zoom-hover">
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
        </Grid>
      </Grid>
    </div>
  );
}
