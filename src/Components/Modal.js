import React from 'react'

function Modal(props) {
    const { commonName, officialName, cca2 } = props
    return (
        <>
            <div className="modal fade" id={cca2} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Name of Country</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div><span className='font-weight-bold'>Common Name:</span> {commonName}</div>
                            <div><span className='font-weight-bold'>Official Name:</span> {officialName}</div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
