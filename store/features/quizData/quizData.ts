'use client'

import { ArtDataProps, QuizDataProps } from "@/types"
import { getRandomPointForQuestion } from "@/utils";
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

                const wrongAnswersTest = new Set([element[randomQuestionType]]);

                while (wrongAnswersTest.size < 4) {
                    const randomElement = artData[Math.floor(Math.random() * artData.length)];
                    wrongAnswersTest.add(randomElement[randomQuestionType]);
                }

                const wrongAnswers = Array.from(wrongAnswersTest);

                return {
                    id: element.id,
                    image_id: element.image_id,
                    answer1: wrongAnswers[1],
                    answer2: wrongAnswers[2],
                    answer3: wrongAnswers[3],
                    answercor: element[randomQuestionType],
                    questionType: randomQuestionType,
                    pointsMultiplier: getRandomPointForQuestion()
                };
            });

            state.quizData = quizData;
        },
    },
});

export const { setQuizData } = quizData.actions;
export default quizData.reducer;