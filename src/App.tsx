import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/navbar";
import Carousel from "./components/Carousel";
import TimeLine from "./components/TimeLine";
import Introduction from "./components/introduction";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import { useRef } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState<string>("");

  const introductionRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    introduction: introductionRef,
    aboutMe: aboutMeRef,
    projects: projectsRef,
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [sectionRefs]);

  const Items = [
    { title: "Card 1", content: "Content for Card 1" },
    { title: "Card 2", content: "Content for Card 2" },
    { title: "Card 3", content: "Content for Card 3" },
    { title: "Card 4", content: "Content for Card 4" },
    { title: "Card 5", content: "Content for Card 5" },
    { title: "Card 6", content: "Content for Card 6" },
    { title: "Card 7", content: "Content for Card 7" },
  ];

  return (
    <div className="background">
      <div className="timeline-wrapper">
        <TimeLine
          currentSection={currentSection}
          onSectionClick={(section: string) => {
            scrollToSection(sectionRefs[section]);
          }}
        />
      </div>
      <div ref={introductionRef} id="introduction">
        <Introduction />
      </div>
      <div ref={aboutMeRef} id="aboutMe">
        <AboutMe />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <Carousel items={Items} />
    </div>
  );
}

export default App;
