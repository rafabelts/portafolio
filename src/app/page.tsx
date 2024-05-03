import About from "@/components/about";
import Education from "@/components/education";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <main className="flex w-1/2 ml-[50%] flex-col min-h-screen gap-10 py-24">
            <About />
            <Education />
            <Projects />
        </main>
    );
}
