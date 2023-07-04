import Image from "next/image";
import Link from "next/link";

export default function Logo(){

    return (
        <Link href="/" className="flex items-center">
            <Image className="hidden sm:inline-block" src="/logo.svg" alt="logo" width={220} height={42} />
            <Image className="sm:hidden" src="/logo_small.svg" alt="logo" width={39} height={42} />
        </Link>
    );

}