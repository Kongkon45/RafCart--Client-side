"use client";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const TopNavbar = () => {
  return (
    <div className="bg-white text-black ">
      <header className=" py-4 flex items-center justify-between mx-10">
        {/* Logo */}
        <div className="ml-4 flex items-center">
          <Link href="/">
            <h2 className="font-bold text-3xl">
              <span className="text-[#fd3d57]">RAF</span>CART
            </h2>
          </Link>
        </div>

        {/* Menu Items */}
        <NavigationMenu>
          <NavigationMenuList className="flex justify-center items-center gap-10">
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

        {/* side-menu */}
        <div className="flex justify-center items-center gap-4">
          <h2 className="cursor-pointer hover:underline">Login/Register</h2>
        <Select>
        <SelectTrigger className="w-[120px]">
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
