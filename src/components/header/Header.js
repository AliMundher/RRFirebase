import React, { useEffect, useState } from 'react'
import { getAllUsers } from "../actions/Actions";
import { useSelector, useDispatch } from "react-redux"



function Header() {
    const [sum, setSum] = useState(0);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())

    }, []);


    useEffect(() => {
        let t = 0;
        let sum = users.map(i => i.amount)
        for (let i = 0; i < sum.length; i++) {
            t += parseInt(sum[i]);
        }
        setSum(t)

    })




    return (
        <div className="d-flex justify-content-between mt-5">
            <h2 className="text-capitalize">total</h2>
            <button className="btn btn-secondary flex-end">
                ${sum}
            </button>
        </div>
    )
}

export default Header
