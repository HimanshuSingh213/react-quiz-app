import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA({text="", clickHandler, widthFull=false}) {
  return (
    <motion.button 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.3 }}
    onClick={() => clickHandler()}
    className={`bg-gold rounded-2xl px-4 py-3 text-lg text-neutral-800 font-semibold ${widthFull ? 'w-full' : 'w-max'} hover:bg-gold-hover
    transition duration-200 ease-in-out cursor-pointer flex items-center justify-center gap-1 flex-row`}>
        {text} <ArrowRight/>
    </motion.button>
  )
}