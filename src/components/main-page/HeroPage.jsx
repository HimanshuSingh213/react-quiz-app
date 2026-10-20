
import CTA from '../common/CTA';
import Intro from "./Intro"
import Expo from "./Expo"
import StepCard from './StepCard';
import { useQuiz } from '../../UseQuiz';

export default function HeroPage() {
    const { setPage } = useQuiz();

    const clickHandler = () => {
        setPage("quizPage");
    }

    return (
        <div className='overflow-hidden'>
            <Intro />

            <div className='flex gap-3 justify-center items-center'>
                {["15 Questions", "4 Topics", "Instant Results"].map((str, idx) => (
                    <Expo text={str} key={str} idx={idx} />
                ))}
            </div>

            <div
                className='my-8 flex justify-center items-center'
            >

                <CTA text='Choose a topic ⟶' clickHandler={clickHandler} />
            </div>

            <div className='my-8 grid gap-2 items-stretch w-full max-w-4xl mx-auto grid-cols-1 sm:grid-cols-3'>
                {[{
                    heading: "Pick a topic",
                    content: "Choose JavaScript, React, HTML & CSS, or a mixed round."
                },
                {
                    heading: "Answer the questions",
                    content: "One at a time, four options each, with a progress bar."
                },
                {
                    heading: "See your score",
                    content: "Get your result instantly and retry any topic."
                }].map((obj, idx) => (
                    <StepCard heading={obj.heading} content={obj.content} key={idx} idx={idx} />
                ))}
            </div>
        </div>
    )
}
