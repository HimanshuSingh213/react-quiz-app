import { motion, AnimatePresence } from "framer-motion";
import NavBar from './components/common/NavBar';
import HeroPage from './components/main-page/HeroPage';
import { useQuiz } from './UseQuiz';
import QuizSelector from "./components/quiz-page/QuizSelector";

function App() {
  const { page } = useQuiz();

  return (
    <div className='bg-neutral-950 h-full w-full overflow-hidden'>

      <section className={`w-full min-h-screen max-w-5xl py-12 mx-auto`}>
        <NavBar />

        <AnimatePresence>
          {page === "main" && (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="overflow-hidden"
            >
              <HeroPage />
            </motion.div>
          )}

          {page === "quizPage" && (
            <motion.div
              key="quizPage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="overflow-hidden"
            >
              <QuizSelector/>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </div>
  )
}

export default App