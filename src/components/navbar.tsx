import Link from "next/link";
// import { Menu } from "lucide-react";

export default function Navbar() {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Project Gallery", href: "/gallery" },
    { name: "About us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="absolute top-3 left-0 w-full bg-transparent relative z-10">
      {/* Background Image Overlay */}
      <div className="inset-0 bg-black opacity-30 z-0 pointer-events-none  bg-cover bg-center mix-blend-multiply"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-white text-2xl font-semibold">
            Jose Landscaping
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-green-200 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="w-2xl"></div>
          </div>

          {/* Mobile Menu Button */}
          {/* <button className="md:hidden text-white">
            <Menu size={24} />
          </button> */}
        </div>

        {/* Mobile Menu */}
        {/* {isMenuOpen && (
          <div className="md:hidden py-4 pb-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-green-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </nav>
  );
}
