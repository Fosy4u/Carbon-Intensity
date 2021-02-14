/* The Home Screen Component*/

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import '../Css/Componentscss.css';
import { useState, useEffect, history } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';
import {getDataAction } from '../../Actions/GetDataAction.js';
import { useDispatch, useSelector } from 'react-redux';
import { updateDateAction } from '../../Actions/UpdateDateAction';














function HomeScreen (props) {

    const dispatch = useDispatch();
    /*setting state to store selected date in two different formats; one for dispatching action data from API and
      the other for dispatching action for saving dates in the store to be displayed in Plot Screen*/ 
    const [dateSelected, setDateSelected] = useState();
    const [day, setDay] = useState();

    /* Getting state of the carbon intensity from the redux store*/
    const carbonIntensityData = useSelector(state => state.carbon);
    const { loading, carbonData } = carbonIntensityData
    

    /*getting today date*/
    const date = new Date();
    
    /*getting the date of the last first day*/
    let lastFirstDay = new Date(date)
    lastFirstDay.setDate(lastFirstDay.getDate() - 1)

    /*getting the date of the last second day*/
    let lastSecondDay = new Date(date)
    lastSecondDay.setDate(lastSecondDay.getDate() - 2)

    /*getting the date of the last third day*/
    let lastThirdDay = new Date(date)
    lastThirdDay.setDate(lastThirdDay.getDate() - 3)

    /*getting the date of the last fourth day*/
    let lastFourthDay = new Date(date)
    lastFourthDay.setDate(lastFourthDay.getDate() - 4)

    /*getting the date of the last fifth day*/
    let lastFifthDay = new Date(date)
    lastFifthDay.setDate(lastFifthDay.getDate() - 5)




    /*handling the selected date button click and updating the dateSelected state in the right format for Carbon Intensity API and display in plot screen*/
    const dateSelectedHandler = (format1, format2) => {

        let day = ("0" + format1.getDate()).slice(-2);
        let month = ("0" + (format1.getMonth() + 1
        )).slice(-2);
        let year = format1.getFullYear();
        let date = (year + "-" + month + "-" + day)
        setDateSelected(date);
        setDay(format2)
        

        
        
    }
/*dispatching action when date is selected */
    const callFn = () => {
        dispatch(getDataAction(dateSelected));
        dispatch(updateDateAction(day))
        
    }

    
    /*calling the function that will dispatch action whenever dateSelected state is updated and redirecting to plot screen*/
    useEffect(() => {
        if (dateSelected) {
            
            callFn();
            props.history.push('/plot')
            
        }
    }, [dateSelected]);

  

    return (
        <div className='Frontpage grid-container'>
            

            <main className='main'>
                <div >
                   

                  

                    <div >
                        <table className='table'>
                            <thead>
                                <tr>

                                <th> SELECT A DATE </th>
                               
                                                                
                                </tr>
                            </thead>
                            
                            <tbody>
                                
                                <tr>
                                    <td><button className='button full-width' onClick={(event) => { dateSelectedHandler(lastFirstDay, lastFirstDay.toDateString()) }}> {lastFirstDay.toDateString()} </button> </td>
                                        
                                   </tr>

                                <tr>
                                    <td> <button className='button full-width' onClick={(event) => { dateSelectedHandler(lastSecondDay, lastSecondDay.toDateString()) }}> {lastSecondDay.toDateString()} </button> </td>

                                </tr>

                                <tr>
                                    <td> <button className='button full-width' onClick={(event) => { dateSelectedHandler(lastThirdDay, lastThirdDay.toDateString()) }} > {lastThirdDay.toDateString()} </button> </td>
                                </tr>

                                <tr>
                                    <td> <button className='button full-width' onClick={(event) => { dateSelectedHandler(lastFourthDay, lastFourthDay.toDateString()) }} > {lastFourthDay.toDateString()} </button> </td>
                                </tr>

                                <tr>
                                    <td> <button className='button full-width' onClick={(event) => { dateSelectedHandler(lastFifthDay, lastFifthDay.toDateString()) }} > {lastFifthDay.toDateString()} </button> </td>

                                </tr>
                                
                                
                            </tbody>
                        </table>
                    </div>

                




                </div>


               

            </main>



            <footer className='footer'>
                All rights reserved 
                </footer>

        </div>
    )
}




export default HomeScreen;
