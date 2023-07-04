import Link from "next/link";
import Logo from "./Logo";


  
export default function Header() {

  


  return (
    <header className="sticky top-0 z-10 shadow bg-white">
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />
        <div className="flex items-center text-gray-700 hover:text-gray-900">
         

         

          <Link href="/jobs" className="sm:px-8 px-6 font-semibold">
            Jobs
          </Link>
          <Link
            href="/create"
            className="border-[#3D67AA] font-semibold  text-white px-3 py-2 rounded-md bg-[#3D67AA]"
          >
            Create
          </Link>
        </div>
      </div>
    </header>
  );
}