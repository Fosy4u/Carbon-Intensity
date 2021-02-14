import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import './Component/Css/Componentscss.css';
import Navbar from './Component/Navbar/Navbar';
import HomeScreen from './Component/Screen/HomeScreen';
import PlotScreen from './Component/Screen/PlotScreen';

import { useState, useEffect, history } from 'react';
import { useDispatch, useSelector } from 'react-redux';





function App (props) {

    
        return (
            <div>

                <div className='Frontpage grid-container'>
                    <Navbar />

                    <Route exact={true} path="/" component={HomeScreen} />
                    <Route exact={true} path="/plot" component={PlotScreen} />
                    
                
                

                </div>

            </div>
            )
    


}

export default App;
