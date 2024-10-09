import About from '../_components/about';
import Education from '../_components/education';
import MainPart from '../_components/mainPart';
import Projects from '../_components/projects';
import Skills from '../_components/skills';

export default function page() {
  return (
    <div className="flex flex-col  min-h-screen max-w-2xl mx-auto">
      <MainPart />
      <About />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}
