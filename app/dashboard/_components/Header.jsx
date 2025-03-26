"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
const Header = ({ logo }) => {
  const [isUserButtonLoaded, setUserButtonLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }

  const SkeletonLoader = () => (
    <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserButtonLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="bg-cyan-50 bg-secondary shadow-sm py-4">
      <div className="w-[80%] m-auto flex gap-4 items-center justify-between">
        <Link className="hidden md:block"  href="/dashboard">
          <Image src={logo} width={120} height={80} alt="logo" />
        </Link>
        
        <ul className="hidden md:flex gap-6">
          <Link href="/dashboard">
            <li
              className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard" && "text-black font-bold"
              }`}
            >
              Dashboard
            </li>
          </Link>
          {/* <Link href="/dashboard/question">
            <li
              className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/question" && "text-black font-bold"
              }`}
            >
              Questions
            </li>
          </Link> */}

          <Link href="/dashboard/howit">
            <li
              className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
                path == "/dashboard/howit" && "text-black font-bold"
              }`}
            >
              Our Team
            </li>
          </Link>
        </ul>
        
        
        <div className="flex gap-10" >
          
          {isUserButtonLoaded ? <UserButton /> : <SkeletonLoader />}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-5">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/dashboard">
                <li
                  className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
                    path == "/dashboard" && "text-black font-bold"
                  }`}
                >
                  Dashboard
                </li>
              </Link>
              {/* <Link href="/dashboard/question">
                <li
                  className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
                    path == "/dashboard/question" && "text-black font-bold"
                  }`}
                >
                  Questions
                </li>
              </Link> */}
              
              <Link href="/dashboard/howit">
                <li
                  className={`hover:text-black hover:font-bold transition-all cursor-pointer ${
                    path == "/dashboard/howit" && "text-black font-bold"
                  }`}
                >
                  Our Team
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Header;
