import { Fade, Flip } from 'react-awesome-reveal'
import './App.css'
import Header from './Components/Header/Header'
import SchoolCard from './Components/SchoolCard/SchoolCard'
import ResearchPaper from './Components/StudentResearchPaper/ResearchPaper'
import Marquee from "react-fast-marquee"
import Gallery from './Components/ImageGalery/Gallery'
import Reviews from './Components/Reviews/Reviews'
import { useQuery } from '@tanstack/react-query'
import useAxios from './Components/hooks/useAxios'
import ParallaxComponent from 'react-parallax-component';
import { Rating } from '@smastrom/react-rating'
import { FaUserAlt } from "react-icons/fa";
import Footer from './Components/Footer/Footer'
import useAuth from './Components/Authntication/useAuth'
import { Link, Outlet } from 'react-router-dom'

function App() {

  const { user, logout } = useAuth();

  const userOut = () => {
    logout()
  }

  return (
    <div className='bg-[#03030B] w-[95%] mx-auto'>
      <div className="navbar bg-black/70 text-white fixed  w-[95%] mx-auto z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              <Link to={'/'}>
                <li><a>Home</a></li>
              </Link>
              <Link to={'/collagePage'}>
                <li><a>Colleges</a></li>
              </Link>
              <li><a>Admission</a></li>
              <li><a>My College</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to={'/'}>
              <li><a>Home</a></li>
            </Link>
            <Link to={'/collagePage'}>
              <li><a>Colleges</a></li>
            </Link>
            <li><a>Admission</a></li>
            <li><a>My College</a></li>
          </ul>
        </div>
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        {/*  */}
        <div className="dropdown dropdown-end mx-4">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {/* <img src={""} /> */}
              {
                user?.photoURL ? <img src={user?.photoURL} /> : <FaUserAlt className='text-4xl'></FaUserAlt>
              }

            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-52">
            {
              user ? <div className="p-2">
                <li>{user?.displayName}</li>
                <li><a>{user?.email}</a></li>
                <li className='my-2' onClick={userOut}><a>Logout</a></li>
              </div> :
                <div className=" p-2">
                  <Link to={'/register'}>
                    <li className='my-2'>Register</li>
                  </Link>
                  <Link to={'/userLogin'}>
                    <li>Login</li>
                  </Link>
                </div>
            }
          </ul>
        </div>
      </div>
      {/* // header  */}
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  )
}

export default App
