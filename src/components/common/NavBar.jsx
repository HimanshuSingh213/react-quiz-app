import {  easeOut, motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.div>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.20, ease: easeOut }}
        className='flex justify-center items-between p-4 flex-col w-full border-b-2 border-b-amber-300/90 mb-2'
      >
        <div className="flex justify-between items-center flex-row ">
          <h3 className='text-white text-2xl sm:text-4xl font-bitcount font-semibold'>Quizzly ----!!!!</h3>
          <p className='text-gray-600 text-xs sm:text-base font-medium uppercase tracking-wider'>Frontend Quiz</p>
        </div>
      </motion.div>

    </motion.div>
  )
}
