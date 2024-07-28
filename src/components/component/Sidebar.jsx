import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="flex flex-row w-64 h-screen p-4 bg-gray-500">
      <ul className='min-w-full'>
        <li className="mb-4 hover:bg-gray-300 hover:text-primary-foreground rounded-md py-1 ">
          <Link href="/meeting-room">
            <span className=''>Meeting</span>
          </Link>
        </li>
        <li className="mb-4 hover:bg-gray-300 hover:text-primary-foreground rounded-md py-1 ">
          <Link href="/homepage">
            <span>Chat</span>
          </Link>
        </li>
        <li className="mb-4 hover:bg-gray-300 hover:text-primary-foreground rounded-md py-1 ">
          <Link href="/participants">
            <span>Participants</span>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
