import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";

const NavBar = () => {

    const[nav, setNav] = useState(false);

    const links = [
        
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'portfolio'
        },
        {
            id:3,
            link:'skills'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'contact'
        }
    ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-burtons'>Shivam</h1>
        </div>
        <ul className='hidden md:flex'>

        <div className='flex cursor-pointer px-4'>
            <p>Dark Mode</p>
            <BsFillMoonStarsFill
            //   onClick={}
                className="py-1 text-2xl"
            />
        </ div >


            {links.map(({id,link}) => (
                <li key = {id} className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200'>
                    {link}</li>
            ))}


        </ul>


        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
        </div>

        {nav && (
                    <ul className='flex flex-col justify-center items-center absolute
                    top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

                        <div className='flex cursor-pointer px-4 py-6 text-4xl hover:scale-105 duration-200'>
                            <p>Dark Mode</p>
                        </ div >
            
                        {links.map(({id,link}) => (
                            <li key = {id} className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200'>
                                {link}</li>
                        ))}
            
                    </ul>
        )}


    </div>
  );
}

export default NavBar