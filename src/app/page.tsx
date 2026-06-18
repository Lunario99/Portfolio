import Project from "./Components/Projects";
import Intro from "./Components/Intro";
import Reveal from "./Components/Reveal";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const PROJECTS = [
  {
    title: "Tower of Steel",
    type: "Personal Solo Project",
    role: "Programmer, UI/UX Designer, Audio Designer, Gameplay Designer, Level Designer, 2D Artist",
    engine: "Unity 3D · C#",
    description:
      "Personal project made just before getting into my university project. This was my first ever dive into a bigger project in Unity. With it I learnt the basics of C#, animation, and game design for 2D development. This project showed me that I wanted to make games — and that I needed to take my knowledge to the next level to create the games I really wanted to make.",
    gallery: ["./img/TOS/Rob1.png", "./img/TOS/Rob2.png", "./img/TOS/Rob3.png"],
  },
  {
    title: "Evil and the Wizard's Tower",
    type: "University Group Project",
    role: "Programmer, UI/UX Designer, Audio Designer, Gameplay Designer",
    engine: "Unity 3D · C#",
    description:
      "Group project done in my last year of university. This project taught me what it means to work as a team and to share a goal. I'm a meticulous person and tend to do everything myself, but given the deadlines and the amount of work, I had to take my cooperation skills to the next level to help the whole group reach the finish line.",
    gallery: ["./img/Evil/Evil.png", "./img/Evil/EvilMenu.png", "./img/Evil/Evil2.png"],
  },
  {
    title: "Infinite World",
    type: "University Solo Project",
    role: "Game Designer, Game Developer",
    engine: "Unity 3D · C#",
    description:
      "Solo project focused on procedural generation. With it I pushed my programming skills by building a completely procedural, auto-generated level using Unity prefabs and runtime-generated meshes.",
    gallery: ["./img/Forest.png"],
  },
  {
    title: "Game a Week Compilation",
    type: "University Weekly Solo Projects",
    role: "Game Designer, Game Developer",
    engine: "Unity 3D · C#",
    description:
      "A compilation of weekly solo projects built for a university class — each a small, self-contained game exploring a different mechanic or idea.",
    gallery: [
      "./img/Compilation/CompMainMenu.png",
      "./img/Compilation/Elevator.png",
      "./img/Compilation/GetItThere.png",
      "./img/Compilation/SeeThrough.png",
      "./img/Compilation/SleepFall.png",
      "./img/Compilation/TheRainGame.png",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <div className="container space-y-20 py-10 md:space-y-28 md:py-16">
          <Intro
            name="Dan"
            description="A graduate game designer with a Bachelor of Design (Games) from RMIT (Royal Melbourne Institute of Technology), where I achieved Distinction and developed expertise in game design, narrative development, and interactive experiences."
          />

          <About />

          <Skills />

          <section id="projects" className="scroll-mt-24">
            <Reveal className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Highlights
              </h2>
              <p className="mx-auto mt-2 max-w-md text-muted">
                A selection of projects from my studies and personal work.
              </p>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
            </Reveal>

            <div className="flex flex-col gap-8">
              {PROJECTS.map((project) => (
                <Project key={project.title} {...project} />
              ))}
            </div>
          </section>

          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
