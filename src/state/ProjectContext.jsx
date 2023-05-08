import { createContext, useReducer} from "react";



const initialState = {
    projects: [],
    components: [],
    showModel: false,
    showAddProject: false,
    currComp: {},
    currProj: {},
    scratchList: [],
}


const ProjectContext = createContext()

const ProjectContextProvider = props => {
    const reducer = (state, action) => {
        switch(action.type) {
            case 'GET_ALL':
                return {...state, projects: action.payload}
            case 'SHOW_MODEL':
                return {...state, showModel: !state.showModel}
            case 'CURR_COMP':
                return {...state, currComp: action.payload}
            case 'SHOW_ADD_PROJECT':
                return {...state, showAddProject: !state.showAddProject}
            case 'CURR_PROJ':
                return {...state, currProj: action.payload}
            case 'ADD_LIST':
                return {...state, scratchList: [...state.scratchList, action.payload]}
            case 'CLEAR_LIST':
                return {...state, scratchList: []}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <ProjectContext.Provider value={{state, dispatch}}>
            {props.children}
        </ProjectContext.Provider>
    )

}

export {ProjectContextProvider}
export default ProjectContext