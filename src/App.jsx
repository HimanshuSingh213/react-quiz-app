import { motion, AnimatePresence } from "framer-motion";
import NavBar from './components/common/NavBar';
import HeroPage from './components/main-page/HeroPage';
import { useQuiz } from './UseQuiz';
import QuizSelector from "./components/quiz-page/QuizSelector";
import Quizes from "./components/quiz-screen/Quizes";

function App() {
  const { page } = useQuiz();

  return (
    <div className='bg-neutral-950 h-full w-full overflow-hidden'>

      <section className={`w-full min-h-screen max-w-5xl px-4 sm:px-6 py-6 sm:py-12 mx-auto`}>
        <NavBar />

        <AnimatePresence mode="wait">
          {page === "main" && (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <HeroPage />
            </motion.div>
          )}

          {page === "quizTopics" && (
            <motion.div
              key="quizTopics"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <QuizSelector/>
            </motion.div>
          )}

          {page === "quizPage" && (
            <motion.div
              key="quizPage"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <Quizes/>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </div>
  )
}

export default App