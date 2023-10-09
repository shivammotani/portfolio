import React from 'react';


const Experience = () => {
  return (
    <div name="experience"  className="bg-white px-10 md:px-20 lg:px-40 h-full dark:bg-gray-900">
          <div className="max-w-screen-lg p-4 mx-auto w-full text-center h-full">
            <p className='text-2xl md:text-3xl font-bold  text-teal-600'>EXPERIENCE</p>
            <p className='py-1 border-b-4'>Below is my Experience</p>
            <div className="timeline">
                <ExperienceCard alignment={"left-container"} institution = {"Facebook"} year = {"2001-2003"} summary = {"Nullam porttitor, tortor vitae pharetra hendrerit, ante risus                    eleifend turpis, id vulputate"}/>
                <ExperienceCard alignment={"right-container"} institution = {"Alphabet"} year = {"2001-2003"} summary = {"Nullam porttitor, tortor vitae pharetra hendrerit, ante risus                    eleifend turpis, id vulputate"}/>
                <ExperienceCard alignment={"left-container"} institution = {"Apple"} year = {"2001-2003"} summary = {"Nullam porttitor, tortor vitae pharetra hendrerit, ante risus                    eleifend turpis, id vulputate"}/>
            </div>
          </div>
    </div>
  )
}

export default Experience

const ExperienceCard = (props) => {
    return(
        <div className={"container shadow-lg rounded-xl my-10" + " " + props.alignment}>
            <span className="qual_rounder"></span>
            <div className="text-box">
                <h2>{props.institution}</h2>
                <small>{props.year}</small>
                <p>{props.summary}</p>
                <span className={props.alignment+"-arrow"}></span>
            </div>
      </div>
    )
}