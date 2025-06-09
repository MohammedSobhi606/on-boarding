export default function Navbar() {
  return (
    <div className="fixed z-10 w-full  left-1/2 -translate-x-1/2">
      <nav
        className="flex justify-between items-center md:w-2xl     px-6 py-2 shadow rounded-full bg-white mx-auto 
     "
      >
        {/* logo */}
        <a href="#" className="text-2xl font-semibold ">
          C<span className="text-amber-800">&</span>mpatto
        </a>
        <ul className="flex gap-5 max-sm:hidden ">
          <li className="hover:text-amber-900 transition-colors cursor-pointer">
            Home
          </li>
          <li className="hover:text-amber-900 transition-colors cursor-pointer">
            About
          </li>
          <li className="hover:text-amber-900 transition-colors cursor-pointer">
            Services
          </li>
          <li className="hover:text-amber-900 transition-colors cursor-pointer">
            who we are?
          </li>
        </ul>
        {/* button */}
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg px-6 py-2 text-white bg-amber-900/80 hover:bg-amber-900 transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
