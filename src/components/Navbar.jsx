"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-600 text-white px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h2 className="font-bold text-lg">Logo</h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {/* Auth */}
          <Link href="/signin" className="text-sm">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="bg-white text-black px-3 py-1 rounded"
          >
            Sign up
          </Link>

          {/* Avatar */}
          {/* <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          /> */}
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col mt-3 gap-3 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          <Link href="/signin">Sign in</Link>
          <Link href="/signup">Sign up</Link>

          {/* Avatar */}
          {/* <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-8 h-8 rounded-full mt-2"
          /> */}
        </div>
      )}
    </nav>
  );
}
