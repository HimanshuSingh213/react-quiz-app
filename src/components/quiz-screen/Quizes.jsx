import { useState } from 'react';
import { useQuiz } from '../../UseQuiz';
import { X, Check, ArrowRight } from 'lucide-react';
import quizData from '../../data-json/quizes.json';

export default function Quizes() {
  const { topic, setPage } = useQuiz();

  const questions = topic?.title === 'Mixed Round' ? [...quizData['JavaScript'], ...quizData['React'], ...quizData['HTML & CSS']] : quizData[topic?.title] || quizData['JavaScript'];

  const [currentQues, setCurrentQues] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const letters = ['A', 'B', 'C', 'D'];
  const q = questions[currentQues];

  const handleOptionClick = (index) => {
    if (selected !== null) return;
    setSelected(index);

    if (index === q.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQues < questions.length - 1) {
      setCurrentQues(currentQues + 1);
      setSelected(null);
    } else {
      setIsFinished(true);
    }
  };

  const handlePlayAgain = () => {
    setCurrentQues(0);
    setSelected(null);
    setScore(0);
    setIsFinished(false);
  };

  // Results screen when all questions are done
  if (isFinished) {
    return (
      <div className='py-12 mx-auto max-w-md text-center bg-card border border-card-border rounded-xl p-8 space-y-4 mt-8'>
        <h2 className='text-3xl text-white font-bold'>{topic?.title} Quiz</h2>
        <p className='text-gold text-4xl font-bold py-2'>{score} / {questions.length}</p>
        <p className='text-neutral-400 text-sm'>
          {score === questions.length ? 'Perfect score!' : 'Good job! Keep practicing.'}
        </p>

        <div className='flex gap-3 justify-center pt-4'>
          <button
            onClick={handlePlayAgain}
            className='px-4 py-2 bg-neutral-800 text-white rounded-xl hover:bg-neutral-700 transition duration-200 cursor-pointer'
          >
            Play Again
          </button>
          <button
            onClick={() => setPage('quizTopics')}
            className='px-4 py-2 bg-gold text-black font-semibold rounded-xl hover:bg-gold-hover transition duration-200 cursor-pointer'
          >
            Pick Topic
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='py-6 sm:py-12 mx-auto max-w-4xl'>
      {/* Header */}
      <header className='flex flex-row justify-between items-center text-sm uppercase tracking-wider text-neutral-500 font-mono'>
        <div>
          QUESTION {String(currentQues + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
        </div>
        <div className='flex flex-row gap-2 items-center text-neutral-400 capitalize font-sans text-base'>
          {topic?.title}
          <span
            onClick={() => setPage('quizTopics')}
            className='hover:text-red-500 transition duration-300 ease-in-out cursor-pointer'
          >
            <X height={16} />
          </span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className='relative h-1 w-full bg-neutral-800 my-4 rounded-md overflow-hidden'>
        <div
          className='h-full bg-gold transition-all duration-300'
          style={{ width: `${((currentQues + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <h2 className='text-xl sm:text-3xl text-white font-bold my-6 sm:my-8 leading-snug'>
        {q.question}
      </h2>

      {/* Options */}
      <div className='flex flex-col gap-3'>
        {q.options.map((opt, index) => {
          const isCorrect = index === q.answer;
          const isSelected = index === selected;

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`flex justify-between items-center p-4 rounded-xl border text-left transition duration-200
                ${selected === null ? 'bg-card border-card-border hover:border-neutral-700 cursor-pointer' : ''}
                ${selected !== null && isCorrect ? 'bg-card border-gold' : ''}
                ${selected !== null && isSelected && !isCorrect ? 'bg-card border-neutral-700' : ''}
                ${selected !== null && !isSelected && !isCorrect ? 'bg-card border-card-border opacity-50 cursor-default' : ''}
              `}
            >
              <div className='flex items-center gap-4'>
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold
                  ${selected !== null && isCorrect ? 'bg-gold text-black font-bold' : 'bg-neutral-800 text-neutral-400'}
                `}>
                  {letters[index]}
                </span>
                <span className='text-white text-base'>{opt}</span>
              </div>

              {selected !== null && isCorrect && <Check className='text-white' size={18} />}
              {selected !== null && isSelected && !isCorrect && <X className='text-neutral-400' size={18} />}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className='flex flex-col-reverse sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center mt-8 sm:mt-10'>
        <div className='text-sm font-medium'>
          {selected === null && <span className='text-neutral-500'>Select an answer</span>}
          {selected !== null && selected === q.answer && <span className='text-gold'>Correct!</span>}
          {selected !== null && selected !== q.answer && (
            <div className='text-sm font-medium flex flex-col justify-center items-start gap-2'>
              <span className='text-neutral-400'>Not quite</span>
              <p className='text-neutral-400'><strong className='text-white'>Solution:<br/></strong>{`${q.explanation}`}</p>
            </div>

          )}
        </div>

        <button
          onClick={handleNext}
          disabled={selected === null}
          className={`w-full sm:w-auto justify-center flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition duration-200
            ${selected !== null ? 'bg-gold text-black hover:bg-gold-hover cursor-pointer' : 'bg-gold/20 text-neutral-500 cursor-not-allowed'}
          `}
        >
          {currentQues === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
