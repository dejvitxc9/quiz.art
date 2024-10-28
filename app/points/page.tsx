"use client";

import { QuizArtStatsProps } from "@/types";
import { loadQuizStatsFromLocalStorage } from "@/utils";

const Points = () => {
  const pointsState = loadQuizStatsFromLocalStorage();

  return (
    <div className="main__container">
      <div className="flex-1 pt-36 padding-x">
        <div className="flex flex-col bg-slate-600 text-white rounded-lg font-semibold p-4">
        {Array.isArray(pointsState) && pointsState.length > 0 ? (
            <>
              <div className="grid grid-cols-4 rounded-t-lg overflow-hidden">
                <div className="bg-teal-900 text-white p-2 font-bold">
                  Date
                </div>
                <div className="bg-teal-900 text-white p-2 font-bold">
                  Level
                </div>
                <div className="bg-teal-900 text-white p-2 font-bold">
                  Correct Answers
                </div>
                <div className="bg-teal-900 text-white p-2 font-bold">
                  Collected Points
                </div>
              </div>
              {pointsState.map((item: QuizArtStatsProps, index: number) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 odd:bg-gray-300 even:bg-gray-400 hover:bg-gray-600 hover:text-white last-of-type:rounded-b-lg`}
                >
                  <div className="p-2">{item.date}</div>
                  <div className="p-2">{item.level}</div>
                  <div className="p-2">{item.correctAnswers}</div>
                  <div className="p-2">{item.points}</div>
                </div>
              ))}
            </>
          ) : (
            <p className="stats-not-found">
              Sorry we couldn't find any data to show ☹
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Points;
