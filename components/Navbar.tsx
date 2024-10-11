import Image from "next/image";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-white shadow-md fixed top-0 right-0 z-50 w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]'>
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-1 ring-gray-300 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
          aria-label="Search"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="w-40 p-2 bg-transparent outline-none"
          aria-label="Search input"
        />
      </div>

      {/* Right Side Navbar */}
      <div className='flex items-center gap-6 justify-end w-full'>          
        {/* Notification Icon */}
        <div className='relative flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md cursor-pointer'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            aria-label="Notifications"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" 
            />
          </svg>
          <div className='absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        
        {/* User Info */}
        <div className='flex items-center'>
          <div className='flex flex-col mr-2'>
            <span className="text-xs leading-3 font-medium">Duncan Asiimwe</span>
            <span className="text-[10px] text-gray-500">Admin</span>
          </div>
          <div className='relative w-8 h-8 rounded-full overflow-hidden'>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
          aria-label="User settings"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
          </div>
        </div>

        {/* User Settings Icon */}
        
      </div>
    </div>
  );
};

export default Navbar;
