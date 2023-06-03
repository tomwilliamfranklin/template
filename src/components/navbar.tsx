"use client";

import classNames from "classnames";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className="sticky top-0 left-0 z-40 flex w-full items-center justify-end pt-20 pb-20 h-40 bg-accent1">
      <div className="bg-[blue] h-[60px] w-[800px]">
        <nav className="block pr-20 pl-20 h-full">
          <ul className="h-full flex items-center justify-end gap-7 relative">
            <li
              className={classNames("relative", {
                "bg-accent2": pathname === "/",
              })}
            >
              <Link className="link" href="/">
                option 1
              </Link>
            </li>
            <li
              className={classNames("relative", {
                "bg-accent2": pathname === "/about",
              })}
            >
              <Link className="link" href="/about">
                option 2
              </Link>
            </li>
            <li
              className={classNames("relative", {
                "bg-accent2": pathname === "/content",
              })}
            >
              <Link className="link" href="/content">
                option 3
              </Link>
            </li>
            <li
              className={classNames("relative", {
                "bg-accent2": pathname === "/contact",
              })}
            >
              <Link className="link" href="/contact">
                option 4
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
