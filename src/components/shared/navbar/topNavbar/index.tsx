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
    <div className="bg-white text-black">
      <header className="py-3 mx-4 md:mx-10 flex justify-between items-center">
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
                <Link href="/dashboard">
                  <NavigationMenuLink>Dashboard</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/products">
                  <NavigationMenuLink>Products</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                <NavigationMenuContent></NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Small Devices: Menu Inside Icon */}
        <div className="md:hidden">
          <RiMenu3Line className="text-2xl cursor-pointer" onClick={toggleMenu} />
          {isMenuOpen && (
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col justify-center items-center gap-4">
                <NavigationMenuItem>
                  <Link href="/">
                    <NavigationMenuLink>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/products">
                    <NavigationMenuLink>Products</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                  <NavigationMenuContent></NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        {/* Side Menu Items for Large Devices */}
        <div className=" md:flex sm:block gap-4 items-center">
          <h2 className="cursor-pointer hover:underline"><Link href='/login'>Login/Register</Link></h2>
          <Select>
            <SelectTrigger className="lg:w-[120px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="bangla">Bangla</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">Dollar</SelectItem>
              <SelectItem value="bangla">Taka</SelectItem>
              <SelectItem value="others">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
    </div>
  );
};

export default TopNavbar;
