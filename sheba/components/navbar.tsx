"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full bg-emerald-500/20"></div>
              <div className="absolute inset-2 rounded-full border-2 border-emerald-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">S</span>
              </div>
            </div>
            <span className="font-bold text-xl text-gray-900">
              Sheba<span className="text-emerald-500">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-600 hover:text-emerald-500 font-medium">
              About
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-emerald-500 font-medium">
              Features
            </Link>
            <Link href="#use-cases" className="text-gray-600 hover:text-emerald-500 font-medium">
              Use Cases
            </Link>
            <Link href="#" className="text-gray-600 hover:text-emerald-500 font-medium">
              Blog
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
              Sign In
            </Button>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-500 hover:text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#about"
              className="block py-2 text-gray-600 hover:text-emerald-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#features"
              className="block py-2 text-gray-600 hover:text-emerald-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#use-cases"
              className="block py-2 text-gray-600 hover:text-emerald-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link
              href="#"
              className="block py-2 text-gray-600 hover:text-emerald-500 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-4 space-y-3">
              <Button variant="outline" className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-50">
                Sign In
              </Button>
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

