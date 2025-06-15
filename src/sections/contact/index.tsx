"use client";
import Image from "next/image";
import { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;

    const subject = encodeURIComponent(
      `New Landscaping Inquiry from ${firstName} ${lastName}`
    );
    const body = encodeURIComponent(
      `I’m interested in a garden redesign project:\n\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`
    );

    const mailtoLink = `mailto:jamzdeveloper@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-[#F2F2F2]  flex flex-col lg:flex-row items-center justify-between  py-10 gap-10 overflow-hidden">
      <div className="relative flex  items-center ">
        <div className=" hidden lg:block ">
          <Image
            src={"/images/contact-image.png"}
            height={832}
            width={807}
            alt="cover"
          />
        </div>
        {/* Middle: Contact Form */}
        <div className=" md:w-2/5 mb-8 md:mb-0 lg:ml-[-200px] lg:h-[60%] px-6 lg:p-0">
          <h2 className="text-3xl lg:text-6xl font-bold text-[#3a6351] mb-10">
            Contact
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8 mt-20 ">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="FIRST NAME"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#3a6351] text-base tracking-wider uppercase"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="LAST NAME"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#3a6351] text-base tracking-wider uppercase"
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="E-MAIL"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#3a6351] text-base tracking-wider uppercase"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="MESSAGE"
                value={formData.message}
                onChange={handleChange}
                rows={2}
                style={{ height: "177px" }}
                className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#3a6351] text-base tracking-wider uppercase"
              />
            </div>
            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                className="w-40 lg:w-md h-[60px] lg:h-[73px] bg-[#3a6351] text-white py-2.5 rounded-full text-base lg:text-xl uppercase tracking-wide lg:tracking-wider shadow-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:ml-20  lg:mr-40 ">
        <div className="w-full max-w-xs lg:max-w-xs bg-[#3a6351] text-white p-6 rounded-2xl shadow-2xl h-[490] px-10 ">
          <h2 className="text-xl font-medium mb-5 mt-[36]">
            Hi! We are always here to help you.
          </h2>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 bg-[#e0e0e0]/20 p-3 rounded-lg bg-white/70">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <path
                    d="M6.38559 15.0007V9.33634C6.40241 8.22292 6.63878 7.12377 7.08115 6.10186C7.52352 5.07994 8.1632 4.15536 8.96353 3.38107C9.76386 2.60679 10.7091 1.99803 11.7451 1.58968C12.7811 1.18132 13.8876 0.981399 15.001 1.00136C16.1144 0.981399 17.2208 1.18132 18.2568 1.58968C19.2928 1.99803 20.2381 2.60679 21.0384 3.38107C21.8388 4.15536 22.4784 5.07994 22.9208 6.10186C23.3632 7.12377 23.5995 8.22292 23.6164 9.33634V15.0007M19.3087 26.3078C20.4511 26.3078 21.5468 25.854 22.3547 25.0462C23.1625 24.2384 23.6164 23.1428 23.6164 22.0003V17.1544M19.3087 26.3078C19.3087 27.0218 19.025 27.7066 18.5201 28.2115C18.0152 28.7164 17.3304 29 16.6164 29H13.3856C12.6715 29 11.9867 28.7164 11.4818 28.2115C10.9769 27.7066 10.6933 27.0218 10.6933 26.3078C10.6933 25.5938 10.9769 24.909 11.4818 24.4042C11.9867 23.8993 12.6715 23.6156 13.3856 23.6156H16.6164C17.3304 23.6156 18.0152 23.8993 18.5201 24.4042C19.025 24.909 19.3087 25.5938 19.3087 26.3078ZM3.15482 11.7701H5.30867C5.59429 11.7701 5.86821 11.8835 6.07017 12.0855C6.27213 12.2874 6.38559 12.5613 6.38559 12.8469V19.3082C6.38559 19.5938 6.27213 19.8677 6.07017 20.0696C5.86821 20.2716 5.59429 20.385 5.30867 20.385H3.15482C2.58359 20.385 2.03575 20.1581 1.63182 19.7542C1.2279 19.3503 1.00098 18.8025 1.00098 18.2313V13.9238C1.00098 13.3526 1.2279 12.8048 1.63182 12.4009C2.03575 11.997 2.58359 11.7701 3.15482 11.7701ZM26.8471 20.385H24.6933C24.4077 20.385 24.1337 20.2716 23.9318 20.0696C23.7298 19.8677 23.6164 19.5938 23.6164 19.3082V12.8469C23.6164 12.5613 23.7298 12.2874 23.9318 12.0855C24.1337 11.8835 24.4077 11.7701 24.6933 11.7701H26.8471C27.4184 11.7701 27.9662 11.997 28.3701 12.4009C28.7741 12.8048 29.001 13.3526 29.001 13.9238V18.2313C29.001 18.8025 28.7741 19.3503 28.3701 19.7542C27.9662 20.1581 27.4184 20.385 26.8471 20.385Z"
                    stroke="black"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-black font-bold">Hotline:</p>
                <p className="text-sm text-black">7029453406</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#e0e0e0]/20 p-3 rounded-lg bg-white/70">
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    d="M13.501 0C20.7127 0 27.001 5.9535 27.001 12.825C27.001 19.5804 20.8544 24.8967 13.501 24.8967C11.9282 24.8978 10.3652 24.649 8.87048 24.1596C8.24408 24.7671 8.02943 24.9736 6.69968 26.2561C5.74118 26.9797 4.83938 27.2254 4.03343 26.7691C3.22073 26.3101 2.97638 25.4164 3.14243 24.2392L3.68243 21.1086C1.33748 18.9027 0.000976562 15.9867 0.000976562 12.825C0.000976562 5.9535 6.28793 0 13.501 0ZM13.501 1.89C7.30988 1.89 1.89098 7.02 1.89098 12.825C1.89098 15.5857 3.12218 18.1278 5.29298 20.0205L5.31998 20.0434L5.72093 20.3917L5.63048 20.9182L5.44418 22.0036L5.39423 22.2925L5.00948 24.5308C4.98743 24.6816 4.97391 24.8335 4.96898 24.9858V25.114C4.96898 25.1203 4.96808 25.1239 4.96628 25.1248C4.97573 25.1113 5.15933 25.0533 5.47388 24.8238L8.40338 21.9807L8.96228 22.1913C10.4142 22.7327 11.9514 23.0093 13.501 23.008C19.8676 23.008 25.111 18.472 25.111 12.825C25.111 7.02135 19.6921 1.89 13.501 1.89ZM7.05743 10.5475C7.3294 10.5376 7.60058 10.5826 7.85477 10.6798C8.10896 10.777 8.34095 10.9245 8.53687 11.1134C8.73279 11.3023 8.88862 11.5287 8.99506 11.7792C9.1015 12.0297 9.15636 12.299 9.15636 12.5712C9.15636 12.8433 9.1015 13.1127 8.99506 13.3632C8.88862 13.6137 8.73279 13.8401 8.53687 14.029C8.34095 14.2179 8.10896 14.3654 7.85477 14.4626C7.60058 14.5598 7.3294 14.6048 7.05743 14.5948C6.53351 14.5757 6.03744 14.3541 5.67356 13.9767C5.30968 13.5993 5.10636 13.0955 5.10636 12.5712C5.10636 12.0469 5.30968 11.5431 5.67356 11.1657C6.03744 10.7883 6.53351 10.5667 7.05743 10.5475ZM13.8047 10.5475C14.0767 10.5376 14.3479 10.5826 14.6021 10.6798C14.8563 10.777 15.0882 10.9245 15.2842 11.1134C15.4801 11.3023 15.6359 11.5287 15.7424 11.7792C15.8488 12.0297 15.9037 12.299 15.9037 12.5712C15.9037 12.8433 15.8488 13.1127 15.7424 13.3632C15.6359 13.6137 15.4801 13.8401 15.2842 14.029C15.0882 14.2179 14.8563 14.3654 14.6021 14.4626C14.3479 14.5598 14.0767 14.6048 13.8047 14.5948C13.2808 14.5757 12.7847 14.3541 12.4209 13.9767C12.057 13.5993 11.8537 13.0955 11.8537 12.5712C11.8537 12.0469 12.057 11.5431 12.4209 11.1657C12.7847 10.7883 13.2808 10.5667 13.8047 10.5475ZM20.5507 10.5475C20.8226 10.5376 21.0938 10.5826 21.348 10.6798C21.6022 10.777 21.8342 10.9245 22.0301 11.1134C22.226 11.3023 22.3819 11.5287 22.4883 11.7792C22.5947 12.0297 22.6496 12.299 22.6496 12.5712C22.6496 12.8433 22.5947 13.1127 22.4883 13.3632C22.3819 13.6137 22.226 13.8401 22.0301 14.029C21.8342 14.2179 21.6022 14.3654 21.348 14.4626C21.0938 14.5598 20.8226 14.6048 20.5507 14.5948C20.0268 14.5757 19.5307 14.3541 19.1668 13.9767C18.8029 13.5993 18.5996 13.0955 18.5996 12.5712C18.5996 12.0469 18.8029 11.5431 19.1668 11.1657C19.5307 10.7883 20.0268 10.5667 20.5507 10.5475Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm  text-black font-bold">SMS / WhatsApp:</p>
                <p className="text-sm text-black">7029453406</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-[#e0e0e0]/20 p-3 rounded-lg bg-white/70">
              <div className="flex-shrink-0">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="max-w-[180px]">
                <p className="text-sm text-black font-bold">Email:</p>
                <p className="text-sm text-black break-words">
                  josegardeninglasvegas@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="pt-2  border-t  border-t-2 border-white ">
            <p className="text-xs mb-3 mt-4">Connect with us</p>
            <div className="flex gap-4 justify-between ">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-white/80"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-white/80"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.5 6.5L17.51 6.49"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-white/80"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 4C22 4 21.3 6.1 20 7.4C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.6 3 5C5.2 7.6 8.6 9.1 12 9C11.1 4.8 16 2.4 19 5.2C20.1 5.2 22 4 22 4Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="text-white hover:text-white/80"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12C7.34315 12 6 13.3431 6 15C6 16.6569 7.34315 18 9 18C10.6569 18 12 16.6569 12 15V4C12.8 5 13.5 5.5 15 6"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
