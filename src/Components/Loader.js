import React from 'react'

function Loader() {

    const loaderStyle = {
        background: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            height: "100vh",
            position: "absolute",
            display: "grid",
            placeItems: "center",
        },
        loader: {
            width: "100px",
            height: "100px"
        }
    }
    return (
        <div style={loaderStyle.background}>
            <div className="spinner-border text-primary" role="status" style={loaderStyle.loader}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
