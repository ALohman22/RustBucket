import {createSlice} from "@reduxjs/toolkit"
import axios from 'axios'
import {useProjects} from '../../hooks/useProjects'





export const allProjectsSlice = createSlice({
    name: 'allProjects',
    initialState: {
        value: []
    },
    reducers: {
        filterProjects: (state) => {

        },
        getProjects: (state, action) => {
            state = action.payload
        },
    }
})

export const {filterProjects, getProjects} = allProjectsSlice.actions
export const selectProjects = (state) => state.allProjects.value
export default allProjectsSlice.reducer