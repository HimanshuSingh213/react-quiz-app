import { useQuiz } from '../../UseQuiz'
import { ArrowLeft } from 'lucide-react';
import { motion } from "framer-motion";
import QuizOptions from './QuizOptions';
import CTA from '../common/CTA';
import { useEffect } from 'react';

const TOPICS = [
    { id: 1, title: 'JavaScript', desc: 'Core language, types and array methods.', count: 5 },
    { id: 2, title: 'React', desc: 'Hooks, props and component patterns.', count: 5 },
    { id: 3, title: 'HTML & CSS', desc: 'Markup, layout and styling fundamentals.', count: 5 },
    { id: 4, title: 'Mixed Round', desc: 'A bit of everything - all topics combined.', count: 15 },
];

export default function QuizSelector() {
    const { setPage, setTopic, topic } = useQuiz();

    const startQuiz = () => {
        setPage("quizPage");
    }

    useEffect(() => {
        if(!topic?.id) setTopic(TOPICS[0]);
    }, [topic?.id, setTopic])

    return (
        <div>
            <button
                onClick={() => setPage("main")}
                className='flex gap-1 text-base flex-row justify-start items-center mt-3 py-5 text-neutral-400 cursor-pointer hover:text-white 
                transition duration-200 ease-in-out'
            >
                <span ><ArrowLeft height={20} /></span>
                Back
            </button>

            <div className='flex flex-col items-start justify-center space-y-2'>
                <h1 className='text-2xl sm:text-3xl text-white font-semibold'>Pick a topic to begin</h1>
                <p className='text-neutral-500 text-sm sm:text-base'>Select one topic, then start the quiz. You can retry or switch anytime.</p>
            </div>

            <motion.div
                className='grid grid-cols-1 sm:grid-cols-2 gap-3 py-4'
            >
                {TOPICS.map((obj) => (
                    <QuizOptions topic={obj} key={obj.id} handler={() => setTopic(obj)} />
                ))
                }
            </motion.div>

            <div className=''>
                <CTA text={`Start Quiz`} clickHandler={startQuiz} widthFull />
            </div>
        </div>
    )
}