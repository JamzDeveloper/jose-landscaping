import Link from "next/link";

interface NavbarProps {
  textColor?: string;
  withGradient?: boolean;
}

export default function NavbarInternal({
  textColor = "#fff",
  withGradient = false,
}: NavbarProps) {
  const navItems = [
    { name: "Home", href: "/", hrefId: "" },
    { name: "Services", href: "/services", hrefId: "#services" },
    { name: "Project Gallery", href: "/gallery", hrefId: "#gallery" },
    { name: "About us", href: "/about", hrefId: "#about" },
    { name: "Contact", href: "/contact", hrefId: "#contact" },
  ];

  return (
    <div className="relative">
      {/* Fondo de gradiente solo si withGradient es true */}
      {withGradient && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-gray-600/50 via-gray-400/30 to-white/20 pointer-events-none z-0"></div>
      )}

      <nav className="absolute top-3 left-0 w-full bg-transparent z-10">
        <div className="container mx-auto px-4 relative z-20">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="text-3xl font-semibold relative z-30 drop-shadow-lg"
              style={{
                color: textColor,
                textShadow:
                  "2px 2px 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.3)",
              }}
            >
              Jose Landscaping
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 relative z-30">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.hrefId}
                  className="hover:text-green-200 transition-colors font-semibold drop-shadow-lg text-base"
                  style={{
                    color: textColor,
                    // textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.3)",
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
