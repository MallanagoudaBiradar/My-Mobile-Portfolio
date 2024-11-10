import React from 'react'
import { motion } from 'framer-motion'


const Technologies = ({variants}) =>  (
    <motion.div variants={variants} className="skills__content">
        <h3 className="skills__title">Skills</h3>

        <div className="skills__box">

            <div className="skills__group">
                

                <div className="skills__data">
                <i class='bx bxl-python' ></i>

                 <div>
                    <h3 className="skills__name">Python </h3>
                 </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-postgresql'></i>
                 <div>
                    <h3 className="skills__name">SQL</h3>
                 </div>
                </div>
                <div className="skills__data">
                <i class='bx bxl-angular' ></i>

                 <div>
                    <h3 className="skills__name">AngularJS</h3>
                 </div>
                </div>

                <div className="skills__data">
                 <i class='bx bxl-git'></i>

                 <div>
                    <h3 className="skills__name">Git</h3>
                 </div>
                </div>


                <div className="skills__data">
                 <i class='bx bxl-figma'></i>

                 
                 <div>
                 <h3 className="skills__name">Flutter</h3>
                    
                 </div>
                </div>

                
                


            </div>
        </div>
       
    </motion.div>
  );

export default Technologies