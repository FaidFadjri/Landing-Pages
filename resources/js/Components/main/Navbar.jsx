import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleNav = () => {
        setOpen(!open);
    };
    return (
        <nav className="navbar h-16 md:h-20 w-full fixed bg-[#3AB0E3] flex md:flex-row justify-between items-center px-5 md:px-10 z-50">
            <div className="nav-brand h-full flex items-center gap-2">
                <img
                    src="/assets/logo-white.png"
                    alt="logo"
                    className="h-10 w-10"
                />
                <p className="md:text-2xl font-extrabold text-white">
                    DrugFree
                </p>
            </div>

            <ul
                className={`md:visible nav flex flex-col bg-[#3AB0E3] top-0 left-0 fixed ${
                    open
                        ? "h-screen w-screen opacity-100"
                        : "h-0 w-0 -top-48 opacity-0"
                } text-white gap-2 text-white items-center font-bold md:relative md:flex md:inline md:h-fit md:w-fit md:flex-row md:justify-between smooth duration-300 ease-in justify-center md:top-0 md:opacity-100`}
            >
                <button
                    className="absolute top-5 right-5 visible md:invisible"
                    onClick={handleNav}
                >
                    <AiOutlineClose />
                </button>

                <li className="underline underline-offset-8 decoration-2 py-2 px-2">
                    <Link href="/">Home</Link>
                </li>
                <li className="py-2 px-2 hover:underline hover:underline-offset-8 smooth duration-300 hover:decoration-2">
                    <Link>Blogs</Link>
                </li>
                <li className="py-2 px-2 hover:underline hover:underline-offset-8 smooth duration-300 hover:decoration-2">
                    <Link>About</Link>
                </li>
                <li className="py-2 px-2 hover:underline hover:underline-offset-8 smooth duration-300 hover:decoration-2">
                    <Link>Contact</Link>
                </li>
            </ul>
            <div className="righ flex item-center gap-2">
                <Link>
                    <button className="px-5 bg-white rounded-md text-[#3AB0E3] py-2 ease-out transition smooth hover:scale-110 duration-300 font-bold">
                        Login
                    </button>
                </Link>
                <button
                    className={`text-white visible md:invisible md:relative`}
                    onClick={handleNav}
                >
                    <HiOutlineMenuAlt3 size={30} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
