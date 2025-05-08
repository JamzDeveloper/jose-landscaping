import { CustomButton } from "@/components/button";

const ProjectSection: React.FC = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 lg:px-20 py-16 bg-white">
      {/* Contenedor del título y descripción */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 lg:gap-16">
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#00350FB2] font-bold leading-tight">
          Project Gallery
        </h2>

        {/* Descripción */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-full md:w-1/2 lg:w-2/3 leading-relaxed">
          Explore our landscape projects, where creativity and nature blend to
          create vibrant, sustainable spaces that enhance outdoor living.
        </p>
      </div>

      {/* Área de proyectos */}
      <div className="mt-16 h-[400px] bg-red-50 rounded-lg"></div>

      {/* Botón */}
      <div className="mt-10 flex justify-center w-full">
        <CustomButton />
      </div>
    </section>
  );
};

export default ProjectSection;
