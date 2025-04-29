import AnimatedStatsSection from "@/components/animate-stats";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <div
            className="relative"
            style={{
              height: "81dvh",
              backgroundImage: "url('/images/background-banner.png')",
              backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor
              backgroundPosition: "center", // Centra la imagen en el contenedor
            }}
          >
            {/* La imagen ahora es un fondo */}
            <Navbar />

            <div className=" w-750 ml-35 mt-60">
              <h1 className="text-6xl font-medium text-white w-140">
                Transform your garden into a personalized oasis
              </h1>

              <p className="text-lg text-white mt-6">
                Professional landscaping, irrigation, pruning, structures and
                more.
              </p>
              {/* <button>

              </button> */}
            </div>
            <div className="mt-55 w-300 ml-20">

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
        <div></div>
      </main>

      <footer></footer>
    </div>
  );
}
