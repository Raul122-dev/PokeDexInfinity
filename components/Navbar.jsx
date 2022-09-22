import Image from "next/image";
import Link from "next/link";

function Navbar () {
  return (
    <nav className="w-full h-20 bg-red-500 py-2 text-white shadow-sm shadow-slate-400">

        <div className="max-w-7xl m-auto h-full flex items-center justify-between">

            <Image src="/icons/International_Pokemon_logo.svg" alt="logo" width={100} height={56} />

            <div className="px-4 grid grid-cols-3 gap-5 font-bold tracking-wide">
              <Link href="/">
                <a className="h-10 grid place-content-center px-4 rounded-sm transition-all duration-300 ease-in-out hover:bg-[#000000a9] ">Home</a> 
              </Link>
              <Link href="/buscar">
                <a className="h-10 grid place-content-center px-4 rounded-sm transition-all duration-300 ease-in-out hover:bg-[#000000a9]">Buscar</a> 
              </Link>
              <a href="#" className="grid place-content-center px-4">Oscuro</a> 
            </div>

        </div>
      
    </nav>
  );
}

export default Navbar