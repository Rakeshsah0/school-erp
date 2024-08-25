import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle charts */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[400px]">
            <CountChart/>
          </div>
          {/* attendance chart  */}
          <div className="w-full lg:w-2/3 h-[400px]"></div>
        </div>
        {/* lower chart */}
        <div></div>
      </div>

      {/* RIGHT */}
      <div className=" w-full lg:w-1/3">Right</div>
    </div>
  );
};

export default AdminPage;
