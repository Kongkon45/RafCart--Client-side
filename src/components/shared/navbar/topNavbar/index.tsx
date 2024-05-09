"use client"
import { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white text-black px-10 border-t-2">
      <header className="py-3 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <h2 className="font-bold text-3xl">
              <span className="text-[#fd3d57]">RAF</span>CART
            </h2>
          </Link>
        </div>

        {/* Large Devices: Show Full Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex justify-center items-center gap-10">

              <NavigationMenuItem>
                <Link href="/products">
                  <NavigationMenuLink>Products</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/dashboard">
                  <NavigationMenuLink>Dashboard</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Small Devices: Menu Inside Icon */}
        <div className="md:hidden">
          <RiMenu3Line className="text-2xl text-center cursor-pointer" onClick={toggleMenu} />
          {isMenuOpen && (
            <NavigationMenu>
              <NavigationMenuList className="flex justify-center items-center gap-2">
                
                <NavigationMenuItem>
                  <Link href="/products">
                    <NavigationMenuLink>Products</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/dashboard">
                    <NavigationMenuLink>Dashboard</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        {/* Side Menu Items for Large Devices */}
        <div className="lg:flex md:flex   gap-4 items-center">
          <h2 className="text-md font-bold cursor-pointer hover:underline"><Link href='/register'>Login/Register</Link></h2>
          <div className='lg:my-0 my-2 lg:block hidden'>
          <Select>
            <SelectTrigger className="lg:w-[120px] md:w-[110px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="bangla">Bangla</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
          </div>
          <div className='lg:block hidden'>
          <Select>
            <SelectTrigger className="lg:w-[120px] md:w-[100px]">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">Dollar</SelectItem>
              <SelectItem value="bangla">Taka</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopNavbar;
