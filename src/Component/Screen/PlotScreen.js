import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import '../Css/Componentscss.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';




const PlotScreen = (props) => {


    /* Getting state of the carbon intensity from the redux store*/
    const carbonIntensityData = useSelector(state => state.carbon);
    const { loading, carbonData } = carbonIntensityData

    /* Getting date of the day from the redux store*/
    const day = useSelector(state => state.chosenDate);
    const { date } = day


    /*initialising state for plot data */
    const [plotData, setPlotData] = useState({})

    

    /*function to update plotData state with data and options for the plot */
    const chart = () => {
        const forecastData = carbonData.map((data) => { return data.intensity.forecast })
        const actualData = carbonData.map((data) => { return data.intensity.actual })
        const fromData = carbonData.map((data) => { return data.from })
        setPlotData({
            labels: fromData,
            datasets: [
                {
                    label: 'Forecast Intensity ',

                    data: forecastData,
                    backgroundColor: [
                        'rgba(255, 158, 64, 3)'

                    ],
                    bandwidth: 4,
                    
                },

                {
                    label: 'Actual Intensity ',
                    data: actualData,
                    backgroundColor: [
                        'rgba(54, 162, 235, 1)'

                    ],
                    bandwidth: 4
                }
            ]


        });


    }
    /*call chart function only when there is data from the Carbon Data intensity*/

    useEffect(() => {
        if (carbonData) {
            if (date) {
                chart()
            }

        }

       
    }, [carbonData])


    return (
        <div className='Frontpage '>
            <div className='main'>

                
                <div className='date'>
                    <h2> {date} </h2>
                </div>

                {/*displaying loading while waiting for data from the API*/}

                {loading === true ? <div> Loading........  Please wait</div> : <div> 

                    <div className='plot'>

                        <Line data={plotData} options={{
                            responsive: true,
                            title: { text: 'CARBON INTENSITY COMPARISON PLOT', display: true, fontSize: 20 },
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            autoSkip: true,
                                            maxTicksLimit: 10,
                                            beginAtZero: true
                                        },
                                        gridLines: {
                                            display: false
                                        }
                                    }],
                                xAxes: [{
                                    gridLines: {
                                        display: false
                                    }
                                }]
                            }, animation: {

                                currentStep: 10,
                                numSteps: 10,
                                easing: 'easeInOutQuad',
                                duration: 1060,


                            }

                        }} />
                    </div>
                </div>
                }
               
                
            
            
            </div>

           
        </div>
        )
}

export default PlotScreen; 