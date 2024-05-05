import About from "@/components/about";
import Education from "@/components/education";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <main className="flex flex-col gap-10 lg:py-24 lg:mt-0 lg:w-1/2 lg:ml-[50%]">
            <About />
            <Education />
            <Projects />
        </main>
    );
}
