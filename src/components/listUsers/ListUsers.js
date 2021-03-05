import React, { useEffect } from 'react'
import { getAllUsers } from "../actions/Actions";
import { useSelector, useDispatch } from "react-redux"


function ListUsers() {
    const user = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);


    return (
        <div>
            <h2 className="text-capitalize h4 mb-4">list of users</h2>
            <div className="row">
                <table className="table table-bordered">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="text-capitalize">id</th>
                            <th scope="col" className="text-capitalize">full name</th>
                            <th scope="col" className="text-capitalize">amount</th>
                            <th scope="col" className="text-capitalize">date</th>
                            <th scope="col" className="text-capitalize">city</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(u => {
                                <React.Fragment key={u.id}>
                                    <p>{u.fName}</p>
                                </React.Fragment>
                            })
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
