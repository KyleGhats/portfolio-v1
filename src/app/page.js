import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { RightSideProfile } from "./components/RightSideProfile";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";

export default function Home() {
    return (
        <main className="p-24 overflow-y-hidden ">
            <div className="space-y-24">
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
            </div>
            <RightSideProfile />
        </main>
    );
}
