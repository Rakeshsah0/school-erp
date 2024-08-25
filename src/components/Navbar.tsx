import Image from "next/image"
let n=89
const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
        {/* search */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="" width={16} height={16}/>
            <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none"/>
        </div>

        {/* icons */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <Image src="/message.png" alt="" height={20} width={20}/>
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <Image src="/announcement.png" alt="" height={20} width={20}/>
                <div className="absolute -top-3 -right-3 w-6 h-6 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
                    {n>9?(<>
                    9+</>):(<>{n}</>)}
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-xs leading-3 font-medium">Rakesh Sah</span>
                <span className="text-[10px] text-gray-500 text-right"> Admin</span>
            </div>
            <Image src="/avatar.png" alt="" height={36} width={36} className="rounded-full"/>
        </div>
    </div>
  )
}

export default Navbar