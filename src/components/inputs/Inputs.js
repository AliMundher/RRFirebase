import React from 'react'

function Inputs() {
    return (
        <React.Fragment>
            <h1 className="text-capitalize h3 mb-5">some information:</h1>
            <div className="form-row">
                <div className="form-group col-12 col-md-4">
                    <label className="text-capitalize">first name:</label>
                    <input type="text" placeholder="Enter Your First Name"
                        className="form-control mb-2 col-mb-0" required />
                </div>
                <div className="form-group col-12 col-md-4">
                    <label className="text-capitalize">last name:</label>
                    <input type="text" placeholder="Enter Your Last Name"
                        className="form-control mb-2 col-mb-0" required />
                </div>
                <div className="form-group col-12 col-md-4">
                    <label className="text-capitalize">amount:</label>
                    <input type="number" placeholder="Enter Your Amount"
                        className="form-control mb-2 col-mb-0" required />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-12 col-md-4">
                    <label className="text-capitalize">chose date:</label>
                    <input type="date" className="form-control mb-2 col-mb-0" required />
                </div>
                <div className="form-group col-12 col-md-4">
                    <label className="text-capitalize">name of city:</label>
                    <input type="text" placeholder="Enter Your Last Name"
                        className="form-control mb-2 col-mb-0" required />
                </div>
            </div>

            <button className="btn btn-primary text-capitalize mb-5">add name</button>
        </React.Fragment>
    )
}

export default Inputs
