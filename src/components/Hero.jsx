import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputerCanvas } from './canvas'

const Hero = () => (
   <section className='relative h-screen w-full mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] flex flex-row items-start gap-5 max-w-7xl mx-auto`}>
         <div className='flex flex-col items-center justify-center mt-5'>
            <div className='h-5 w-5 rounded-full bg-violet' />
            <div className='sm:h-80 h-40 w-1 violet-gradient' />
         </div>

         <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
               Hi, I'm <span className='text-violet'>TacitNeptune</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
               I'm a Web, Mobile and PC developer <br className='sm:block hidden' />
               built with cutting-edge technologies
            </p>
         </div>
      </div>

      <ComputerCanvas />

      <div className='absolute bottom-10 flex items-center justify-center w-full'>
         <a href='#about'>
            <div className='flex items-start justify-center h-[64px] w-[35px] p-2 rounded-3xl border-4 border-secondary'>
               <motion.div
                  animate={{
                     y: [0, 26, 0]
                  }}
                  transition={{
                     duration: 1.5,
                     repeat: Infinity,
                     repeatType: 'loop'
                  }}
                  className='h-3 w-3 mb-1 rounded-full bg-secondary'
               />
            </div>
         </a>
      </div>
   </section>
)

export default Hero
