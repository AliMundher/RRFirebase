import { ADD_USER, DELETE_USER, FETCH_USER } from "../actionTypes/ActionsTypes";
import { db } from "../firebase/firebase";


// Add New User
export const add_user = (item) => {
    return {
        type: ADD_USER,
        payload: item
    }
}

// Delete User
export const delete_user = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}

// Show User
export const fetch_user = (user) => {
    return {
        type: FETCH_USER,
        payload: user
    }
}


// Add User
export const addUser = (item) => {
    return (dispatch) => {
        dispatch(add_user(item))
    }
}

// Delete User
export const deleteUser = (id) => {
    return (dispatch) => {
        dispatch(delete_user(id))
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

