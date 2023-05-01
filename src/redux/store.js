import { configureStore } from '@reduxjs/toolkit'
import allProjectsReducer from './slices/allProjectsSlice'

export default configureStore({
    reducer: {
        allProjects: allProjectsReducer,
    },
})