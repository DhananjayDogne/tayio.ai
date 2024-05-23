"use client"
import { useEffect, useState } from 'react';
import LineGraph from './linegrapg';
import Map from './map/page';
import SideNav from '../sidenav/page'; 
// Dummy data for the line graph
const caseData = [
    { date: '2021-01-01', cases: 100 },
    { date: '2021-02-01', cases: 200 },
    { date: '2021-03-01', cases: 150 },
    { date: '2021-04-01', cases: 300 },
    { date: '2021-05-01', cases: 250 },
];

// Dummy data for the map
const countryData = [
    { name: 'USA', lat: 37.0902, lng: -95.7129, active: 500000, recovered: 200000, deaths: 100000 },
    { name: 'India', lat: 20.5937, lng: 78.9629, active: 300000, recovered: 400000, deaths: 50000 },
    { name: 'Brazil', lat: -14.2350, lng: -51.9253, active: 200000, recovered: 150000, deaths: 80000 },
];



const dashboard = () => {
    const [countryData, setcountryData] = useState([]);
    const [caseData, setcaseData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://disease.sh/v3/covid-19/countries");
                const data = await res.json();
                console.log(data);
                setcountryData(data);
            } catch (error) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        }
    }, []);
    console.log(countryData);

    // if (loading) {
    //     return <div className='text-black'>Loading...</div>;
    // }

    if (error) {
        return <div className='text-black'>{error}</div>;
    }
    return (
        <div className='p-4 m-auto w-fit'>
            <h1 className='text-black py-4 text-center'>COVID-19 Dashboard</h1>
            <div className='p-4 w-[50rem]'>
                <LineGraph data={caseData} />
            </div>
            <div className='p-4 w-[50rem]'>
                <Map countries={countryData} />
            </div>
        </div>
    );
};

export default dashboard;
