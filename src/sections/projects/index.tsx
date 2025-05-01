import { CustomButton } from "@/components/button";

interface ProjectSectionProps {}

const ProjectSection: React.FC<ProjectSectionProps> = () => {
  return (
    <section>
      <div className="flex justify-between ">
        <h2 className="text-6xl text-[#00350FB2] font-bold">Project Gallery</h2>
        <p className="w-4xl text-xl flex center items-center">
          Explore our landscape projects, where creativity and nature blend to
          create vibrant, sustainable spaces that enhance outdoor living.
        </p>
      </div>

      <div className="mt-20 h-90 bg-red-50"></div>
      <div className="mt-20 flex justify-center w-full">
        <CustomButton />
      </div>
    </section>
  );
};

export default ProjectSection;
