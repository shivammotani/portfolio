import Image from "next/image";
import React from 'react';
import design from "../assets/design.png";
import code from "../assets/code.png";
import consulting from "../assets/consulting.png";

const Services = () => {
  return (
    <div  className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <div>
            <h3 className="text-xl py-1 font-bold inline border-b-4">Service I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
                Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                eleifend turpis, id vulputate
                <span className="text-teal-500"> sapien</span> dolor ac felis.
                Proin eget mattis sem. Nunc lacinia urna mi, vitae iaculis massa
                posuere eget. Sed in nisl risus.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
                Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                eleifend turpis, id vulputate
                <span className="text-teal-500"> sapien</span> dolor ac felis.
                Proin eget mattis sem. Nunc lacinia urna mi, vitae iaculis massa
                posuere eget. Sed in nisl risus.
            </p>
        </div>

        <div className="lg:flex gap-10 ">
            <CardTemplate img={design}/>
            <CardTemplate img={code}/>
            <CardTemplate img={consulting}/>
        </div>
    </div>    
  )
}

export default Services


const CardTemplate = (props) => {
    return(
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <div className="text-5xl flex justify-center">
                    <Image src={props.img} width={100} height={100} />
                </div>
                <h3 className="text-lg font-medium pt-8 pb-2">
                    Beautiful Design
                </h3>
                <p className="py-2 text-gray-800">
                    Nullam porttitor, tortor vitae pharetra hendrerit, ante risus
                    eleifend turpis, id vulputate
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I use</h4>
                <p className="text-gray-800 py-1">Photshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
            </div>
    )
}