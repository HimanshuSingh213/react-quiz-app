import { motion } from 'framer-motion';

export default function CTA({text="", clickHandler}) {
  return (
    <motion.button 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.3 }}
    whileHover={{scale: 1.05}}
    onClick={() => clickHandler()}
    className='bg-[#d7a44d] rounded-2xl px-4 py-3 text-lg text-neutral-800 font-semibold w-max hover:bg-[#dea542]
    transition duration-200 ease-in-out cursor-pointer'>
        {text}
    </motion.button>
  )
}
