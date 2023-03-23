import { motion } from 'framer-motion'

import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

import { SectionWrapper } from '../hoc'

const FeedbackCard = ({
   company,
   designation,
   image,
   index,
   name,
   testimonial
}) => (
   <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='xs:w-[320px] w-full p-10 rounded-2xl bg-black-200'
   >
      <p className='text-[48px] font-black text-white'>"</p>
      <div className='mt-1'>
         <p className='text-[18px] tracking-wider text-white'>{testimonial}</p>
         <div className='flex items-center justify-between gap-1 mt-7'>
            <div className='flex flex-col flex-1'>
               <p className='text-[16px] font-medium text-white'>
                  <span className='blue-text-gradient'>@</span> {name}
               </p>
               <p className='mt-1 text-[12px] text-secondary'>{designation} of {company}</p>
            </div>

            <img src={image} alt={`feedback-by-${name}`} className='h-10 w-10 object-cover rounded-full' />
         </div>
      </div>
   </motion.div>
)

const Feedback = () => (
   <div className='mt-12 rounded-[20px] bg-black-100'>
      <div className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}>
         <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
         </motion.div>
      </div>

      <div className={`${styles.paddingX} flex flex-wrap justify-center gap-7 -mt-20 pb-14`}>
         {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
         ))}
      </div>
   </div>
)

export default SectionWrapper(Feedback, '')
