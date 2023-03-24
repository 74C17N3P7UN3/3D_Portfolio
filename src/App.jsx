import { BrowserRouter } from 'react-router-dom'

import {
   About,
   Contact,
   Experience,
   // Feedback,
   Hero,
   Navbar,
   StarsCanvas,
   Tech,
   Work,
} from './components'

const App = () => (
   <BrowserRouter>
      <Navbar />
      <div className='relative z-0'>
         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Hero />
         </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Work />
      {/* TODO: Implement <Feedback /> */}
      <div className='relative z-0'>
         <Contact />
         <StarsCanvas />
      </div>
   </BrowserRouter>
)

export default App
