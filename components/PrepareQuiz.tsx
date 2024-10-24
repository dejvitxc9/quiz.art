"use client";

import { fetchArtData } from "@/store/features/artData/artData";
import {
  setNuberOfQuestions,
  setQuizState,
} from "@/store/features/questionManagement/questionSlice";
import { setQuizData } from "@/store/features/quizData/quizData";
import { RootState, useAppDispatch } from "@/store/store";
import { getQuizArtIDs } from "@/utils";
import { useSelector } from "react-redux";

const PrepareQuiz = () => {
  const appDispatch = useAppDispatch();

  const handleSetQuiz = (question: number) => {
    console.log("ładuje dane");
    appDispatch(setNuberOfQuestions(question));
    appDispatch(fetchArtData(getQuizArtIDs(question)));
    appDispatch(setQuizState("game"));
  };

  return (
    <div className="flex flex-row gap-4">
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
        onClick={() => {
          handleSetQuiz(8);
        }}
      >
        Quiz Level 1
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
        onClick={() => {
          appDispatch(setNuberOfQuestions(12));
        }}
      >
        Quiz Level 2
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
        onClick={() => {
          appDispatch(setNuberOfQuestions(16));
          appDispatch(setQuizState("loading"));
        }}
      >
        Quiz Level 3
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
        onClick={() => {
          appDispatch(setNuberOfQuestions(20));
          appDispatch(setQuizState("loading"));
        }}
      >
        Quiz Level 4
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
        onClick={() => {
          appDispatch(setNuberOfQuestions(30));
          appDispatch(setQuizState("loading"));
        }}
      >
        Quiz Level 5
      </button>
    </div>
  );
};
export default PrepareQuiz;
