import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Feedbacks />
        
        
        
        
        <div className='relative z-0'>
        <Experience />
          <Contact />
          <StarsCanvas />
          
        </div>
        <Tech />
      </div>
    </BrowserRouter>
  );
}

export default App;
