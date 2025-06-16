"use client";

import Image from "next/image";
import LandscapingFooter from "@/sections/footer";
import useWindowSize from "@/hooks/useWindowSize";
import NavbarInternal from "@/components/internalNavbar";
import PortfolioCard from "@/components/portfolio-card";

export default function LandscapingPortfolio() {

  return (
    <div className="min-h-screen bg-gray-50 w-full m-0">
      <div className="relative z-50">
        <NavbarInternal textColor="rgba(0, 53, 15, 0.7)" />
      </div>
      {/* Masonry Grid Section */}
      <div
        className="container px-50 py-8 relative m-0"
        style={{ maxWidth: "100%" }}
      >
        {/* Overlay semi-transparente que cubre toda la sección */}
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-600/30 via-gray-400/50 to-white/30 pointer-events-none z-10"
          style={{ maxWidth: "100vw", top: 0 }}
        ></div>

        <div
          className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4 relative "
          style={{ marginTop: "100px" }}
        >
          {/* Column 1 */}
          <div className="break-inside-avoid mb-4">
            <div className="bg-gray-200 rounded-lg h-20 mb-4"></div>
            <Image
              src="/images/background-1.jpg"
              alt="Modern house with lawn"
              width={180}
              height={200}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/background-2.jpg"
              alt="Garden pathway"
              width={180}
              height={150}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Column 2 */}
          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/background-3.jpg"
              alt="Heart shaped topiary"
              width={180}
              height={180}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <div className="bg-gray-200 rounded-lg h-32 mb-4"></div>
            <Image
              src="/images/background-4.jpg"
              alt="Flower garden bed"
              width={180}
              height={120}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Column 3 */}
          <div className="break-inside-avoid mb-4">
            <div className="bg-gray-200 rounded-lg h-24 mb-4"></div>
            <Image
              src="/images/background-14.jpg"
              alt="Modern building landscaping"
              width={180}
              height={160}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/background-5.jpg"
              alt="Stone pathway"
              width={180}
              height={140}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Column 4 */}
          <div className="break-inside-avoid mb-4">
            <div className="bg-gray-200 rounded-lg h-20 mb-4"></div>
            <Image
              src="/images/background-6.jpg"
              alt="Winding garden path"
              width={180}
              height={180}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/background-7.jpg"
              alt="Green lawn design"
              width={180}
              height={100}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Column 5 */}
          <div className="break-inside-avoid mb-4">
            <div className="bg-gray-200 rounded-lg h-28 mb-4"></div>
            <Image
              src="/images/background-8.jpg"
              alt="Garden with decking"
              width={180}
              height={160}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/background-9.jpg"
              alt="Geometric lawn pattern"
              width={180}
              height={140}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="break-inside-avoid mb-4">
            <Image
              src="/images/background-11.jpg"
              alt="Modern patio space"
              width={180}
              height={120}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </div>

      <div className=" w-full flex flex-col items-center justify-center">
        <div>
          <button
            className=" w-50 p-2 rounded-3xl text-white "
            style={{ background: "rgba(0, 53, 15, 0.7)" }}
          >
            Services
          </button>
        </div>

        <div className="mt-10">
          <h1 className="text-5xl font-[500]">Vegetation and grass</h1>
        </div>
        <div className="mt-10" style={{ width: "50%" }}>
          <p className="text-center text-normal">
            Covers everything related to the installation, planting, and
            maintenance of green areas. This includes artificial or natural
            grass, decorative gardens, putting greens, and ornamental planting
            zones.
          </p>
        </div>
      </div>
      {/* Featured Projects Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Row 1 */}

          <PortfolioCard
            alt=""
            src="/images/image 46.png"
            title="Artificial grass"
            description="Installation of synthetic turf for a low-maintenance, evergreen lawn suitable for residential or commercial landscapes."
            width={280}
            height={300}
          ></PortfolioCard>

          <PortfolioCard
            alt=""
            src="/images/image-6.png"
            title="Artificial grass"
            description="Installation of synthetic turf for a low-maintenance, evergreen lawn suitable for residential or commercial landscapes."
            width={280}
            height={300}
          ></PortfolioCard>

          <PortfolioCard
            alt=""
            src="/images/image-7.png"
            title="Artificial grass"
            description="Installation of synthetic turf for a low-maintenance, evergreen lawn suitable for residential or commercial landscapes."
            width={280}
            height={300}
          ></PortfolioCard>

          <PortfolioCard
            alt=""
            src="/images/image-10.png"
            title="Artificial grass"
            description="Installation of synthetic turf for a low-maintenance, evergreen lawn suitable for residential or commercial landscapes."
            width={280}
            height={300}
          ></PortfolioCard>

          <PortfolioCard
            alt=""
            src="/images/image-9.png"
            title="Artificial grass"
            description="Installation of synthetic turf for a low-maintenance, evergreen lawn suitable for residential or commercial landscapes."
            width={280}
            height={300}
          ></PortfolioCard>

          <PortfolioCard
            alt=""
            src="/images/image-8.png"
            title="Artificial grass"
            description="Installation of synthetic turf for a low-maintenance, evergreen lawn suitable for residential or commercial landscapes."
            width={280}
            height={300}
          ></PortfolioCard>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <LandscapingFooter></LandscapingFooter>
      </footer>
    </div>
  );
}
