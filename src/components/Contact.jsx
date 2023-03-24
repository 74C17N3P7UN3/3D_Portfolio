import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const Contact = () => {
   const formRef = useRef()

   const [form, setForm] = useState({
      name: '',
      email: '',
      message: '',
   })

   const [loading, setLoading] = useState(false)

   const handleChange = (e) => {
      const { name, value } = e.target

      setForm({ ...form, [name]: value })
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)

      emailjs.send(
         import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
         {
            from_name: form.name,
            to_name: 'Leonardo',
            from_email: form.email,
            message: form.message,
         },
         import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      ).then(() => {
         // TODO: Move alerts to submit button w/ states

         setLoading(false)
         setForm({
            name: '',
            email: '',
            message: '',
         })

         alert('Thank you. I will reach back to you as soon as possible.')
      }, (error) => {
         setLoading(false)
         console.log(error)

         alert('Ahh, something went wrong. Please try again.')
      })
   }

   return (
      <div className='flex xl:flex-row flex-col-reverse gap-10 xl:mt-12 overflow-hidden'>
         <motion.div
            variants={slideIn('left', 'tween', 0.2, 1)}
            className='flex-[0.75] p-8 rounded-2xl bg-black-100'
         >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>

            <form
               ref={formRef}
               onSubmit={handleSubmit}
               className='flex flex-col gap-8 mt-12'
            >
               <label className='flex flex-col'>
                  <span className='mb-4 font-medium text-white'>Your Name</span>
                  <input
                     type='text'
                     name='name'
                     value={form.name}
                     onChange={handleChange}
                     placeholder={'What\'s your name?'}
                     className='outline-none border-none px-6 py-4 font-medium text-white placeholder:text-secondary rounded-lg bg-tertiary'
                  />
               </label>
               <label className='flex flex-col'>
                  <span className='mb-4 font-medium text-white'>Your Email</span>
                  <input
                     type='email'
                     name='email'
                     value={form.email}
                     onChange={handleChange}
                     placeholder={'What\'s your email?'}
                     className='outline-none border-none px-6 py-4 font-medium text-white placeholder:text-secondary rounded-lg bg-tertiary'
                  />
               </label>
               <label className='flex flex-col'>
                  <span className='mb-4 font-medium text-white'>Your Message</span>
                  <textarea
                     rows='7'
                     name='message'
                     value={form.message}
                     onChange={handleChange}
                     placeholder={'What do you want to say?'}
                     className='outline-none border-none px-6 py-4 font-medium text-white placeholder:text-secondary rounded-lg bg-tertiary resize-none'
                  />
               </label>

               <button
                  type='submit'
                  className='outline-none w-fit px-8 py-3 font-bold text-white rounded-xl shadow-md shadow-primary bg-tertiary'
               >
                  {loading ? 'Sending...' : 'Send'}
               </button>
            </form>
         </motion.div>

         <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
         >
            <EarthCanvas />
         </motion.div>
      </div>
   )
}

export default SectionWrapper(Contact, 'contact')
