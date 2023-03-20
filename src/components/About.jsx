import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ title, index, icon }) => (
   <Tilt className='xs:w-[250px] w-full'>
      <motion.div
         variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
         className='w-full p-[1px] rounded-[20px] green-pink-gradient'
      >
         <div
            options={{
               max: 45,
               scale: 1,
               speed: 450
            }}
            className='flex flex-col items-center justify-evenly min-h-[280px] px-12 py-5 rounded-[20px] bg-tertiary'
         >
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
         I'm a skilled software developer with
         experience in TypeScript and JavaScript,
         and expertise in frameworks like React,
         Node.js, and Three.js. I'm a quick learner
         and collaborate closely with clients to
         create efficient, scalable, and
         user-friendly solutions that solve
         real-world problems. Let's work together
         to bring your ideas to life!
      </motion.p>

      <div className='flex flex-wrap gap-10 mt-20'>
         {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
         ))}
      </div>
   </>
)

export default SectionWrapper(About, 'about')
