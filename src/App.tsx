import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Nav } from "@/components/nav";
import { getData } from "@/lib/data";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  const data = getData();

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Nav />
        <main>
          <Hero data={data} />
          {data.about && <About about={data.about} />}
          {data.experience && data.experience.length > 0 && (
            <Experience experience={data.experience} />
          )}
          {data.projects && data.projects.length > 0 && (
            <Projects projects={data.projects} />
          )}
          {data.contact && <Contact contact={data.contact} />}
        </main>
      </div>
    </ThemeProvider>
  );
}
