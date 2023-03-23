import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github_white, netlify } from '../assets'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ProjectCard = ({
   deploy,
   description,
   image,
   index,
   name,
   source,
   tags
}) => (
   <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
         options={{
            max: 45,
            scale: 1,
            speed: 450
         }}
         className='sm:w-[360px] w-full p-5 rounded-2xl bg-tertiary'
      >
         <div className='relative h-[230px] w-full'>
            <img src={image} alt={name} className='h-full w-full object-cover rounded-2xl' />

            <div className='absolute inset-0 flex justify-end gap-1 m-3 card-img_hover'>
               <div
                  onClick={() => window.open(deploy, '_blank')}
                  className='flex items-center justify-center h-10 w-10 rounded-full black-gradient hover:border-2 hover:border-teal-600 transition-all duration-75 cursor-pointer'
               >
                  <img src={netlify} alt="netlify" className='h-1/2 w-1/2 object-contain' />
               </div>
               <div
                  onClick={() => window.open(source, '_blank')}
                  className='flex items-center justify-center h-10 w-10 rounded-full black-gradient hover:border-2 hover:border-white transition-all duration-75 cursor-pointer'
               >
                  <img src={github_white} alt="github" className='h-1/2 w-1/2 object-contain' />
               </div>
            </div>
         </div>

         <div className='mt-5'>
            <h3 className='text-[24px] font-bold text-white'>{name}</h3>
            <p className='mt-2 text-[14px] text-secondary'>{description}</p>
         </div>

         <div className='flex flex-wrap gap-2 mt-4'>
            {tags.map((tag) => (
               <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
         </div>
      </Tilt>
   </motion.div>
)

const Work = () => (
   <>
      <motion.div variants={textVariant()}>
         <p className={`${styles.sectionSubText}`}>My work</p>
         <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='flex w-full'>
         <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className='max-w-3xl mt-4 text-secondary text-[17px] leading-[30px]'
         >
            Following projects showcases my skills and
            experience through real-world examples of my
            work. Each project is briefly described with
            links to code repositories and live demos in
            it. It reflects my ability to solve complex
            problems, work with different technologies,
            and manage projects effectively.
         </motion.p>
      </div>

      <div className='flex flex-row flex-wrap justify-center gap-7 mt-20'>
         {projects.map((project, index) => (
            <ProjectCard
               key={`project-${index}`}
               index={index}
               {...project}
            />
         ))}
      </div>
   </>
)

export default SectionWrapper(Work, '')
