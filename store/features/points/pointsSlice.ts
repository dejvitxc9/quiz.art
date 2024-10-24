'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface PointState { value: number }

const initialState: PointState = {
    value: 0
}

export const pointCouner = createSlice({
    name: 'pointCounter',
    initialState: initialState,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action) => { state.value += action.payload },
        decrementByAmount: (state, action) => { state.value -= action.payload },
        resetToDefault: (state) => { state.value = 0 }
    }
})

export const { increment, decrement, incrementByAmount, decrementByAmount, resetToDefault } = pointCouner.actions;

export default pointCouner.reducer