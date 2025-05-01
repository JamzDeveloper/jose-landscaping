
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <section className="py-16 relative overflow-hidden  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image
              src="/images/about.png"
              alt="Tropical garden landscape"
              width={600}
              height={800}
              className="rounded-4xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 relative mt-50">
            <h2 className="text-6xl font-bold text-green-800 mb-6">About Us</h2>
            <p className="text-gray-700 mb-4 text-2xl">
              At Jose Landscaping Service, we specialize in creating beautiful
              outdoor spaces for both residential and commercial properties.
              With extensive experience in landscape design, installation, and
              meticulous garden maintenance, our dedicated team creates
              harmonious and sustainable environments that reflect your personal
              style.
            </p>
            <p className="text-gray-700 mb-4 text-2xl">
              We believe that thoughtfully designed landscapes not only enhance
              the aesthetic appeal of your property but also bring you closer to
              nature, elevating the beauty and functionality of every project we
              undertake.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-10 top-[-150] rotate-45  hidden md:block ">
        <Image
          src="/images/sheet.png"
          alt="Decorative palm leaf"
          width={600.74}
          height={600.74}
          objectFit="cove"
        />
      </div>
    </section>
  );
};

export default AboutUsSection;