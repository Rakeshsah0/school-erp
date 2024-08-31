import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* Left  */}
      <div className="w-full xl:w-2/3">
        {/* Top  */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* User Card  */}
          <div className="bg-rkSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">John Deo</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image
                    src="/blood.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span className="text-xs">A+</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image
                    src="/date.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span className="text-xs">5 January 2001</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image
                    src="/mail.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span className="text-xs">lorem@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image
                    src="/phone.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span className="text-xs">+1 234 56789</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards  */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {/* CArd  */}
            <div className="bg-white p-4 w-full rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div>
                <h1 className="text-xl font-semibold">92%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div className="bg-white p-4 w-full rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src="/singleBranch.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div>
                <h1 className="text-xl font-semibold">2</h1>
                <span className="text-sm text-gray-400">Branches</span>
              </div>
            </div>
            <div className="bg-white p-4 w-full rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src="/singleLesson.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div>
                <h1 className="text-xl font-semibold">5</h1>
                <span className="text-sm text-gray-400">Lesson</span>
              </div>
            </div>
            <div className="bg-white p-4 w-full rounded-md flex gap-4 md:w-[48%] xl:w-[45%] 2xl:w-[47%]">
              <Image
                src="/singleClass.png"
                alt=""
                height={24}
                width={24}
                className="h-6 w-6"
              />
              <div>
                <h1 className="text-xl font-semibold">8</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>
            </div>
          </div>
        </div>

        {/* Buttom  */}
        <div className="bg-white mt-4 rounded-md p-4 h-[800px]">
          Teacher&apos;s Schedule
          <BigCalendar />
        </div>
      </div>

      {/* RIght  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 text-xs flex gap-4 flex-wrap text-gray-500">
            <Link
              className="p-3 rounded-md bg-rkPurpleLight"
              href="/">
              Teacher&apos;s Classes{" "}
            </Link>
            <Link
              className="p-3 rounded-md bg-rkYellowLight"
              href="/">
              Teacher&apos;s Students{" "}
            </Link>
            <Link
              className="p-3 rounded-md bg-rkSkyBlue"
              href="/">
              Teacher&apos;s Lessons{" "}
            </Link>
            <Link
              className="p-3 rounded-md bg-rkPurpleLight"
              href="/">
              Teacher&apos;s Exams{" "}
            </Link>
            <Link
              className="p-3 rounded-md bg-rkYellowLight"
              href="/">
              Teacher&apos;s Assignments{" "}
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
