"use client";
import AnimatedStatsSection from "@/components/animate-stats";
import Navbar from "@/components/navbar";
import AboutUsSection from "@/sections/about";
import ContactSection from "@/sections/contact";
import LandscapingFooter from "@/sections/footer";
import ProjectSection from "@/sections/projects";
import ServiceSection from "@/sections/services";
import MapWrapper from "@/sections/map";
import useWindowSize from "@/hooks/useWindowSize";
import Image from "next/image";

export default function Home() {
  const { width } = useWindowSize();

  return (
    <div>
      <main>
        {/* <div className="relative " style={{ height: "72dvh" }}>
          <div
            className="relative"
            style={{
              height: "80dvh",
              backgroundImage: "url('/images/background-banner.png')",
              backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor
              backgroundPosition: "center", // Centra la imagen en el contenedor
            }}
          > */}
        <div
          className="relative"
          style={{
            height: "72dvh",
          }}
        >
          <div
            className={`relative sm:bg-cover ${
              width < 1165 &&
              "bg-cover bg-center before:absolute before:inset-0 before:bg-black/50 before:"
            }`}
            style={{
              height: "80dvh",
              backgroundImage: `url(${
                width > 1165
                  ? " /images/background-banner.png"
                  : "/images/5f6b62eaf96992ddfa4ffd0195c2bce359ebca31.jpg"
              })`,
              backgroundSize: "cover",
            }}
          >
            {width > 250 ? (
              <Navbar />
            ) : (
              <div className="text-white ml-10 pt-10 text-2xl font-semibold">
                <h1>Jose Landscaping</h1>
              </div>
            )}

            <div className="ml-5 sm:ml-10 md:ml-20 lg:ml-35 mt-20 sm:mt-40 md:mt-60 z-21 relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-xl  z-21">
                Transform your garden into a personalized oasis
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white mt-4 sm:mt-6 max-w-lg  z-21">
                Professional landscaping, irrigation, pruning, structures and
                more.
              </p>

              {/* <button>Call to Action</button> */}
            </div>

            {/** profile image */}

            <div
              className={`${
                width > 1165
                  ? "w-[500px] h-[600px] p-4"
                  : "w-41 h-50 p-1.5 top-80"
              } bg-white rounded-full absolute right-30 top-50 z-50 overflow-hidden`}
            >
              <div className="relative w-full h-full rounded-full">
                <Image
                  src="/images/image-banner.png"
                  alt="banner"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container mx-auto px-4 mt-8 md:px-10 mt-10 lg:px-20">
            <AnimatedStatsSection></AnimatedStatsSection>
          </div>
        </div>
        <div
          className="container mx-auto px-4 mt-8 md:px-10 mt-10 lg:px-20"
          id="services"
        >
          <ServiceSection />
        </div>
        <div className="mt-20 px-4 sm:px-6 md:px-10 lg:px-20" id="gallery">
          <ProjectSection />
        </div>
        <div className="" id="about">
          <AboutUsSection />
        </div>
        <div id="contact">
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
