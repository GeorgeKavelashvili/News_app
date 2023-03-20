import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1>World News</h1>
        </Link>
        <div>{/* DarkModeButton */}</div>
      </div>
    </header>
  );
}

export default Header;
