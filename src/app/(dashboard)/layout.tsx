import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="h-screen flex">
        {/* LEFT */}
        <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[15%] p-4 ">
          <Menu />
        </div>
        {/* RIGHT */}
        <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[85%] bg-[#F7F8FA] overflow-scroll flex flex-col">
          {children}
        </div>
      </div>
    </>
  );
}
