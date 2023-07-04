import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 text-center bg-[#3b5683]">
      <div className="container mx-auto flex flex-col md:flex-row  justify-between">
        <p className="text-sm text-gray-400">
          © 2023 Nuno Moura. All rights reserved.
        </p>
        <div className=" flex mt-4 md:mt-0 justify-center md:justify-end text-sm text-white">
          <Link
            href="https://www.instagram.com/nunoandremoura/"
            target="_blank"
          >
            <p className=" hover:text-gray-900 hover:underline">Instagram</p>
          </Link>
          <Link href="https://github.com/NAMoura" target="_blank">
            <p className="px-10 hover:text-gray-900 hover:underline">Github</p>
          </Link>
          <Link href="https://www.linkedin.com/in/namoura/" target="_blank">
            <p className=" hover:text-gray-900 hover:underline">Linkedin</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
