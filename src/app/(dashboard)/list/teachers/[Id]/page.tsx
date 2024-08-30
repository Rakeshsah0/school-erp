import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-2/3">
        {/* top  */}
        <div className="flex flex-col gap-4 lg:flex-row">
          {/* User profile car */}
          <div className="flex-1 bg-rkSky px-4 py-6 rounded-sm flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/1187765/pexels-photo-1187765.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Rahul Sah</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full">
                  <Image
                    src="/blood.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full">
                  <Image
                    src="/date.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span>Jan 2001</span>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full">
                  <Image
                    src="/mail.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span>lorem@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/3 lg:w-full">
                  <Image
                    src="/phone.png"
                    alt=""
                    width={14}
                    height={14}
                  />
                  <span>+91 8036271880</span>
                </div>
              </div>
            </div>
          </div>

          {/* other cards */}
          <div className="flex-1">others</div>
        </div>
        {/* buttom */}
        <div> Schedule</div>
      </div>

      {/* right */}
      <div className="w-full xl:w-1/3">div2 </div>
    </div>
  );
};

export default SingleTeacherPage;
