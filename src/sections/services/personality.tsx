import { imageProperty } from "@/models/image";
import { ContainerImage } from "./item-image";

interface PersonalityContainerProps {
  data: imageProperty[];
}

const PersonalityContainer: React.FC<PersonalityContainerProps> = ({
  data,
}) => {
  return (
    <div className="md:p-10 ">
      <div className="columns-2 sm:columns-2 md:columns-3 space-y-6 ">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}

        {data.map((data, index) => {
          return (
            <div key={index}>
              <ContainerImage
              
                height={data.height}
                href={data.href}
                width={data.width}
                image={data.image}
                title={data.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalityContainer;
