import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Team from "./components/homepage/team";
// import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import FallingStars from "./components/FallingStars";

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const team = await getData();

  return (
    <div suppressHydrationWarning >
      <FallingStars/>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Team team={team} />
      {/* <ContactSection /> */}
    </div>
  )
};