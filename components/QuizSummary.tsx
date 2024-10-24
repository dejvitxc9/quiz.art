"use client";

import { setQuizState } from "@/store/features/questionManagement/questionSlice";
import { UserAnswer } from "@/store/features/usersAnswers/usersAnswersSlice";
import { RootState, useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";

const QuizSummary = () => {
  const appDispatch = useAppDispatch();

  const userAnswers = useSelector(
    (state: RootState) => state.userAnswers.answers
  );
  const numberOfQuestions = useSelector(
    (state: RootState) => state.currentQuestion.numberOfQuestion
  );

  const grantedPoints = userAnswers.reduce(
    (acc, userAnswer: UserAnswer) => {
      if (userAnswer.userAnswer === userAnswer.correctAnswer) {
        return {
          totalPoints: acc.totalPoints + userAnswer.points,
          correctQuestions: acc.correctQuestions + 1,
        };
      }
      return acc;
    },
    { totalPoints: 0, correctQuestions: 0 }
  );

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Quiz Summary</h2>
      <div className="space-y-2 mb-4">
        <p className="text-lg">
          <strong>Collected Points:</strong> {grantedPoints.totalPoints}
        </p>
        <p className="text-lg">
          <strong>Correct Answers:</strong> {grantedPoints.correctQuestions}
        </p>
        <p className="text-lg">
          <strong>Bad Answers:</strong>{" "}
          {numberOfQuestions - grantedPoints.correctQuestions}
        </p>
      </div>
      <button
        onClick={() => appDispatch(setQuizState("prepare"))}
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Restart Quiz
      </button>
    </div>
  );
};
export default QuizSummary;
