import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Asyncio</h1>
      <div>
        <Link href="/homepage">
          <span className="mr-4">Home</span>
        </Link>
        <Link href="/">
          Meeting
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
