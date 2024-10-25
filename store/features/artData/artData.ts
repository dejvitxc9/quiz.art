'use client';

import { ArtDataProps } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ArtDataStateProps {
    artData: ArtDataProps[];
}

const initialState: ArtDataStateProps = {
    artData: [],
};

export const fetchArtData = createAsyncThunk(
    'artData/fetchArtData',
    async (artIDListToDwonload: string[]) => {
        const requests = artIDListToDwonload.map(artID =>
            fetch(`https://api.artic.edu/api/v1/artworks/${artID}`)
        );

        const responses = await Promise.all(requests);

        responses.forEach(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        });

        const data: ArtDataProps[] = await Promise.all(
            responses.map(res =>
                res.json().then((json: any) => json.data).then((json: any) => ({
                    id: json.id,
                    artist_title: json.artist_title || "unknown",
                    title: json.title || "unknown",
                    date_start: json.date_start || "unknown",
                    date_end: json.date_end || "unknown",
                    department_title: json.department_title || "unknown",
                    description: json.description || null,
                    style_title: json.style_title || "unknown",
                    image_id: json.image_id,
                }))
            )
        )

        return data;
    }
);

export const artData = createSlice({
    name: 'artDataBase',
    initialState: initialState,
    reducers: {
        setArtData: (state, action) => {
            state.artData = action.payload;
        },
        addArtData: (state, action) => {
            state.artData.push(action.payload);
        },
        deleteAllArtData: (state) => {
            state.artData = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtData.fulfilled, (state, action) => {
                state.artData = action.payload;
            })
            .addCase(fetchArtData.rejected, (state, action) => {
                console.error(action.error);
            });
    },
});

export const { setArtData, addArtData, deleteAllArtData } = artData.actions;

export default artData.reducer;
