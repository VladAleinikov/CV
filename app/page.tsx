import { FloatingNav } from "@/components/ui/floating-navbar";
import { Hero } from "./_components/hero";
import { RecentProjects } from "./_components/recent-projects";
import { navItems } from "@/data";
import { Grid } from "./_components/grid";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
        navItems={navItems}
        />
        <Hero />
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  );
}
