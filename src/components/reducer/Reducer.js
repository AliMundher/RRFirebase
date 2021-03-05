import { ADD_USER } from '../actionTypes/ActionsTypes'



const initialState = {
    users: []

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: action.payload,
            }

        default:
            return state;
    }
}

export default reducer