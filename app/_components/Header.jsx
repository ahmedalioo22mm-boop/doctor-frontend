/** @format */

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Hotels", href: "/hotels" },
    { name: "Experience", href: "/experience" },
    { name: "About", href: "/about" },
  ];

  return (
    <header>
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow-md ">
        <div>
          <Link href="/">
            <Image
              src="/logo3.png"
              alt="logo"
              width={300}
              height={300}
              className="h-7 w-6 animate-wobble"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end md:justify-between ">
          <nav aria-label="Global" className="hidden md:block ">
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="text-[#90a4ae] transition hover:bg-secondary px-3 py-2 rounded-md"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Link href="dashboard">
              <button className="text-[#90a4ae] hover:bg-muted px-3 py-2 rounded-md">
                dashboard
              </button>
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Search/>
            <Link href="/sign-up">
 <Button>Login</Button>
            </Link>
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
