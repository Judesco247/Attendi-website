import React from 'react';
import {Navbar, Hero} from './components';
import styles from './style';
// import './App.css';

const App = () => (
  <div className="bg-dimWhite w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={` ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Starts
        Business
        Billing
        CardDeal
        Testimonials
        Clients
        CTA
        Footer
      </div>
    </div>
  </div>
  // return (
  //   <>
  //   <Nav />
  //   <div className="App">
    
  //     </div>
  //   </>
    
  // );
);

export default App;
