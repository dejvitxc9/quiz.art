'use client'

import { loadPointFromDevice } from "@/utils"
import { createSlice } from "@reduxjs/toolkit"

export interface PointState { value: number }

const initialState: PointState = {
    value: 0
}

export const pointCouner = createSlice({
    name: 'pointCounter',
    initialState: initialState,
    reducers: {
        setPoints: (state, action) => { state.value = action.payload },
        addPointsToAccount: (state, action) => { state.value += action.payload },
        decrementPointsFromAccount: (state, action) => { state.value -= action.payload },
        resetToDefault: (state) => { state.value = 0 }
    }
})

export const { setPoints, addPointsToAccount, decrementPointsFromAccount, resetToDefault } = pointCouner.actions;

export default pointCouner.reducer