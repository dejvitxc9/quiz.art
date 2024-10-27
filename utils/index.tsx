"use client";

import { artIDList } from "@/constans";
import { GrantedPoints, QuizArtStatsProps } from "@/types";

export const getQuizArtIDs = (amount: number): string[] => {
  if (artIDList.length < amount) {
    return [];
  }
  const randomizedList = artIDList.sort(() => Math.random() - 0.5);

  const trimedList = randomizedList.slice(0, amount);

  if (trimedList.length !== amount) {
    return [];
  }
  return trimedList;
};

const availablePoints = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4,
  4, 4, 5, 5, 10,
];
export const getRandomPointForQuestion = () => {
  return availablePoints[Math.floor(Math.random() * availablePoints.length)];
};

function formatDateTime(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}, ${hours}:${minutes}:${seconds}`;
}

export const saveQuizStatsToLocalStorage = (
  numberOfQuestion: number,
  grantedPoints: GrantedPoints
) => {
  const stats = {
    date: formatDateTime(new Date()),
    level: numberOfQuestion,
    points: grantedPoints.totalPoints,
    correctAnswers: grantedPoints.correctQuestions,
  };

  const existingStats = localStorage.getItem("artQuizStats");
  const statsArray = existingStats ? JSON.parse(existingStats) : [];

  statsArray.push(stats);

  localStorage.setItem("artQuizStats", JSON.stringify(statsArray));
};

export const loadQuizStatsFromLocalStorage = (): QuizArtStatsProps[] => {
  if (typeof window === "undefined") return [];

  const storedStats = localStorage.getItem("artQuizStats");
  if (!storedStats) return [];

  try {
    return JSON.parse(storedStats) as QuizArtStatsProps[];
  } catch (error) {
    console.error("Error during loading stats:", error);
    return [];
  }
};

export const loadPointFromDevice = (): number => {
  if (typeof window === "undefined") return 0;

  const storedStats = localStorage.getItem("artQuizStats");
  if (!storedStats) return 0;

  try {
    const stats = JSON.parse(storedStats) as QuizArtStatsProps[];
    const points = stats.reduce(
      (totalPoints: number, quizArtStatsProps: QuizArtStatsProps) => totalPoints + quizArtStatsProps.points,
      0
    );
    return points;
  } catch (error) {
    console.error("Error during loading points:", error);
    return 0;
  }
};
