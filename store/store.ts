'use client';

import { configureStore } from "@reduxjs/toolkit";
import pointReducer from "./features/points/pointsSlice";
import artDataReducer from "./features/artData/artData";
import quizDataReducer from "./features/quizData/quizData";
import currentQuestionReducer from "./features/questionManagement/questionSlice";
import userAnswersReducer from "./features/usersAnswers/usersAnswersSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer: {
        points: pointReducer,
        artDB: artDataReducer,
        quizDB: quizDataReducer,
        currentQuestion: currentQuestionReducer,
        userAnswers: userAnswersReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    //usunąć devtools
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;