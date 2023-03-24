import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, index, icon }) => (
   <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={1000}
      className='xs:w-[250px] w-full cursor-pointer'
   >
      <motion.div
         variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
         className='w-full p-[1px] rounded-[20px] green-pink-gradient'
      >
         <div className='flex flex-col items-center justify-evenly min-h-[280px] px-12 py-5 rounded-[20px] bg-tertiary'>
            <img src={icon} alt={title} className='h-16 w-16 object-contain' />
            <h3 className='text-[20px] font-bold text-white text-center'>{title}</h3>
         </div>
      </motion.div>
   </Tilt>
)

const About = () => (
   <>
      <motion.div variants={textVariant()}>
         <p className={styles.sectionSubText}>Introduction</p>
         <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
         variants={fadeIn('', '', 0.1, 1)}
         className='max-w-3xl mt-4 text-secondary text-[17px] leading-[30px]'
      >
         I'm a skilled software developer with experience
         in JavaScript and expertise in frameworks like
         React, Node.js and Three.js. While I'm more
         passionate about web development, I have also
         experience with C, Python and Java. I'm a quick
         learner who always aims to create efficient,
         scalable, and user-friendly solutions. <br />
         Wanna talk? <a href='#contact' className='hover:text-white border-b border-b-secondary transition'>Let's chat!</a>
      </motion.p>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
         {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
         ))}
      </div>
   </>
)

export default SectionWrapper(About, 'about')
