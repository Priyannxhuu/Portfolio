import React from 'react'
import { skills , tools , os } from '@/data/skills';

const Skills = () => {

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-semibold self-start text-slate-300 flex gap-2 items-center'>My Skills</h1>
                </div>
                <div className="flex flex-wrap justify-start items-center  gap-4 w-full">
                    {skills.map((skill, index) => (
                        <div className="flex justify-start items-center" key={index}>
                            <h1 className="text-[18px] font-medium text-slate-200 flex gap-2 items-center rounded-lg px-3 py-2 hover:text-slate-400 transition ease-in-out cursor-pointer border-b-2 border-slate-400 card">{skill.name}{skill.icon}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-semibold self-start text-slate-300 flex gap-2 items-center'>My Tools</h1>
                </div>
                <div className="flex flex-wrap justify-start items-center  gap-4 w-full">
                    {tools.map((tool, index) => (
                        <div className="flex justify-start items-center" key={index}>
                            <h1 className="text-[18px] font-medium text-slate-200 flex gap-2 items-center rounded-lg px-3 py-2 hover:text-slate-400 transition ease-in-out cursor-pointer border-b-2 border-slate-400 card">{tool.name}{tool.icon}</h1>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-semibold self-start text-slate-300 flex gap-2 items-center'>My Operating System</h1>
                </div>
                <div className="flex flex-wrap justify-start items-center  gap-4 w-full">
                    {os.map((o, index) => (
                        <div className="flex justify-start items-center" key={index}>
                            <h1 className="text-[18px] font-medium text-slate-200 flex gap-2 items-center rounded-lg px-3 py-2 hover:text-slate-400 transition ease-in-out cursor-pointer border-b-2 border-slate-400 card">{o.name}{o.icon}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;