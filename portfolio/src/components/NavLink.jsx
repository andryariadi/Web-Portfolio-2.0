"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathName = usePathname();

  console.log(pathName, "<----dinavlink");
  return (
    <Link href={link.url} className={`nav-link text-lg text-white font-semibold px-3 py-2 rounded-md ${pathName === link.url && "bg-black text-white"}`}>
      {link.title}
    </Link>
  );
}
