"use client";

import { QuizArtStatsProps } from "@/types";
import { loadQuizStatsFromLocalStorage } from "@/utils";

const Points = () => {
  const pointsState = loadQuizStatsFromLocalStorage();

  return (
    <div className="main__container">
      <div className="flex-1 pt-36 padding-x">
        {Array.isArray(pointsState) && pointsState.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Level</th>
                <th>Correct Answers</th>
                <th>Collected Points</th>
              </tr>
            </thead>
            <tbody>
              {pointsState.map((item: QuizArtStatsProps, index: number) => (
                <tr key={index}>
                  <td> {item.date}</td>
                  <td>{item.level}</td>
                  <td>{item.correctAnswers}</td>
                  <td>{item.points}</td>
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
