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
    <div name="portfolio"  className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <div className='max-w-screen-2xl p-4 mx-auto text-center'>
            <p className='text-2xl md:text-3xl font-bold  text-teal-600'>PORTFOLIO</p>
            <p className='py-1 border-b-4'>Check some of my work below</p>
            <div className='w-full h-full grid sm:grid-cols-2 md:grid-cols-3 gap-12 py-8 px-12sm:px-0 '>
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
        
        <div className='shadow-lg p-3 rounded-xl flex flex-col justify-center'>
            <Image src={props.img} style={{
                width: '100%',
                height: '75%',
                }} 
            className="rounded-lg duration-300 hover:scale-105 pb-2"  />
            <div className='flex items-center justify-center pt-5'>
                <button className='text-lg px-6 w-1/2 duration-200 hover:scale-110'>Demo</button>
                <button className='text-lg px-6 w-1/2 duration-200 hover:scale-110'>Code</button>
            </div>
        </div>
    
    )
}
