"use client"
import Link from "next/link"
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className="p-4 bg-black shadow-md w-80px">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white flex items-center space-x-2">
          <span className="border border-white rounded-full p-1">
            <Image />
          </span>
          <span>COILAN</span>
        </Link>

        <ul className="hidden md:flex space-x-8 text-gray-100">
          <li><Link href="/features" className="hover:text-white">Home</Link></li>
          <li><Link href="/technology" className="hover:text-white">About</Link></li>
          <li><Link href="/case-studies" className="hover:text-white">Objectives</Link></li>
          <li><Link href="/case-studies" className="hover:text-white">Contact</Link></li>
        </ul>

        <Link href="/book-test" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          Sign In/Up
        </Link>
      </div>
    </nav>
  )
}

export default Nav
