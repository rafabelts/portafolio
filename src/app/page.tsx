import About from "@/components/about";
import Education from "@/components/education";

export default function Home() {
    return (
        <main className="flex w-1/2 ml-[50%] flex-col min-h-screen gap-10 py-24">
            <About />
            <Education />
        </main>
    );
}
