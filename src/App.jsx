import { BrowserRouter } from 'react-router-dom'

import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from './components'

const App = () => (
   <BrowserRouter>
      <div className='relative bg-primary z-0'>
         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
         </div>
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
         <Contact />
         <StarsCanvas />
      </div>
   </BrowserRouter>
)

export default App
