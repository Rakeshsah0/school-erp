import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[15%] p-4 flex flex-col h-full">
        <Link href='/' className="flex items-center justify-center lg:justify-start gap-2">
          <Image src="/logo.png" alt="" width={32} height={32}/>
          <span className="hidden lg:block">RK School</span>
        </Link>
        <Menu/>
      </div>
      {/* RIGHT */}
      <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[85%] bg-[#F7F8FA] overflow-y-auto">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
