import { motion } from "framer-motion";

export default function Expo({ text = "" , idx}) {
    return (
        <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.35, ease: "easeOut" }}
            className='px-4 py-3 flex items-center justify-center rounded-full border bg-neutral-900 border-neutral-600 text-neutral-300 font-medium'>
            {text}
        </motion.span>
    )
}
