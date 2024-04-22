import Image from "next/image";
import React from "react";
import skills from "../../../public/skills.svg";

export const HeroSection = () => {
  return (
    <section className="container mx-auto">
      <Image src={skills} width={600} height={400}/>
    </section>
  ); 
};
