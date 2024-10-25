"use client";

import { fetchArtData } from "@/store/features/artData/artData";
import {
  setNuberOfQuestions,
  setQuizState,
} from "@/store/features/questionManagement/questionSlice";
import { useAppDispatch } from "@/store/store";
import { getQuizArtIDs } from "@/utils";

const PrepareQuiz = () => {
  const appDispatch = useAppDispatch();

  const handleSetQuiz = (question: number) => {
    appDispatch(setNuberOfQuestions(question));
    appDispatch(fetchArtData(getQuizArtIDs(question)));
    appDispatch(setQuizState("loading"));
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
          handleSetQuiz(12);
        }}
      >
        Quiz Level 2
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
        onClick={() => {
          handleSetQuiz(16);
        }}
      >
        Quiz Level 3
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
        onClick={() => {
          handleSetQuiz(20);
        }}
      >
        Quiz Level 4
      </button>
      <button
        className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
        onClick={() => {
          handleSetQuiz(30);
        }}
      >
        Quiz Level 5
      </button>
    </div>
  );
};
export default PrepareQuiz;
