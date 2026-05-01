import Link from "next/link"
import { CiSearch } from "react-icons/ci";


const Navbar = () => {

    const links = <>
    <li><Link href={'/'}>Home</Link></li>
    <li><Link href={'/course'}>Course</Link></li>
    <li><Link href={'/my-profile'}>My Profile</Link></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

        {links}

      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost text-xl">SkillSphere</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
           <div className="flex lg:hidden align-middle rounded-lg px-3 py-2 items-center gap-3 border-gray-600 border">
        <input type="text" placeholder="Search" className="border-0 outline-0" />

        <button >
            <CiSearch width={6} />
        </button>
    </div>
    {links}

    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <div className="flex align-middle hidden md:block rounded-lg px-3 py-2 items-center gap-3 border-gray-600 border">
        <input type="text" placeholder="Search" className="border-0 outline-0" />

        <button >
            <CiSearch width={6} />
        </button>
    </div>

    <Link href={'/signup'} className="btn btn-primary">Sign Up</Link>
  </div>
</div>
  )
}

export default Navbar