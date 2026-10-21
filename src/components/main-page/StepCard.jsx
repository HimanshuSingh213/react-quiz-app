import { motion } from 'framer-motion'

export default function StepCard({ heading, content, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * idx, duration: 0.3 }}
      className='w-full min-h-24 flex flex-row items-start gap-4 px-5 py-4 rounded-xl border bg-neutral-900 border-neutral-800'
    >
      <span className='text-xs font-semibold text-gold-light mt-0.5'>{idx + 1}</span>
      <div className='flex flex-col gap-0.5'>
        <h3 className='text-white text-sm font-medium'>{heading}</h3>
        <p className='text-neutral-400 text-sm'>{content}</p>
      </div>
    </motion.div>
  )
}