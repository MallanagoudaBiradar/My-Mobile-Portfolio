import React,{ useState } from 'react'
import './experience.css'
import { motion } from 'framer-motion';
import {staggerContainer, fadeIn}  from '../../utils/motion'
import { TitleText } from '../CustomTexts';


const Qualifications = () => {
    const [toggleState, setToggleState] = useState(1)

    const ToggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <motion.section 
    className='qualification section' 
    id='experience'
    variants={staggerContainer}
    initial = 'hidden'
    whileInView='show'
    viewport={{once: false, amount: 0.25}}>
    <TitleText title="Professional Experience" />
        <div className='qualification__container container'>
            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className='qualification__tabs'>
                <div className={toggleState === 1 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(1)}>HCLTech</div>
                <div className={toggleState === 2 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(2)}>JSpider</div>
            </motion.div>

                <motion.div variants={fadeIn('up', 'spring', 0.4, 1)} className={toggleState == 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>            
                        <h3 className='qualification__title'>UI FULL STACK DEVELOPER @ <span className='company'>HCLTech </span> </h3>
                        <small className='qualification__calender'>Dec 2022 - June 2023</small>
                        <motion.div variants={fadeIn('up', 'spring', 0.6, 1)} className='qualification__details'>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> As the ui full stack  developer, I am responsible for developing the responsive web pages and applications.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> My focus is creating responsive and user-friendly user interfaces using Angular.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Experience with front-end and API integration.</p>
                        </motion.div>
                </motion.div>

                <div className={toggleState == 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>                 
                        <h3 className='qualification__title'>JAVA FULL STACK DEVELOPMENT course  @ <span className='company'>JSpider</span> </h3>
                        <small className='qualification__calender'>july 2023 - Nov 2023 </small>
                        <div className='qualification__details'>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Jspiders is well-known for its Java training programs, covering core Java and advanced Java concepts</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>The training programs at Jspiders often include real-time projects and hands-on experience</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> This training helps me to develope a real time projects  </p>
                    </div>
                </div>        
        </div>
        <br />

    </motion.section>
  )
}

export default Qualifications