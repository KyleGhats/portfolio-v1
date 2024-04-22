"use client"

import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { RightSideProfile } from "./components/RightSideProfile";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectSection } from "./components/ProjectSection";

export default function Home() {
    return (
        <main className="xl:p-24 lg:p-20 md:p-16 p-10 overflow-y-hidden relative">
        
            <RightSideProfile />
            <div className="space-y-32 xl:w-[calc(100vw-700px)] relative z-20 lg:w-[calc(100vw-600px)] md:w-[calc(100vw-500px)] mr-auto">
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectSection />
            </div>
            <div className="gradient-bg fixed top-0 left-0 right-0 bottom-0 z-10"></div>
        </main>
    );
}
