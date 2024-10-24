'use client'

import { createSlice } from "@reduxjs/toolkit"


export const stateSlice = createSlice({
    name: "currentQuestionNumber",
    initialState: { currentQuestion: 0, numberOfQuestion: 8, quizState: "preparing" },
    reducers: {
        previousCurrentQuestion: (state) => {
            if (state.currentQuestion > 0) {
                state.currentQuestion -= 1
            }
        },
        nextCurrentQuestion: (state) => {
            state.currentQuestion += 1
        },
        setNuberOfQuestions: (state, action) => {
            state.numberOfQuestion = action.payload
        },
        setQuizState: (state, action) => {
            state.quizState = action.payload
        }
    }
})

export const { nextCurrentQuestion, previousCurrentQuestion, setNuberOfQuestions, setQuizState } = stateSlice.actions;
export default stateSlice.reducer;