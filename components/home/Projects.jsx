import React from 'react'
import { FaLaptopCode } from "react-icons/fa6";
import Link from 'next/link';

const Projects = () => {

    const projexts = [
        {
            name: "Portfolio",
            tech: "Next.JS, Tailwind Css",
            desc: "Personal showcase for projects and achievements",
            link: "",
        },
        {
            name: "AiNrzy",
            tech: "Next.JS, Tailwind Css",
            desc: "Open-source AI development community platform",
            link: "",
        },
        {
            name: "SyntaxMeet",
            tech: "Next.JS, Tailwind Css",
            desc: "Video calling web application for seamless meetings",
            link: "",
        },
    ]

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-medium self-start text-slate-300 flex gap-2 items-center'>Projects <FaLaptopCode className='text-3xl' /></h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-stretch gap-5'>
                    {projexts.map((projext, index) => (
                        <Link href={projext.link} target="blank" key={index} className='flex flex-col justify-center items-center gap-1 p-4 rounded-lg card h-full'>
                            <h1 className='text-5xl font-semibold text-center mt-0 p-5 w-full rounded-lg proj'>{projext.name}</h1>
                            <h2 className='text-xl font-medium text-slate-300 self-start my-auto'>{projext.desc}</h2>
                            <h2 className='font-medium text-slate-300 self-start my-auto'>{projext.tech}</h2>
                        </Link>
                    ))}
                </div>
                <Link href='/projects' className='btn text-slate-800 bg-slate-200 hover:bg-slate-300 transition ease-in-out text-xl font-medium px-3 py-2 rounded-lg mt-2'>More Projects</Link>
            </div>
        </section>
    )
}

export default Projects