import Image from "next/image";
import React from 'react';
import design from "../assets/design.png";
import code from "../assets/code.png";
import consulting from "../assets/consulting.png";

const Services = () => {
  return (
    <div  className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 ">
        <div className="max-w-screen-2xl p-4 mx-auto text-center">
            <p className='text-2xl md:text-3xl font-bold  text-teal-600'>SERVICES</p>
            <p className='py-1 border-b-4'>Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                eleifend turpis, id vulputate
                <span className="text-teal-500"> sapien</span> dolor ac felis.
                Proin eget mattis sem. Nunc lacinia urna mi, vitae iaculis massa
                posuere eget. Sed in nisl risus.</p>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-12 px-12 sm:px-0">
                <CardTemplate img={design}/>
                <CardTemplate img={code}/>
                <CardTemplate img={consulting}/>
            </div>
        </div>
    </div>    
  )
}

export default Services


const CardTemplate = (props) => {
    return(
        <div className="flex flex-col justify-center items-center mx-auto shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <Image src={props.img} width={100} height={100}/>
            <div className="text-xl flex flex-col items-center justify-center">
                <p className="text-lg font-medium pt-8 pb-2">Beautiful Design</p>
                <p className="py-2 text-gray-800">Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                eleifend turpis, id vulputate</p>
                <p className="py-4 text-teal-600">Design Tools I use</p>
                <p className="text-gray-800 py-1">Photshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
            </div>
        </div>
    )
}