import React from 'react'
import { motion } from 'framer-motion'


const Libraries = ({variants}) => (
    <motion.div variants={variants} className="skills__content">
      <h3 className="skills__title">Skills</h3>

    
      <div className='skills__box'>
            <div className="skills__group">
            <div className="skills__data">
                 <i class='bx bxl-react'></i>

                 <div>
                    <h3 className="skills__name">React</h3>
                   
                 </div>
                </div>

                {/* <div className="skills__data">
                 <i class='bx bxl-tailwind-css'></i>

                 <div>
                    <h3 className="skills__name">Tailwind</h3>
                   
                 </div>
                </div> */}

                {/* <div className="skills__data">
                 <i class='bx bx-badge-check'></i>

                 <div>
                    <h3 className="skills__name">Material UI</h3>
                   
                 </div>
                </div> */}
                <div className="skills__data">
                <i class='bx bxl-javascript' ></i>

                 <div>
                    <h3 className="skills__name">JavaScript</h3>
                   
                 </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-nodejs'></i>

                 <div>
                 <h3 className="skills__name">NodeJS</h3>
                   
                 </div>
                </div>


                <div className="skills__data">
                <i class='bx bxl-typescript' ></i>

                 <div>
                    <h3 className="skills__name">TypeScript</h3>
                   
                 </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-spring-boot' ></i>

                 <div>
                    <h3 className="skills__name">Spring Boot</h3>
                   
                 </div>
                </div>

                {/* <div className="skills__data">
                 <i class='bx bx-badge-check'></i>

                 <div>
                    <h3 className="skills__name">Framer Motion</h3>
                    <span className='skills__level'>Intermediate</span>
                 </div>
                </div> */}

                

            </div>
      </div>


    </motion.div>
  );

export default Libraries