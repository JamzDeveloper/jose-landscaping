import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Imagen */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/about.png"
              alt="Tropical garden landscape"
              width={600}
              height={800}
              className="w-full h-auto rounded-3xl shadow-lg object-cover"
              priority
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6 leading-tight">
              About Us
            </h2>
            <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              At Jose Landscaping Service, we specialize in creating beautiful
              outdoor spaces for both residential and commercial properties.
              With extensive experience in landscape design, installation, and
              meticulous garden maintenance, our dedicated team creates
              harmonious and sustainable environments that reflect your personal
              style.
            </p>
            <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              We believe that thoughtfully designed landscapes not only enhance
              the aesthetic appeal of your property but also bring you closer to
              nature, elevating the beauty and functionality of every project we
              undertake.
            </p>
          </div>
        </div>
      </div>

      {/* Decoración flotante */}
      <div className="absolute right-[-80px] top-[-100px] rotate-45 hidden md:block">
        <Image
          src="/images/sheet.png"
          alt="Decorative palm leaf"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;
