import { useQuiz } from '../../UseQuiz'
import { Check } from 'lucide-react';

export default function QuizOptions({ topic: option, handler }) {
    const { topic } = useQuiz();

    return (
        <button
            onClick={() => handler(option)}
            className={`flex flex-col items-start justify-center space-y-1 rounded-xl p-4 border transition duration-200 ease-in-out
        ${topic?.id === option.id ? "bg-gold-light/10 border-gold-border" : "bg-card border-card-border"}
        `}>
            <h3 className='text-white font-semibold text-lg text-left'>{option.title}</h3>
            <p className='flex justify-between items-center text-sm text-neutral-400 w-full'>
                {option.desc}
                <span className={`transition duration-200 ease-in-out ${topic?.id === option.id ? "text-gold" : "opacity-0"}`}><Check/></span>
            </p>
            <span className='text-neutral-500 text-xs text-left'>{option.count} Questions</span>
        </button>
    )
}