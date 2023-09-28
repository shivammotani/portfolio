import React from 'react'
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
  } from "react-icons/ai";


const SocialLinks = () => {

    const Links = [
        {
            id:1,
            child:(
                <>Linkedin <AiFillLinkedin size={30}/> </>
            ),
            href: 'https://google.com',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>Twitter <AiFillTwitterCircle size={30}/> </>
            ),
            href: 'https://google.com',
        },
        {
            id:3,
            child:(
                <>Youtube <AiFillYoutube size={30}/> </>
            ),
            href: 'https://google.com',
            style: 'rounded-br-md'
        }
    ]



  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {Links.map((link) => (
                <li key = {link.id}  className={"flex justify-between items-center w-40 h-14                    px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + link.style}>
                    <a href={link.href} className='flex justify-between items-center w-full'   target="_blank"
                    rel = "noreferrer">
                        {link.child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks