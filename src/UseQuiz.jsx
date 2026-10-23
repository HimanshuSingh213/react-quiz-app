/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';

const QuizContext = createContext(null);

export default function QuizProvider({ children }) {
    
    const [page, setPage] = useState("main");
    const [topic, setTopic] = useState({});

    const value = {
        page,
        setPage,
        topic,
        setTopic
    }

    return (
        <QuizContext.Provider value={value}>
            {children}
        </QuizContext.Provider>
    )
}

export function useQuiz() {
    const ctx = useContext(QuizContext);
    if (!ctx) throw new Error("useQuiz must be used inside <QuizProvider>");
    return ctx;
  }