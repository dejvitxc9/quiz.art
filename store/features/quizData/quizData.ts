'use client'

import { ArtDataProps, QuizDataProps } from "@/types"
import { createSlice } from "@reduxjs/toolkit";

interface QuizArtStateProps {
    quizData: QuizDataProps[];
}

const initialState: QuizArtStateProps = {
    quizData: [],
};

const questionTypes: QuizDataProps['questionType'][] = [
    "artist_title",
    "date_start",
    "date_end",
    "style_title",
    "department_title",
];

export const quizData = createSlice({
    name: 'quizDataBase',
    initialState: initialState,
    reducers: {
        setQuizData: (state, action) => {
            const artData: ArtDataProps[] = action.payload;
            const quizData: QuizDataProps[] = artData.map((element: ArtDataProps) => {
                const randomIndex = Math.floor(Math.random() * questionTypes.length);

                const randomQuestionType = questionTypes[randomIndex];

                const answer1wrong = artData[Math.floor(Math.random() * artData.length)][randomQuestionType];
                const answer2wrong = artData[Math.floor(Math.random() * artData.length)][randomQuestionType];
                const answer3wrpng = artData[Math.floor(Math.random() * artData.length)][randomQuestionType];


                return {
                    id: element.id,
                    image_id: element.image_id,
                    answer1: answer1wrong,
                    answer2: answer2wrong,
                    answer3: answer3wrpng,
                    answercor: element[randomQuestionType],
                    questionType: randomQuestionType,
                };
            });

            state.quizData = quizData;
        },
    },
});

export const { setQuizData } = quizData.actions;
export default quizData.reducer;