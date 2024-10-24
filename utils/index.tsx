"use client";

import { artIDList } from "@/constans";

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
