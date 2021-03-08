import React, { useState } from 'react'
import { addUser } from "../actions/Actions";
import { useDispatch } from "react-redux";
import "./inputs.css"

const initialUser = {
    fName: "",
    lName: "",
    amount: 0,
    date: "",
    city: ""
}
function Inputs() {
    const [user, setUser] = useState(initialUser);
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handelChange = ({ target }) => {
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (user.fName !== "" || user.lName !== "") {
            dispatch(addUser(user))
            setError("")
        }
        else {
            setError("an error occurs")
        }
        setUser(initialUser)
    }


    return (
        <React.Fragment>
            <h1 className="text-capitalize h3 mb-5">some information:</h1>
            {
                error ?
                    <span className="text-capitalize error">{error}</span>
                    : null
            }
            <form >
                <div className="form-row">
                    <div className="form-group col-12 col-md-4">
                        <label className="text-capitalize">first name:</label>
                        <input type="text" placeholder="Enter Your First Name"
                            className="form-control mb-2 col-mb-0"
                            name="fName" value={user.fName}
                            onChange={handelChange} required />
                    </div>
                    <div className="form-group col-12 col-md-4">
                        <label className="text-capitalize">last name:</label>
                        <input type="text" placeholder="Enter Your Last Name"
                            className="form-control mb-2 col-mb-0" required
                            name="lName" value={user.lName}
                            onChange={handelChange} />
                    </div>
                    <div className="form-group col-12 col-md-4">
                        <label className="text-capitalize">amount:</label>
                        <input type="number" placeholder="Enter Your Amount"
                            className="form-control mb-2 col-mb-0" required
                            name="amount" value={user.amount}
                            onChange={handelChange} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-12 col-md-4">
                        <label className="text-capitalize">chose date:</label>
                        <input type="date" className="form-control mb-2 col-mb-0"
                            name="date" value={user.date} required
                            onChange={handelChange} />
                    </div>
                    <div className="form-group col-12 col-md-4">
                        <label className="text-capitalize">name of city:</label>
                        <input type="text" placeholder="Enter Your Last Name"
                            className="form-control mb-2 col-mb-0"
                            name="city" value={user.city} required
                            onChange={handelChange} />
                    </div>
                </div>
            </form>

            <input className="btn btn-primary text-capitalize mb-5"
                type="submit" value="add user" onClick={handelSubmit} />
        </React.Fragment>
    )
}

export default Inputs
