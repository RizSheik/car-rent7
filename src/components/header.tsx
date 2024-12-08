"use client";

import Link from "next/link";
import { Bell, Heart, Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MORENT
        </Link>

        {/* Search Bar */}
        <div className="hidden flex-1 md:flex md:max-w-md lg:max-w-lg">
          <div className="relative w-full">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search something here"
              className="w-full pl-10 text-sm"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            aria-label="Favorites"
          >
            <Heart className="h-5 w-5 text-gray-600" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            aria-label="Settings"
          >
            <Settings className="h-5 w-5 text-gray-600" />
          </Button>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Profile"
              >
                <User className="h-5 w-5 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/admin">Admin Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
