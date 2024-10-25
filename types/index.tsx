import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnStyle?: string;
  textStyle?: string;
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ArtDataProps {
  id: number;
  title: string;
  artist_title: string;
  date_start: string;
  date_end: string;
  image_id: string;
  department_title: string;
  description?: string;
  style_title: string;
}

export interface QuestionType {
  questionType:
    | "artist_title"
    | "date_start"
    | "date_end"
    | "style_title"
    | "department_title";
}

export interface QuizDataProps {
  id: number;
  image_id: string;
  answer1: string
  answer2: string;
  answer3: string;
  answercor: string;
  questionType: QuestionType["questionType"];
  pointsMultiplier: number
}

export interface GrantedPoints {
  totalPoints: number;
  correctQuestions: number;
}

export interface QuizArtStatsProps{
  date: string,
  level: string,
  points: number,
  correctAnswers: number
}
