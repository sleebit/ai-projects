"use client";
import StyledCard from "@/components/ui/styled-card";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

import "./index.css";
import { useRouter } from "next/navigation";

export default function Playground() {
  const [projects, setProjects] = useState([]);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get("/api/getProjects");

      setProjects(data);
    };

    fetchProjects();
  }, []);

  function projectClick(project) {
    if (project.comingSoon) {
      toast({
        title: "Coming soon",
        description: `${project.name} will be coming soon.`,
      });
    } else {
      router.push(`/apps/${project.slug}`);
    }
  }
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-wider  md:text-4xl">
          APPS <br className="hidden sm:inline" />
        </h1>
      </div>
      <div className="box-layout">
        {projects.map((project, i) => {
          return (
            <StyledCard
              key={i}
              onClick={() => {
                projectClick(project);
              }}
            >
              <Image
                src={project.image}
                width={400}
                height={400}
                alt="project-image"
              />
              <strong className="text-center">{project.name}</strong>
            </StyledCard>
          );
        })}
      </div>
    </section>
  );
}
