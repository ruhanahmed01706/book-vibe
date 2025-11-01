import React from 'react';
import { Link, NavLink } from 'react-router';


const Navber = () => {
    const links = <>

        <NavLink to={"/"}

            className={({ isActive }) =>
                isActive ? "font-bold underline" : "hover:text-green-400"
            }

        ><li className='m-3 text-xl'>Home</li></NavLink>

        <NavLink to={"/about"}
            className={({ isActive }) =>
                isActive ? "font-bold underline" : "hover:text-green-400"
            }
        ><li className='m-3 text-xl '>Listed Books</li></NavLink>
        <NavLink to={"/readpage"} className={({ isActive }) =>
            isActive ? "font-bold underline" : "hover:text-green-400"
        }
        ><li className='m-3 text-xl '>Page To Read</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <h1 className='text-2xl font-bold'>Book Vibe</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                <button className="btn btn-active btn-success text-white">Sign In</button>
                <button className="btn btn-active btn-info text-white">Sign In</button>
            </div>
        </div>
    );
};

export default Navber;