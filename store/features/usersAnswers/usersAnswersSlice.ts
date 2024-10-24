'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface UserAnswer {
    questionNumber: number,
    correctAnswer: string,
    userAnswer: string,
    points: number,
}

export const userAnswersData = createSlice({
    name: "usersAnswer",
    initialState: { answers: <UserAnswer[]>[] },
    reducers: {
        deleteAll: (state) => {
            state.answers = [];
        },
        addAnswer: (state, action) => {
            state.answers.push(action.payload);
        },
        updateAnswer: (state, action) => {
            const index = state.answers.findIndex(answer => answer.questionNumber === action.payload.questionNumber);
            if (index !== -1) {
                state.answers[index] = action.payload;
            }
        },
        removeAnswer: (state, action) => {
            state.answers = state.answers.filter(answer => answer.questionNumber !== action.payload.questionNumber);
        }
    }
})

export const { deleteAll, addAnswer, updateAnswer, removeAnswer } = userAnswersData.actions;
export default userAnswersData.reducer;