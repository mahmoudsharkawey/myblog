import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Facebook, Github, Linkedin, Youtube } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-background w-full sticky top-0 z-10 flex items-center justify-between max-w-3xl  mx-auto p-3 border-b border-boder">
      <Link href="/" className="mb-3 font-bold text-3xl">
        Mg<span className="text-primary">Code</span>
      </Link>
      <div className="flex w-full justify-end items-center gap-4  cursor-pointer ">
        <div className="hidden sm:flex w-full justify-end items-center gap-4  cursor-pointer ">
          <Linkedin className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-600" />
          <Github className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-600" />
          <Youtube className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-600" />
          <Facebook className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-600" />
        </div>
        <div className="ml-8">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
