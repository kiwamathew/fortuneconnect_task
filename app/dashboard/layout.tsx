import Link from "next/link";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from "../../public/assets/images/FortuneLogo.png";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <aside className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-[#EDDFE0] shadow-lg flex flex-col">
      <Link href="#" className="flex items-center justify-center lg:justify-start gap-2 mb-6 p-2 hover:bg-gray-100 rounded transition duration-200">
        <Image src={logo} alt="logo" width={40} height={40} className="rounded-full" />
        <span className="hidden lg:block text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-200">
          Fortune 500 Klub
        </span>
      </Link>

        
        <Menu />

      </aside>
        
      <main className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <div>
          <Navbar />
        </div>
        <div className="mt-10">
          {children}
        </div>
        
      </main>
    </div>
  );
}
