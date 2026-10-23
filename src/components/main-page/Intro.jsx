import { motion } from "framer-motion";

export default function Intro() {
    return (
        <div className='flex flex-row items-center justify-center px-2 sm:px-10 py-8 sm:py-14 overflow-hidden'>
            <motion.div
                initial={{ rotate: -25, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='text-6xl sm:text-9xl text-gold/60 pl-2 sm:pl-10 select-none shrink-0'
            >
                {'{'}
            </motion.div>

            <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="py-6 sm:py-10 flex items-center justify-center flex-col h-auto sm:h-48 overflow-hidden shrink"
            >
                <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                    className='text-white font-bold text-lg sm:text-2xl tracking-wider text-center'
                >
                    Test your <span className='text-gold'>frontend</span> knowledge
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
                    className='w-full sm:w-3/4 mt-2 text-xs sm:text-base text-neutral-400 font-medium text-center'
                >
                    Quizzly is a quick multiple-choice quiz for frontend developers. Pick a topic, answer a short set of questions, and get an instant score
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ rotate: -25, scale: 0.9 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className='text-6xl sm:text-9xl text-gold/60 pr-2 sm:pr-10 select-none shrink-0'
            >
                {'}'}
            </motion.div>
        </div>
    );
}
