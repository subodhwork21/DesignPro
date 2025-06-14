"use client";
import { FSContent, FutureSeriesGridProps } from "@/types/future-series";
import FutureSeriesItem from "@/components/future-series/fs-item";

const FutureSeriesGrid = ({
  projects,
  shouldDisplayProject,
  getTeaserPhoto,
}: FutureSeriesGridProps) => {
  if (!projects || projects.length === 0) {
    return <div>No projects available.</div>;
  }

  return (
    <div className="max-w-[1000px] mx-auto px-8 pt-20">
      <div className="grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-min gap-4">
        {projects.map((project: FSContent, id: number) => {
          if (shouldDisplayProject(project)) {
            return (
              <FutureSeriesItem
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

export default FutureSeriesGrid;
