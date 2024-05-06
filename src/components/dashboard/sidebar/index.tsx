"use client"
 
import * as React from "react"
import Link from "next/link";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 
type Checked = DropdownMenuCheckboxItemProps["checked"]


import { MdDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import CreateProduct from "../topProducts/createProduct";

const Sidebar = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
    return (
        <div className="bg-[#14d1d5] text-white">
            <div className=" h-screen pt-10">
                <Button className="w-40 flex mx-auto mb-10 justify-center gap-2 items-center"><span><MdDashboard/></span>Dashboard</Button>

                {/* top Products  */}
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button className="w-40 flex mx-auto mb-10 justify-center gap-2 items-center"><span><FaProductHunt/></span>Top Products</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                        {/* <DropdownMenuLabel className="cursor-pointer"><Link href={<AllProducts/>}>All Products</Link></DropdownMenuLabel>
                        <DropdownMenuSeparator /> */}
                        <DropdownMenuCheckboxItem
                        // checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                        >
                        <Link href="/dashboard/topProducts/allProducts">All Products</Link>
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        // checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                        >
                        <Link href="/dashboard/topProducts/createProduct">Create Product</Link>
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        // checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        // disabled
                        >
                        Update Product
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        // checked={showPanel}
                        onCheckedChange={setShowPanel}
                        >
                        Delete Product
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                {/* New Products  */}
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button className="w-40 flex mx-auto justify-center gap-2 items-center"><span><FaProductHunt/></span>New Products</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40">
                        {/* <DropdownMenuLabel>All Products</DropdownMenuLabel>
                        <DropdownMenuSeparator /> */}
                        <DropdownMenuCheckboxItem
                        // checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                        >
                        <Link href="/dashboard/newProducts/allProducts">All Products</Link>
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        // checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                        >
                        <Link href="/dashboard/newProducts/createProduct">Create Product</Link>
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        // checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        // disabled
                        >
                        Update Product
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        // checked={showPanel}
                        onCheckedChange={setShowPanel}
                        >
                        Delete Product
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                
                <Button className="w-40 flex mx-auto my-10 justify-center gap-2 items-center"><span><IoSettingsOutline/></span>Settings</Button>
                <Button className="w-40 flex mx-auto my-10 justify-center gap-2 items-center"><span><IoHome/></span><Link href="/">Home</Link></Button>
                
            </div>
        </div>
    );
};

export default Sidebar;