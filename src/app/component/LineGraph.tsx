'use client'
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const LineGraph = () => {
    // const [country, setCountry] = useState('india');
    const country = 'india';
    const [chartData, setChartData] = useState({});
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace this with the appropriate endpoint for historical data
                const response = await axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`);
                const { timeline } = response.data;
                const dates = Object.keys(timeline.cases);
                const cases = Object.values(timeline.cases);

                setChartData({
                    labels: dates,
                    datasets: [
                        {
                            label: 'COVID-19 Cases',
                            data: cases,
                            fill: false,
                            backgroundColor: 'rgba(75,192,192,0.6)',
                            borderColor: 'rgba(75,192,192,1)',
                            tension: 0.1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching historical data:', error);
            }
        };

        if (country) {
            fetchData();
        }
    }, [country]);

    return (
        <div>
            <h2>COVID-19 Cases Fluctuations</h2>
            <Line data={chartData} />
        </div>
    );
};

export default LineGraph;
