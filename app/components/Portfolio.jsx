import React from 'react'
import Image from "next/image";
import web1 from "../assets/web1.png";
import web2 from "../assets/web2.png";
import web3 from "../assets/web3.png";
import web4 from "../assets/web4.png";
import web5 from "../assets/web5.png";
import web6 from "../assets/web6.png";

const Portfolio = () => {
  return (
    <div name="portfolio"  className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 md:h-screen ">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <h3>Portfolio</h3>
                <p>Check some of my work below</p>
            </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <PortfolioCard img = {web1}/>
                <PortfolioCard img = {web2}/>
                <PortfolioCard img = {web3}/>
                <PortfolioCard img = {web4}/>
                <PortfolioCard img = {web5}/>
                <PortfolioCard img = {web6}/>
            </div>
        </div>
    </div>

  )
}

export default Portfolio;


const PortfolioCard = (props) => {
    return(
        
        <div className='shadow-lg p-3 rounded-xl'>
        <Image src={props.img} className="rounded-lg duration-300 hover:scale-105 pb-2" width={"50%"}
         height={"50%"} layout="responsive" />
            <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 m-3 duration-200 hover:scale-110 '>Demo</button>
                <button className='w-1/2 px-6 m-3 duration-200 hover:scale-110'>Code</button>
            </div>
        </div>
    
    )
}