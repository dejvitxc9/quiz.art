"use client";

import { QuizArtStatsProps } from "@/types";
import { loadQuizStatsFromLocalStorage } from "@/utils";

const Points = () => {
  const pointsState = loadQuizStatsFromLocalStorage();

  return (
    <div className="main__container">
      <div className="flex-1 pt-36 padding-x">
        {Array.isArray(pointsState) && pointsState.length > 0 ? (
          <table className="pointsStatsTable">
            <thead>
              <tr>
                <th className="border-solid border-2 border-gray-800 p-2">
                  Date
                </th>
                <th className="border-solid border-2 border-gray-800 p-2">
                  Level
                </th>
                <th className="border-solid border-2 border-gray-800 p-2">
                  Correct Answers
                </th>
                <th className="border-solid border-2 border-gray-800 p-2">
                  Collected Points
                </th>
              </tr>
            </thead>
            <tbody>
              {pointsState.map((item: QuizArtStatsProps, index: number) => (
                <tr key={index} className="odd:bg-gray-300 even:bg-gray-400 hover:bg-gray-600 hover:text-white">
                  <td className="border-solid border-2 border-gray-800 p-2">
                    {item.date}
                  </td>
                  <td className="border-solid border-2 border-gray-800 p-2">
                    {item.level}
                  </td>
                  <td className="border-solid border-2 border-gray-800 p-2">
                    {item.correctAnswers}
                  </td>
                  <td className="border-solid border-2 border-gray-800 p-2">
                    {item.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="stats-not-found">
            Sorry we couldn't find any data to show ☹
          </p>
        )}
      </div>
    </div>
  );
};

export default Points;
