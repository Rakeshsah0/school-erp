const Pagination = () => {
  return (
    <div className="flex items-center justify-between gap-4 mt-4">
      <button
        className="py-2 px-4 rounded-md bg-slate-200 font-semibold text-xs disabled:opacity-50 disabled:cursor-not-allowed"
        disabled>
        Prev
      </button>
      <div className="text-sm flex items-center md:gap-2">
        <button className="px-2 rounded-sm bg-rkSky">1</button>
        <button className="px-2 rounded-sm ">2</button>
        <button className="px-2 rounded-sm ">3</button>
        ...
        <button className="px-2 rounded-sm ">10</button>
      </div>
      <button className="py-2 px-4 rounded-md bg-slate-200 font-semibold text-xs disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
