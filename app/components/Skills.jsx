import React from 'react'
import Image from "next/image";
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextJs from "../assets/nextjs.png"
import graphQl from "../assets/graphql.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"


const Skills = () => {
  return (
    <div name="skills" className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 
    md:h-screen ">
        <div className='max-w-screen-2xl p-4 mx-auto text-center'>
            <div>
                <p className='text-2xl md:text-3xl font-bold  text-teal-600'>SKILLS</p>
                <p className='py-1 border-b-4'>There are the technologies I've worked with</p>
                <div className='w-full h-full grid grid-cols-2 md:grid-cols-4 gap-12 text-center
                    py-8 px-12 sm:px-0'>
                    <SkillsCard img={html} title = {"HTML"} style = {'shadow-orange-400'}/>
                    <SkillsCard img={css} title = {"CSS"} style = {'shadow-blue-400'}/>
                    <SkillsCard img={javascript} title = {"JAVASCRIPT"} style = {'shadow-yellow-400'}/>
                    <SkillsCard img={reactImage} title = {"REACT"} style = {'shadow-blue-400'}/>
                    <SkillsCard img={nextJs} title = {"NEXTJS"} style = {'shadow-zinc-600'}/>
                    <SkillsCard img={graphQl} title = {"GRAPHQL"} style = {'shadow-pink-400'}/>
                    <SkillsCard img={github} title = {"GITHUB"} style = {'shadow-stone-600'}/>
                    <SkillsCard img={tailwind} title = {"TAILWIND"} style = {'shadow-sky-400'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills

const SkillsCard = (props) => {
    return (
        <div className={'shadow-lg hover:scale-105 duration-300 py-2 rounded-lg' + " "  + props.style}> 
                        <Image src={props.img} className="w-20 mx-auto md:w-28"></Image>
                        <p className='mt-4 '>{props.title}</p>
                    </div>
    )
}