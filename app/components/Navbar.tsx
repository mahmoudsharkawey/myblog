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
          <Link
            href="https://www.linkedin.com/in/mahmoud-gamal-bb4b97284"
            target="blank"
          >
            <Linkedin className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-600" />
          </Link>
          <Link href="https://github.com/mahmoudsharkawey" target="blank">
            <Github className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-600" />
          </Link>
          <Link
            href="https://youtube.com/@Mahmoud_Gamal_MG?si=CR8lV47otRtk1iB-"
            target="blank"
          >
            <Youtube className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-600" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100035122392740&mibextid=ZbWKwL"
            target="blank"
          >
            <Facebook className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-600" />
          </Link>
        </div>
        <div className="ml-8">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
