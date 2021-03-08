import { ADD_USER, FETCH_USER } from "../actionTypes/ActionsTypes";
import { db } from "../firebase/firebase";


// Add New User
export const add_user = (item) => {

    console.log("add user from Action")
    return {
        type: ADD_USER,
        payload: item
    }
}

// Show User
export const fetch_user = (user) => {
    return {
        type: FETCH_USER,
        payload: user
    }
}

export const addUser = (item) => {
    return (dispatch) => {
        dispatch(add_user(item))
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        let unSubscribe = db.collection('items').orderBy("amount").onSnapshot(snap => {
            let fetch = snap.docs.map(doc => {
                return {
                    ...doc.data(), id: doc.id
                }
            })

            dispatch(fetch_user(fetch))
        })
        return unSubscribe;
    }
}

