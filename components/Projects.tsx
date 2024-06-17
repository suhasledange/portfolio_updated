import { projects } from '@/data'
import React from 'react'
import { ThreeDCardDemo } from './ui/CardEffect'

const Projects = () => {
  return (
    <section id="projects" className='py-20'>
        <h1 className='heading'>My <span className='text-purple'>Projects</span> </h1>
        <div className='flex flex-wrap items-center justify-center w-full gap-x-32'>
            {projects.map(({id,title,des,img,iconLists,gitlink,livlink}) => (
                <div key={id} className=' flex items-center justify-center'>
                    <ThreeDCardDemo 
                    title={title}
                    des={des}
                    iconLists={iconLists}
                    img={img}
                    gitlink={gitlink}
                    livlink={livlink}
                    />                
                </div>
            ))}
        </div>
    </section>
  )
}
export default Projects
