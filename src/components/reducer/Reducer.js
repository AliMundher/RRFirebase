import { ADD_USER, DELETE_USER, FETCH_USER } from '../actionTypes/ActionsTypes'
import { db } from "../firebase/firebase";



const initialState = {
    users: [],
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_USER:
            db.collection('items').add({ ...action.payload })
            break;
        case DELETE_USER:
            db.collection('items').doc(action.payload).delete()
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