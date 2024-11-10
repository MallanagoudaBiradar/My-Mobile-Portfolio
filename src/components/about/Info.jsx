import React from 'react';
import {staggerContainer, fadeIn}  from '../../utils/motion'
import { motion } from 'framer-motion'

const Info = () =>  (
   <motion.div 
    className="about__info grid" 
    variants={staggerContainer}
    initial='hidden'
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
      >
    <motion.div 
      variants={fadeIn('up', 'tween', 0.2, 1)}  
      className="about__box">
        <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">10+ Months</span>
    </motion.div>
    <motion.div 
       variants={fadeIn('up', 'tween', 0.4, 1)}
       className="about__box">
        <i className='bx bx-briefcase-alt about__icon'></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">38+ Projects</span>
    </motion.div>
    <motion.div 
       variants={fadeIn('up', 'tween', 0.6, 1)}
       className="about__box">
        <i className='bx bx-support about__icon'></i>
        <h3 className="about__title">learn</h3>
        <span className="about__subtitle">24/7</span>
    </motion.div>
   </motion.div>
  );

export default Info