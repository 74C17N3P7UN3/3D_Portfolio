import {
   VerticalTimeline,
   VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ExperienceCard = ({ experience }) => (
   <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      icon={
         <div className='flex items-center justify-center h-full w-full'>
            <img src={experience.icon} alt={experience.company_name} className='h-[60%] w-[60%] object-contain' />
         </div>
      }
      iconStyle={{ background: experience.iconBg }}
   >
      <div>
         <h3 className='text-[34px] font-bold text-white'>{experience.title}</h3>
         <p className='text-[16px] font-semibold text-secondary' style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className='mt-5 ml-5 space-y-2 list-disc'>
         {experience.points.map((point, index) => (
            <li
               key={`experience-point-${index}`}
               className='pl-1 text-[14px] tracking-wider text-white-100'
            >
               {point}
            </li>
         ))}
      </ul>
   </VerticalTimelineElement>
)

const Experience = () => (
   <>
      <motion.div variants={textVariant()}>
         <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
         <h2 className={`${styles.sectionHeadText} text-center`}>Learning Experience.</h2>
      </motion.div>

      <div className='flex flex-col mt-20'>
         <VerticalTimeline>
            {experiences.map((experience, index) => (
               <ExperienceCard key={index} experience={experience} />
            ))}
         </VerticalTimeline>
      </div>
   </>
)

export default SectionWrapper(Experience, 'work')
