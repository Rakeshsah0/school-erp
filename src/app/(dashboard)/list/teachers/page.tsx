import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";

const TeacherListPage = () => {
  return (
    <div className="flex-1 bg-white p-4 m-4 mt-0">
      {/* Top  */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-rkYellow">
              <Image
                src="/filter.png"
                alt=""
                width={14}
                height={14}
                className=""
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-rkYellow">
              <Image
                src="/sort.png"
                alt=""
                width={14}
                height={14}
                className=""
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-rkYellow">
              <Image
                src="/plus.png"
                alt=""
                width={14}
                height={14}
                className=""
              />
            </button>
          </div>
        </div>
      </div>

      {/* Lists  */}
      <div></div>

      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
