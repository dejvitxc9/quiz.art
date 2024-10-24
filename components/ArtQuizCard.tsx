"use client";

import {
  increment,
  incrementByAmount,
} from "@/store/features/points/pointsSlice";
import {
  nextCurrentQuestion,
  previousCurrentQuestion,
  setQuizState,
} from "@/store/features/questionManagement/questionSlice";

import { addAnswer } from "@/store/features/usersAnswers/usersAnswersSlice";
import { RootState, useAppDispatch } from "@/store/store";
import { QuizDataProps } from "@/types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ArtQuizCard = ({
  id,
  image_id,
  answer1,
  answer2,
  answer3,
  answercor,
  questionType,
}: QuizDataProps) => {
  const appDispatch = useAppDispatch();

  const currentQuestion = useSelector(
    (state: RootState) => state.currentQuestion.currentQuestion
  );
  const numberOfQuestion = useSelector(
    (state: RootState) => state.currentQuestion.numberOfQuestion
  );

  const usersChoice = useSelector(
    (state: RootState) => state.userAnswers.answers[currentQuestion]
  );
  const [mixedAnswers, setMixedAnswers] = useState<string[]>([]);

  useEffect(() => {
    const shuffleAnswers = () => {
      const answers = [answer1, answer2, answer3, answercor];
      setMixedAnswers(answers.sort(() => Math.random() - 0.5));
    };
    shuffleAnswers();
  }, [answer1, answer2, answer3, answercor]);

  const selectAnswer = (ans: string) => {
    appDispatch(
      addAnswer({
        questionNumber: currentQuestion, // Numer aktualnego pytania
        correctAnswer: answercor, // Poprawna odpowiedź
        userAnswer: ans, // Wybór użytkownika
        points: ans === answercor ? 1 : 0, // Przyznanie punktu, jeśli odpowiedź jest poprawna
      })
    );
  };

  const question: string = (() => {
    switch (questionType) {
      case "artist_title":
        return "What artist created this art?";
      case "date_start":
        return "In which year did the production of this art start?";
      case "date_end":
        return "In which year did the production of this art end?";
      case "style_title":
        return "What art style is represented in this piece?";
      case "department_title":
        return "Which department does this art belong to?";
      default:
        return "Unknown question type.";
    }
  })();
  console.log(answercor);

  return (
    <div className="flex flex-col bg-slate-600 text-white rounded-lg font-semibold p-4 gap-4">
      <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
        <div className="flex flex-1 flex-col">
          <div className="flex justify-center bg-slate-500 rounded-lg min-w-48">
            <img
              className="image-ratio object-contain rounded-lg"
              alt={`Image in Question`}
              src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h3 className="mb-4 text-lg">{question}</h3>

          {usersChoice ? (
            <h1>
              You chose: <span>{usersChoice.userAnswer}</span>
            </h1>
          ) : (
            <div className="justify-end-bottom flex flex-row flex-wrap mt-auto gap-4">
              <div className="flex flex-1 flex-wrap gap-4">
                {mixedAnswers.map((answer, index) => (
                  <button
                    key={index}
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
                    onClick={() => selectAnswer(answer)}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between px-4 pb-4">
        {currentQuestion === 0 ? (
          <div>{/* Empty div for correct position */}</div>
        ) : (
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
            onClick={() => appDispatch(previousCurrentQuestion())}
          >
            Previous
          </button>
        )}

        {currentQuestion < numberOfQuestion - 1 ? (
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
            onClick={() => appDispatch(nextCurrentQuestion())}
          >
            Next
          </button>
        ) : (
          <button
            className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-lg"
            onClick={() => appDispatch(setQuizState("summary"))}
          >
            Finish Quiz!
          </button>
        )}
      </div>
    </div>
  );
};

export default ArtQuizCard;
