"use client"
import Link from "next/link"
import Image from 'next/image'

const Nav = () => {
  return (
    <div className="flex justify-center py-4">
    <nav className="shadow-lg shadow-white rounded-4xl px-4 py-3 w-[30%]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white flex items-center space-x-2">
            <Image 
              src="/Logo.png"
              height={40}
              width={40}
              alt="Visa Logo"
            />
          <span>HASHIRAS</span>
        </Link>

        <Link href="/sign-up" className="bg-white text-black px-4 py-2 rounded-4xl hover:bg-gray-300 transition">
          Login
        </Link>
      </div>
    </nav>
    </div>
  )
}

export default Nav
