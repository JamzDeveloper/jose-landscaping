"use client";
// import useWindowSize from "@/hooks/useWindowSize";
import PersonalityContainer from "./personality";
import { data } from "@/data/services";

interface ServiceSectionProps {}

const ServiceSection: React.FC<ServiceSectionProps> = () => {
  // const { width } = useWindowSize();

  const responsiveData = data.map((item) => {
    // let height = 300;
    // let imgWidth = 450;

    // if (width < 640) {
    //   height = 180;
    //   imgWidth = 300;
    // } else if (width < 768) {
    //   height = 220;
    //   imgWidth = 350;
    // }

    return {
      ...item,
      //   height,
      //   width: imgWidth,
    };
  });

  return (
    <section className="">
      <div>
        <div>
          <h2 className="text-6xl text-[#00350FB2] font-bold">Services</h2>
        </div>
        <div className="relative mt-10 ">
          <PersonalityContainer data={responsiveData}></PersonalityContainer>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
