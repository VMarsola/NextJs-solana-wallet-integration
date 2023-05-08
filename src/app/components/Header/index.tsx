import Image from "next/image";
import Logo from "@/assets/logo";
export function Header() {
  return (
    <header className="flex flex-col bg-transparent min-w-screen border-b-2 border-gray-200">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="py-4 ">
          <Logo />
        </div>
      </div>
    </header>
  );
}
