import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full bg-emerald-500/20"></div>
                <div className="absolute inset-2 rounded-full border-2 border-emerald-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-emerald-400 font-bold text-lg">S</span>
                </div>
              </div>
              <span className="font-bold text-xl text-white">
                Sheba<span className="text-emerald-400">.ai</span>
              </span>
            </div>
            <p className="mb-6">
              Empowering African languages with cutting-edge AI technology for natural language processing and speech
              recognition.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-emerald-400">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400">
                <Github size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-emerald-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="hover:text-emerald-400 transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Developer Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Language Database
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-emerald-400 transition-colors">
                  Research Papers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Stay Updated</h3>
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates on African language AI technology.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Sheba.ai. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-emerald-400">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-emerald-400">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-emerald-400">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

