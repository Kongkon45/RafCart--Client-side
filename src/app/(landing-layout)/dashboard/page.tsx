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

const Dashboard = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
    return (
        <div className="flex gap-6 mx-10">
            <div className="w-1/5 bg-[#14d1d5] text-white">
                <Button className="w-40 flex mx-auto my-10 justify-center gap-2 items-center"><span><MdDashboard/></span>Dashboard</Button>

                {/* top Products  */}
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button className="w-40 flex mx-auto mb-10 justify-center gap-2 items-center"><span><FaProductHunt/></span>Top Products</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-60">
                        <DropdownMenuLabel className="cursor-pointer">All Products</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                        >
                        Create Product
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        disabled
                        >
                        Update Product
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showPanel}
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
                    <DropdownMenuContent className="w-60">
                        <DropdownMenuLabel>All Products</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                        checked={showStatusBar}
                        onCheckedChange={setShowStatusBar}
                        >
                        Create Product
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showActivityBar}
                        onCheckedChange={setShowActivityBar}
                        disabled
                        >
                        Update Product
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                        checked={showPanel}
                        onCheckedChange={setShowPanel}
                        >
                        Delete Product
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                
                <Button className="w-40 flex mx-auto my-10 justify-center gap-2 items-center"><span><IoSettingsOutline/></span>Settings</Button>
                <Button className="w-40 flex mx-auto my-10 justify-center gap-2 items-center"><span><IoHome/></span><Link href="/">Home</Link></Button>
                
            </div>
            <div className="w-4/5 border-2">
                hi
            </div>
        </div>
    );
};

export default Dashboard;