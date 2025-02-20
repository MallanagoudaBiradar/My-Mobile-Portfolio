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
                 'qualification__button button__flex'} onClick={()=> ToggleTab(1)}>ShikshaLokam</div>
                <div className={toggleState === 2 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(2)}>LiveSitter</div>
                 <div className={toggleState === 3 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(3)}>JSpider</div>
                 <div className={toggleState === 4 ? 'qualification__button qualification__active button__flex' :
                 'qualification__button button__flex'} onClick={()=> ToggleTab(4)}>HCLTech</div>
            </motion.div>

                <motion.div variants={fadeIn('up', 'spring', 0.4, 1)} className={toggleState == 4 ? 'qualification__content qualification__content-active' : 'qualification__content'}>            
                        <h3 className='qualification__title'>UI FULL STACK DEVELOPER @ <span className='company'>HCLTech </span> </h3>
                        <small className='qualification__calender'>Dec 2022 - June 2023</small>
                        <motion.div variants={fadeIn('up', 'spring', 0.6, 1)} className='qualification__details'>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> UI Full Stack Developer with expertise in Angular.JS, TypeScript, API integration, HTML5, and CSS.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Successfully developed over 10 projects during the internship training.
                            Proficient in CRUD operations and API fetching and committed to delivering high‐quality, user‐centric solutions.</p>
                            <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Experience with front-end and API integration.</p>
                        </motion.div>
                </motion.div>

                <div className={toggleState == 3 ? 'qualification__content qualification__content-active' : 'qualification__content'}>                 
                        <h3 className='qualification__title'>JAVA FULL STACK DEVELOPMENT course  @ <span className='company'>JSpider</span> </h3>
                        <small className='qualification__calender'>july 2023 - Nov 2023 </small>
                        <div className='qualification__details'>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Jspiders is well-known for its Java training programs, covering core Java and advanced Java concepts</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>The training programs at Jspiders often include real-time projects and hands-on experience</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> This training helps me to develope a real time projects  </p>
                    </div>
                </div>    
                
                <div className={toggleState == 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>                 
                        <h3 className='qualification__title'>Backend Developer  @ <span className='company'>Shikshalokam</span> </h3>
                        <small className='qualification__calender'>Feb 2024 - Present </small>
                        <div className='qualification__details'>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Developed Python‐based automation scripts for creating and managing programs, handling configurations, and
                        integrating APIs for the Elevate Project Service.</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Developed dynamic report generation features for projects using Gotenberg and EJS templates, and automated report
                        uploads to cloud platforms, including AWS, Azure, and GCP</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Led the development of the Entity Management Service for the ELEVATE platform, building over 95 percent of the
                        service independently.  </p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Implemented functionality for program creation, data validation, and logging using libraries such as requests,
                        pandas, numpy, openpyxl, and xlrd.</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Built open‐source software with a focus on usability and seamless adoption, while leveraging Docker to streamline
                        containerized deployments and operational efficiency.</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Led the design and implementation of reliable, resilient microservices, enhancing asynchronous use‐case
                        logic using Kafka, and contributing to mission‐critical software components.</p>
                    </div>
                </div>     
                <div className={toggleState == 2 ? 'qualification__content qualification__content-active' : 'qualification__content'}>                 
                        <h3 className='qualification__title'>Machine Learning Engineer  @ <span className='company'>LiveSitter</span> </h3>
                        <small className='qualification__calender'>Jan 2024 - Aug 2024 </small>
                        <div className='qualification__details'>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Developed a Python‐based solution integrating OpenAI’s GPT‐4 vision capabilities to analyze images of childcare
                        playgrounds for potential hazards.</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'>Designed prompts and leveraged AI to identify hazardous items, Automated data extraction and report generation using
                        Pandas, numpy, ensuring clean and detailed outputs.</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Developed a Python‐based system to automate SMS and WhatsApp messaging to clients at scheduled times using the
                        Twilio API.</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> Implemented scheduled messaging logic to trigger SMS and WhatsApp notifications at predefined intervals, enhancing
                        customer engagement and communication.</p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> I contributed to the development of an AI model that analyzes images and identifies hazardous objects within them. </p>
                        <i className='bx bxs-right-arrow qualification__icon'></i><p className='qualification__subtitle'> My work involves a robust tech stack of Python, AI-ML, PyTorch, Pandas and OpenCV   </p>
                    </div>
                </div>     
        </div>
        <br />

    </motion.section>
  )
}

export default Qualifications