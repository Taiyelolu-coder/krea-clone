"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Home,
  GalleryHorizontal,
  PenTool,
  Droplet,
  Folder,
  Video,
  Wand2,
  Image as ImageIcon,
  HelpCircle,
  Bell,
  Sun,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-4 px-6 bg-white">
      {/* Left: Logo + Username */}
      <div className="flex items-center space-x-3">
        {/* Krea AI Logo */}
        <Image
          src="/images/krea+logo.png" 
          alt="Krea AI Logo"
          width={50}
          height={50}
          className="rounded-sm"
        />
          {/* Profile Avatar Placeholder */}
        <div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_center,_#ffffff,_#bdb0e4,_#b391ee)]"></div>
        <div className="flex items-center space-x-1">
          <span className="font-bold">benevolentminibeibat</span>
          <span className="text-gray-500 cursor-pointer">▾</span>
        </div>
      </div>

      {/* Center Action Bar */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-1 shadow-sm">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Home size={18} className="text-black" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <GalleryHorizontal size={18} className="text-black" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video size={18} className="text-black" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Wand2 size={18} className="text-black" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <PenTool size={18} className="text-black" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Droplet size={18} className="text-black" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Folder size={18} className="text-black" />
          </button>
          
        </div>
      </div>

      {/* Right: Gallery / Support / Avatar / Notifications / Theme */}
      <div className="flex items-center space-x-3">
        <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
          <ImageIcon size={16} className="text-black" />
          <span className="font-bold">Gallery</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
          <HelpCircle size={16} className="text-black" />
          <span className="font-bold">Support</span>
        </button>
   
        {/* Notifications */}
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell size={18} className="text-black" />
        </button>
        {/* Theme Toggle */}
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Sun size={18} className="text-black" />
        </button>
      {/* Profile Avatar Placeholder */}
        <div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_center,_#ffffff,_#bdb0e4,_#b391ee)]"></div>
      </div>
    </nav>
  );
}
