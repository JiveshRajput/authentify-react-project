import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


function CountryDetailPage() {
    const { alphaCode } = useParams();
    const [countryDetails, setCountryDetails] = useState([]);
    document.title = `Country Details - ${alphaCode}`;

    function getLanguageList(lang) {
        let languageStr = '';
        for (const key in lang) {
            languageStr += `| ${lang[key]} `;
        }
        return languageStr.slice(1);
    }

    function getCurrencyList(curr) {
        let currencyList = '';
        for (const key in curr) {
            const { name, symbol } = curr[key];
            currencyList += `${name} (${symbol}), \n`;
        }
        return currencyList;
    }

    function getCurrency(curr) {
        let currency = ''
        currency = Object.values(curr || 'c').map((item, ind) => <div key={ind}>{item.name} - {item.symbol}</div>);
        return currency;
    }

    useEffect(() => {
        axios({
            url: `https://restcountries.com/v3.1/alpha/${alphaCode}`,
            method: 'get'
        }).then((res) => {
            setCountryDetails(res.data);
        })
    }, [alphaCode])

    return (
        <div>
            <div className="container px-2 py-3">
                <h1 className='text-center '>Country Detail</h1>
                <table className="table text-center">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col"><h4 className='m-0'>Detail</h4></th>
                            <th scope="col"><h4 className='m-0'>Value</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <th scope="row">Country Name</th>
                            <td>{countryDetails[0]?.capital?.[0] || <Skeleton width={"250px"} />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Official Name</th>
                            <td>{countryDetails[0]?.name?.official || <Skeleton width={"250px"} />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Capital</th>
                            <td>{countryDetails[0]?.capital || <Skeleton width={"250px"} />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Currencies</th>
                            <td>{getCurrency(countryDetails[0]?.currencies) || <Skeleton width={"250px"} />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Languages</th>
                            <td>{getLanguageList(countryDetails[0]?.languages) || <Skeleton width={"250px"} />}</td>
                        </tr>
                        <tr>
                            <th scope="row">Flag</th>
                            <td>{countryDetails[0]?.flags.png ? <img src={countryDetails[0]?.flags.png} alt={<Skeleton width={"100px"} />} width={"60px"} /> : <Skeleton width={"250px"} />} </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div >
    )
}

export default CountryDetailPage;
// export default CheckLoginHOC(CountryDetailPage);
