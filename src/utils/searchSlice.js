import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice (
    {
        name: 'search',
        initialState: {

        },
        reducers: {
            cacheResults: (state, action) => {
                //this logic is for the search suggestions to store cache:
                // Object.assign(state, action.payload)
                state = Object.assign(state, action.payload)
            }
        }
    }
)

export const {cacheResults} = searchSlice.actions;

export default searchSlice;