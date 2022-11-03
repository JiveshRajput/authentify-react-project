import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import eyeIcon from '../Images/eyeIcon.png'
import Modal from './Modal'

function TableLiList(props) {
    const { details: { cca2, capital, name: { common, official } }, srNum } = props;
    const [showModalBox, setShowModalBox] = useState(false);

    function showModal() {
        setShowModalBox(true);
    }

    return (
        <>
            <tr>
                <th scope="row" >{srNum}.</th>
                <td>{cca2}</td>
                <td style={{ cursor: "pointer" }} onClick={showModal} data-toggle="modal" data-target={`#${cca2}`}>{common}</td>
                <td>{capital}</td>
                <td><Link to={`/details/${cca2}`} className='btn btn-primary'><img src={eyeIcon} style={{ width: '20px', margin: "0 20px 0 20px" }} alt="detail" /></Link></td>
                {showModalBox && <td><Modal commonName={common} cca2={cca2} officialName={official} /></td> }
            </tr>
        </>
    )
}
export default TableLiList
