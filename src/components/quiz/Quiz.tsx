"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quizQuestions = [
  {
    question: "A new, high-stakes project is launched. How do you start?",
    answers: [
      {
        text: "Paint a vivid picture of the successful outcome to inspire the team.",
        style: "Visionary",
      },
      {
        text: "Have one-on-one conversations to understand each team member's strengths and concerns.",
        style: "Coach",
      },
      {
        text: "Ask the team what resources and support they need from you to get started.",
        style: "Servant",
      },
    ],
  },
  {
    question:
      "A team member is struggling with their tasks. What's your approach?",
    answers: [
      {
        text: "Remind them of the project's importance and the role they play in its success.",
        style: "Visionary",
      },
      {
        text: "Work with them to identify the root cause of the struggle and help them build the necessary skills.",
        style: "Coach",
      },
      {
        text: "Take on some of their workload to help them get back on track.",
        style: "Servant",
      },
    ],
  },
  {
    question: "How do you measure the success of your team?",
    answers: [
      {
        text: "By the team's ability to achieve ambitious, groundbreaking goals.",
        style: "Visionary",
      },
      {
        text: "By the personal and professional growth of each team member.",
        style: "Coach",
      },
      {
        text: "By the overall well-being and satisfaction of the team.",
        style: "Servant",
      },
    ],
  },
];

const results = {
  Visionary: {
    title: "The Visionary",
    description:
      "You lead with a clear, inspiring vision of the future. You are at your best when you can rally a team around a shared goal and motivate them to achieve things they never thought possible.",
  },
  Coach: {
    title: "The Coach",
    description:
      "You are a natural mentor, focused on developing the potential of each individual on your team. You excel at identifying strengths and weaknesses, and providing the guidance and support your team needs to grow.",
  },
  Servant: {
    title: "The Servant",
    description:
      "You lead by putting the needs of your team first. You are dedicated to creating a supportive and empowering environment where everyone can do their best work. You believe that a happy team is a productive team.",
  },
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (style: string) => {
    setAnswers([...answers, style]);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getResult = () => {
    const counts = answers.reduce(
      (acc, answer) => {
        acc[answer] = (acc[answer] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    );
    return Object.keys(counts).reduce((a, b) =>
      counts[a] > counts[b] ? a : b,
    );
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const result = showResults
    ? results[getResult() as keyof typeof results]
    : null;

  return (
    <div className="text-center">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-8">
              {quizQuestions[currentQuestion].question}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {quizQuestions[currentQuestion].answers.map((answer) => (
                <button
                  key={answer.text}
                  onClick={() => handleAnswer(answer.style)}
                  className="bg-white text-text-primary font-bold py-4 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-colors"
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          result && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">{result.title}</h2>
              <p className="text-lg mb-8">{result.description}</p>
              <button
                onClick={restartQuiz}
                className="bg-brand-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition-colors"
              >
                Take Again
              </button>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;
