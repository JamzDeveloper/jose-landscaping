import AnimatedStatsSection from "@/components/animate-stats";
import Navbar from "@/components/navbar";
import AboutUsSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import LandscapingFooter from "@/sections/footer";
import ProjectSection from "@/sections/projects";
import ServiceSection from "@/sections/services";
import Image from "next/image";
import MapWrapper from "@/sections/map";

export default function Home() {
  return (
    <div>
      <main>
        <div className="relative h-dvh">
          <div
            className="relative"
            style={{
              height: "80dvh",
              backgroundImage: "url('/images/background-banner.png')",
              backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor
              backgroundPosition: "center", // Centra la imagen en el contenedor
            }}
          >
            {/* La imagen ahora es un fondo */}
            <Navbar />

            <div className=" ml-35 mt-60">
              <h1 className="text-6xl font-medium text-white w-140">
                Transform your garden into a personalized oasis
              </h1>

              <p className="text-lg text-white mt-6 ">
                Professional landscaping, irrigation, pruning, structures and
                more.
              </p>
              {/* <button>

              </button> */}
            </div>
            <div className="mt-75 w-300 ml-20">
              <AnimatedStatsSection></AnimatedStatsSection>
            </div>
            {/** profile image */}
            <div
              className="w-130 h-160 bg-white rounded-full absolute right-30 top-50 p-6 z-100 overflow-hidden flex"
              // style={{
              //   height: "62dvh",
              //   backgroundImage: "url('/images/image-banner.png')",
              //   backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor
              //   backgroundPosition: "center", // Centra la imagen en el contenedor
              // }}
            >
              <div
                className="w-129 h-160  rounded-full relative  overflow-hidden"
                style={{
                  height: "60dvh",
                  backgroundImage: "url('/images/image-banner.png')",
                  backgroundSize: "contain", // Asegura que la imagen cubra todo el contenedor
                  backgroundPosition: "center", // Centra la imagen en el contenedor
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="px-35">
          <ServiceSection />
        </div>
        <div className="mt-20 px-35  ">
          <ProjectSection />
        </div>
        <div className="">
          <AboutUsSection />
        </div>
        <div>
          <ContactSection></ContactSection>
        </div>
        <div className="relative flex justify-center py-30">
          <div style={{ width: "80%" }}>
            <MapWrapper />
          </div>
        </div>
      </main>

      <footer>
        <LandscapingFooter></LandscapingFooter>
      </footer>
    </div>
  );
}
