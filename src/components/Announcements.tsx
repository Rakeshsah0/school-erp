

const Announcements = () => {
    const announcements = [
        {
          id: 1,
          title: "Fee Payement",
          date: "14-02-2024",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 2,
          title: "Farewell of class 10",
          date: "28-06-2024",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 3,
          title: "Morning shift",
          date: "17-11-2024",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 4,
            title: "Welcome party",
            date: "1-1-2024",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
      ];
      const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
      }
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex items-center justify-between">
            <h1 className='text-xl font-semibold my-4'>Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            {announcements.map((announcement)=>(
                <div key={announcement.id} className="odd:bg-rkPurpleLight even:bg-rkSky p-2 mx-1 rounded-md border-2 border-gray-100">
                    <div className="flex items-center justify-between ">
                        <h1 className='font-semibold text-gray-600'>{truncateText(announcement.title, 15)}</h1>
                        <span className='text-gray-300 text-xs bg-white rounded-md px-1'>{announcement.date}</span>
                    </div>
                    <p className='mt-2 text-gray-400 text-sm'>{truncateText(announcement.description, 45)}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Announcements