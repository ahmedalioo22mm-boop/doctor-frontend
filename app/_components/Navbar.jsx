/** @format */
"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { AuthContext } from "../context/AuthContext";
import { Button } from "@/components/ui/button";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" height={40} width={120} />
            </Link>
          </div>

          {/* Main Links for logged-in users */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {user?.role === 'admin' && (
                <Link href="/AddDoctor" className="text-gray-700 hover:bg-gray-200 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Add Doctor</Link>
              )}
              {user?.role === 'user' && (
                <Link href="/add-appointment" className="text-gray-700 hover:bg-gray-200 hover:text-black rounded-md px-3 py-2 text-sm font-medium">Add Appointment</Link>
              )}
            </div>
          </div>

          {/* Right side: User actions */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {user ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-800 text-sm font-medium">
                    Welcome, {user.name}
                  </span>
                  <Button onClick={logout} variant="outline">Logout</Button>
                </div>
              ) : (
                <div className="space-x-2">
                  <Link href="/add-appointment">
                    <Button variant="outline">Add Appointment</Button>
                  </Link>
                  <Link href="/login">
                    <Button variant="outline">Login</Button>
                  </Link>
                  <Link href="/register">
                    <Button>Register</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button can be added here */}
          <div className="-mr-2 flex md:hidden">
            {/* Example: <Button variant="outline">Menu</Button> */}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
