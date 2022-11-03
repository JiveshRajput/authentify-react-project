import React, { useEffect } from 'react'
import TableLi from '../Components/TableLiList'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetails } from '../Store/AllCountriesListSlice'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CountryList() {
    const countryLists = useSelector(state => state.CountryDetailList.countryList)
    const Dispatch = useDispatch();

    document.title = 'Authentify - Authentication Project';

    useEffect(() => {
        if (!countryLists) {
            Dispatch(fetchCountryDetails());
        }
    }, [Dispatch])

    return (
        <>
            <div className="container px-2 py-3">
                <h1 className='text-center'>List of Countries</h1>
                <div className='w-100 overflow-auto'>
                    <table className="table text-center">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Sr. No.</th>
                                <th scope="col">CCA2</th>
                                <th scope="col">Common Name</th>
                                <th scope="col">Capital</th>
                                <th scope="col">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {countryLists ? countryLists.map((item, ind) => <TableLi key={ind} details={item} srNum={ind + 1} />) :
                                <tr>
                                    <th scope="row">{<Skeleton style={{ margin: "15px 0 15px 0" }} count={12} />}</th>
                                    <td>{<Skeleton style={{ margin: "15px 0 15px 0" }} count={12} />}</td>
                                    <td>{<Skeleton style={{ margin: "15px 0 15px 0" }} count={12} />}</td>
                                    <td>{<Skeleton style={{ margin: "15px 0 15px 0" }} count={12} />}</td>
                                    <td>{<Skeleton style={{ margin: "15px 0 15px 0" }} count={12} />}</td>
                                </tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CountryList;
// export default CheckLoginHOC(CountryList);
