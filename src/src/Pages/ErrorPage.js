import React from 'react'
import {motion} from 'framer-motion'


export default function ErrorPage() {
  return (
    <motion.div 
    className='error-page'
    style={{width: "100vw", height: "100vh", backgroundColor: "black", display: "flex" , alignItems:
    "center",justifyContent: "center", fontSize: "70px" , fontWeight: "700" }}
     initial={{opacity: 0}}
     animate={{opacity: 1}}
     exit={{opacity: 0}}>THIS PAGE DOES NOT EXIST</motion.div>
  )
}
