import Link from "next/link"
import { Facebook, Instagram, Twitter, Music } from "lucide-react"

export default function LandscapingFooter() {
  return (
    <footer className="bg-[#3a6351] text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-medium">Jose</h2>
              <h2 className="text-2xl font-medium">Landscaping</h2>
              <h2 className="text-2xl font-medium">Service</h2>
            </div>
            <p className="text-sm max-w-xs">
              We create sustainable and beautiful outdoor spaces tailored to your needs.
            </p>
            <div className="flex items-center gap-2 text-sm pt-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="12"
                  cy="10"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>123 Greenway Blvd, Suite 201, Plant, FL 33567, USA</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/project-gallery" className="hover:underline">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/residential" className="hover:underline">
                  Residential landscaping
                </Link>
              </li>
              <li>
                <Link href="/services/patio" className="hover:underline">
                  Patio and decorative stones
                </Link>
              </li>
              <li>
                <Link href="/services/planting" className="hover:underline">
                  Planting and maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/furniture" className="hover:underline">
                  Outdoor furniture solutions
                </Link>
              </li>
              <li>
                <Link href="/services/architecture" className="hover:underline">
                  Landscape architecture design
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  Cookies Policy
                </Link>
              </li>
            </ul>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>+1 555 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>support@joselands.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="https://facebook.com" aria-label="Facebook">
                <Facebook size={20} className="text-white hover:text-gray-200" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} className="text-white hover:text-gray-200" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <Twitter size={20} className="text-white hover:text-gray-200" />
              </Link>
              <Link href="https://tiktok.com" aria-label="TikTok">
                <Music size={20} className="text-white hover:text-gray-200" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-white/20 text-center text-xs">
          © 2024, Jose Landscaping Service, All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
