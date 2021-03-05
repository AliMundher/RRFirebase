import { ADD_USER } from "../actionTypes/ActionsTypes";
import { db } from "../firebase/firebase";



const add_user = (user) => {
    console.log("user");
    return {
        type: ADD_USER,
        payload: user
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        db.collection('items').orderBy("amount").onSnapshot(snap => {
            let fetch = snap.docs.map(doc => {
                return {
                    ...doc.data(), id: doc.id
                }
            })
            dispatch(add_user(fetch))
        })
    }
}

export default add_user