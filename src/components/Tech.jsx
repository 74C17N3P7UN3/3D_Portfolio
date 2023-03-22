import { BallCanvas } from './canvas'
import { technologies } from '../constants'

import { SectionWrapper } from '../hoc'

const Tech = () => (
   <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
         <div className='h-28 w-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
         </div>
      ))}
   </div>
)

export default SectionWrapper(Tech, '')
