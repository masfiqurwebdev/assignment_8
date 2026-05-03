'use client'
import { signOut, useSession } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"
import profile from '../../../public/instructors/instructor_1.png'

const Navbar = () => {

    const links = <>
    <li><Link href={'/'}>Home</Link></li>
    <li><Link href={'/course'}>Course</Link></li>
    <li><Link href={'/my-profile'}>My Profile</Link></li>
    </>


    const { data , isPending} = useSession();
    if(isPending){
      return <div className="text-center">loading...</div>
    }
    console.log('session data in navbar:' , data);
    const user = data?.user;

    
  return (
    <div className="container mx-auto navbar bg-base-100 ">
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

    {links}

    </ul>
  </div>
  <div className="navbar-end flex gap-6">
    {
      user ? <>
      <div className="flex items-center ">
       
        <p>Wellcome, 
           </p>
                <Image
                  className="w-10 rounded-full"
                  width={80}
                  height={80}
                  src={profile}
                  alt={"profile image"}
                />
      </div>
      <button onClick={() => signOut()}>SignOut</button>
      </>:
      
      <>
        <Link href={'/login'} className="btn btn-primary">Log In</Link>
        <Link href={'/signup'} className="btn btn-outline">Sign Up</Link>
      </>
    }

  </div>
</div>
  )
}

export default Navbar