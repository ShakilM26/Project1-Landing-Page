const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4">

{/* // logo  */}      
      <div className="text-xl font-bold">
        QuickHire
      </div>

      <ul className="flex gap-8 text-gray-600"> 
        <li>Find Jobs</li>
        <li>Browse Companies</li>
      </ul>
{/* // button  */}
      <div className="flex gap-4">
        <button className="text-blue-600">Login</button>

        <button className="bg-[#4640DE] text-[#000000] px-4 py-2 rounded">
          Sign Up
        </button>
      </div>

    </nav>
  );
};

export default Navbar;