import Image from "next/image";
import { Button } from "../ui/button";
import Input from "../ui/input-field";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-tc-primary text-neutral-800 pb-16 w-full flex justify-center items-center">
      <div className="max-w-[1000px] pt-[53.33px] md:pl-8 pl-7 md:pr-8 pr-7 w-full">
        <h2 className="md:text-3xl text-2xl text-left mb-12 text-tc-secondary font-franklin_regular">
          Let&#39;s see how we can help you
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Column 1: Contact Information */}
          <div className="col-span-1 grid md:grid-cols-2 gap-8">
            <div className="space-y-6 col-span-1">
              <div>
                <h3 className="font-[600] mb-2 font-franklin_bold text-tc-dark_gray">
                  New Project Enquiries
                </h3>
                <p className="font-franklin_thin">+353 86-083 8757</p>
                <p className="font-franklin_thin">gemma@tapcreative.ie</p>
              </div>

              <div>
                <h3 className="font-[600] mb-2 font-franklin_bold text-tc-dark_gray">
                  General Enquiries
                </h3>
                <p className="font-franklin_thin">hello@tapcreative.ie</p>
              </div>

              <div>
                <h3 className="font-[600] mb-2 font-franklin_bold text-tc-dark_gray">
                  Join us
                </h3>
                <p className="font-franklin_thin">
                  If you feel you'd be a good addition to the team, we'd love to
                  hear from you.
                </p>
                <p className="mt-4 font-franklin_thin">niamh@tapcreative.ie</p>
              </div>
            </div>

            {/* Column 2: Office Locations */}
            <div className="space-y-6 col-span-1">
              <div>
                <h3 className="font-[600] text-base text-tc-dark_gray font-franklin_bold mb-2">
                  TapCreative Home
                </h3>
                <p className="font-franklin_thin">TapCreative</p>
                <p className="font-franklin_thin">14 Leeson Park</p>
                <p className="font-franklin_thin">Ranelagh</p>
                <p className="font-franklin_thin">Dublin 6</p>
                <p className="font-franklin_thin">D06 Y023</p>
              </div>

              <div className="mt-6 ">
                <h3 className="font-[600] text-base text-tc-dark_gray font-franklin_bold mb-2">
                  TapCreative UK
                </h3>
                <p className="font-franklin_thin">Florin Studios</p>
                <p className="font-franklin_thin">Florin Court</p>
                <p className="font-franklin_thin">6-9 Charterhouse Square</p>
                <p className="font-franklin_thin">London EC1M 6EY</p>
                <p className="font-franklin_thin">United Kingdom</p>
              </div>
            </div>
          </div>

          {/* Column 3: Newsletter and Social */}
          <div className="col-span-1">
            <div className="lg:pl-8">
              <h3 className="font-[600] text-base mb-2 text-tc-dark_gray font-franklin_bold">
                Sign up for insights, inspiration, trends and more
              </h3>
              <div className="flex mt-6 flex-col relative w-full mb-12">
                <Input
                  type="email"
                  placeholder="YOUR EMAIL"
                  className="border-b-[2px] border-neutral-800 bg-transparent flex-grow py-[3px] focus:outline-none placeholder:text-black placeholder:text-sm"
                />
                <Button
                  type="submit"
                  variant="ghost"
                  className="pl-4 pr-0 absolute top-8 hover:text-gray-500 hover:bg-tc-primary right-0 md:text-sm text-xs"
                >
                  Sign Up
                </Button>
              </div>

              <div className="mt-16 flex items-start w-full">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  className="mr-2 p-2 w-5 h-5"
                />
                <label
                  htmlFor="newsletter-consent"
                  className="font-franklin_thin text-xs mt-1"
                >
                  TapCreative can store and use my data for sending newsletters.
                </label>
              </div>

              <div className="mt-16 flex justify-start items-end gap-6">
                <div>
                  <h3 className="font-[600] font-franklin_bold mb-0">
                    Follow us
                  </h3>
                  <p className="font-franklin_thin text-base">
                    Instagram: @tapcreative
                  </p>
                  <p className="font-franklin_thin text-base">
                    LinkedIn: tapcreative
                  </p>
                </div>

                <div className="flex space-x-2">
                  <a
                    href="https://instagram.com/tapcreative"
                    className="bg-black rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/tapcreative"
                    className="bg-black rounded-full w-8 h-8 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-linkedin"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="mt-40 flex flex-wrap items-center text-base text-tc-dark_gray font-franklin_thin">
          <p className="mr-4">©TapCreative {new Date().getFullYear()}</p>
          <a href="/cookie-settings" className="mr-4">
            Cookie settings
          </a>
          <a href="/privacy-notice" className="mr-4">
            Privacy notice
          </a>
          <Link
            href="https://flyingcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src="/cms/fc-icon.svg"
              alt="Developed by Flyingcode"
              title="Developed by Flyingcode"
              width={25}
              height={25}
              className="opacity-75 hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
