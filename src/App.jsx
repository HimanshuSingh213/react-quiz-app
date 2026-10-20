import { motion, AnimatePresence } from "framer-motion";
import NavBar from './components/common/NavBar';
import HeroPage from './components/main-page/HeroPage';
import { useQuiz } from './UseQuiz';

function App() {
  const { page, setPage } = useQuiz();

  return (
    <div className='bg-neutral-950 h-full w-full'>

      <section className={`w-full min-h-screen max-w-5xl py-12 mx-auto ${page === "main"? "overflow-hidden" : ""}`}>
        <NavBar />

        <AnimatePresence>
          {page === "main" && (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, delay: 0.1 }}
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
            >
              <p className='text-white text-2xl text-center mt-20'>Quiz page — starts here</p>
              <button
                onClick={() => setPage("main")}
                className='block mx-auto mt-6 text-neutral-400 underline cursor-pointer hover:text-white'
              >
                back
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </section>
    </div>
  )
}

export default App
