import React, { useEffect } from 'react'
import { getAllUsers, deleteUser } from "../actions/Actions";
import { useSelector, useDispatch } from "react-redux"
import "./list.css";

function ListUsers() {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    // const delete_user = (id) => {
    //     dispatch(deleteUser(id))
    // }

    return (
        <div>
            <h2 className="text-capitalize h4 mb-4">list of users {users.length} users</h2>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="text-capitalize">full Name</th>
                            <th className="text-capitalize">amount</th>
                            <th className="text-capitalize">date</th>
                            <th className="text-capitalize">city</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr key={user.id}>
                                    <td>{user.fName} {user.lName}</td>
                                    <td>{user.amount}</td>
                                    <td>{user.date}</td>
                                    <td>{user.city}</td>
                                    <td>
                                        <button className="delete btn btn-danger"
                                            onClick={() => dispatch(deleteUser(user.id))}>delete</button>
                                        <button className="update btn btn-primary">update</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         userData: state.users
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUsers: () => dispatch(getAllUsers())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ListUsers)


export default ListUsers
