import { ADD_USER, FETCH_USER } from '../actionTypes/ActionsTypes'
import { db } from "../firebase/firebase";



const initialState = {
    users: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:
            db.collection('items').add({ ...action.payload })
            break;
        case FETCH_USER:
            return {
                ...state,
                users: action.payload,
            }

        default:
            return state;
    }
}

export default reducer