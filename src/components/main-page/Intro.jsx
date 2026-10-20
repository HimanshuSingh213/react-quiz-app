import React from 'react'
import { AnimatePresence, easeIn, easeOut, motion } from "framer-motion";

export default function Intro() {
    return (
        <div className='flex flex-row items-center justify-center px-10 py-14'>
            <motion.div
            initial={{rotate: -20}}
            animate={{rotate: 0}}
            transition={{delay: 0.1, duration: 0.3}}
            className='text-9xl text-purple-600 pl-10'>{'{'}</motion.div>
            <AnimatePresence>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "max-content" }}
                    transition={{ duration: 0.4, ease: easeOut, delay: 0.2 }}
                    className="py-10 flex items-center justify-center flex-col w-full h-48"
                >
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.3, ease: easeIn }}
                        className='text-yellow-500/95 font-bold text-2xl tracking-wider overflow-hidden'
                    >
                        Test your frontend knowledge
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.3, ease: easeIn }}
                        className='overflow-hidden w-3/4 mt-2 text-base text-white/80 font-medium text-center'
                    >
                        Quizzly is a quick multiple-choice quiz for frontend developers. Pick a topic, answer a short set of questions, and get an instant score
                    </motion.p>
                </motion.div>
            </AnimatePresence>

            <motion.div 
            initial={{rotate: -20}}
            animate={{rotate: 0}}
            transition={{delay: 0.1, duration: 0.3}}
            className='text-9xl text-purple-600 pr-10'>{'}'}</motion.div>
        </div>
    )
}
