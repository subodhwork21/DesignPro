"use client";
import WorkItem from "./work-item";
import { WorkContent, WorkGridProps } from "@/types/work";

const WorkGrid = ({
  projects,
  shouldDisplayProject,
  getTeaserPhoto,
}: WorkGridProps) => {
  return (
    <div className="max-w-[1000px] mx-auto px-8 pt-20">
      <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-min gap-4">
        {projects.map((project: WorkContent, id: number) => {
          if (shouldDisplayProject(project)) {
            return (
              <WorkItem
                key={id}
                title={project.name}
                subheading={project.fields.sub_heading.text}
                slug={project.slug}
                teaserPhoto={getTeaserPhoto(project)}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default WorkGrid;
