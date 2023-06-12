'use client'

import { useState } from "react"
import Link from "next/link"

export default function NavbarOne() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
            <header className="AppHead AppHead-root bg-transparent/[0.5] w-full text-white flex flex-col box-border shadow-none right-0 left-auto absolute justify-center">
                <div className="AppContainer w-full mx-auto block box-border">
                    <div className="logoUI flex relative items-center">
                        <div className="md:hidden">
                            <button
                            className="focus:outline-none focus:text-white px-3"
                            aria-label="Toggle menu"
                            onClick={toggleMenu}
                            >
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5 8h14V6H5v2zm14 5H5v-2h14v2zm0 4H5v-2h14v2z"
                                />
                                ) : (
                                    <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 4h16v2H4v-2z"
                                />
                                )}
                            </svg>
                            </button>
                        </div>
                        <div className="logoUI-root flex items-center" id="paytag-header-logo">
                        <Link href='/' className="text-xl font-semibold" style={{fontSize: '1.45rem'}}>PayXchange</Link>
                        </div>
                        <nav className={`hidden md:flex ${isMenuOpen ? 'hidden' : 'flex'} navUI w-full flex items-center justify-between`}>
                            <ul className="UnlistUI m-0 p-0 flex ml-auto">
                                <li className="listUI w-auto flex items-center whitespace-nowrap">
                                    <Link href='/how-it-works' className="p-1 hover:bg-purple-700">How it works</Link>
                                </li>
                                <li className="listUI w-auto flex items-center whitespace-nowrap">
                                    <Link href='/faq' className="p-1 hover:bg-purple-700">Help</Link>
                                </li>
                                <li className="listUI w-auto flex items-center whitespace-nowrap">
                                    <Link href='/login' className="p-1 hover:bg-purple-700">Log in</Link>
                                </li>
                                <li className="listUI w-auto flex items-center whitespace-nowrap">
                                    <a className="navBtn-root text-white bg-purple-700 hover:bg-purple-900 shadow-none box-border font-bold rounded cursor-pointer" tabIndex='0' aria-disabled='false'>
                                        <span>Sign up</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} md:hidden flex items-center ml-4 bg-white shadow-md absolute mt-12 top-0 p-4`}>
                            <ul className="flex flex-col">
                                <li>
                                    <Link href="/how-it-works" className="block text-black px-2 py-1 rounded-md text-sm font-medium underline">How It Works</Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="block text-black px-2 py-1 rounded-md text-sm font-medium underline">Help</Link>
                                </li>
                                <li>
                                    <Link href="/login" className="block text-black px-2 py-1 rounded-md text-sm font-medium underline">Log in</Link>
                                </li>
                                <li>
                                    <Link href="/sign-up" className="block text-black px-2 py-1 rounded-md text-sm font-medium underline">Sign Up</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>   
                </div>
            </header>
    )
}