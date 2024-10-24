"use client";

import { ArtQuizCard, LoadingAnim, PrepareQuiz } from "@/components";
import QuizSummary from "@/components/QuizSummary";
import { fetchArtData } from "@/store/features/artData/artData";
import { setQuizState } from "@/store/features/questionManagement/questionSlice";
import { setQuizData } from "@/store/features/quizData/quizData";
import { RootState, useAppDispatch } from "@/store/store";
import { getQuizArtIDs } from "@/utils";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Quiz = () => {
  const currentQuestion = useSelector(
    (state: RootState) => state.currentQuestion.currentQuestion
  );
  const numberOfQuestion = useSelector(
    (state: RootState) => state.currentQuestion.numberOfQuestion
  );
  const quizState = useSelector(
    (state: RootState) => state.currentQuestion.quizState
  );
  const artList = useSelector((state: RootState) => state.artDB.artData);
  const quizList = useSelector((state: RootState) => state.quizDB.quizData);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(setQuizData(artList));
  }, [artList, appDispatch]);

  return (
    <main className="main__container">
      <div className="flex-1 pt-36 padding-x">
        <div className="flex flex-col">
          {quizState === "loading" ? (
            <LoadingAnim />
          ) : quizState === "game" ? (
            quizList.length > 0 ? (
              <ArtQuizCard
                key={quizList[currentQuestion].id}
                id={quizList[currentQuestion].id}
                image_id={quizList[currentQuestion].image_id}
                answer1={quizList[currentQuestion].answer1}
                answer2={quizList[currentQuestion].answer2}
                answer3={quizList[currentQuestion].answer3}
                answercor={quizList[currentQuestion].answercor}
                questionType={quizList[currentQuestion].questionType}
              />
            ) : (
              <></>
            )
          ) : quizState === "summary" ? (
            <QuizSummary />
          ) : (
            <PrepareQuiz />
          )}
        </div>
      </div>
    </main>
  );
};

export default Quiz;
