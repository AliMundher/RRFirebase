import React from 'react'

function Header() {
    return (
        <div className="d-flex justify-content-between mt-5">
            <h2 className="text-capitalize">total</h2>
            <button className="btn btn-secondary flex-end">$0</button>
        </div>
    )
}

export default Header
