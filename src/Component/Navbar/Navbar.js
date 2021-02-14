
/* Menu or Navigation / Header Component*/

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import '../Css/Componentscss.css';
import { Link, Route, Switch } from 'react-router-dom';







class Navbar extends React.Component {

    constructor() {
/* Creating of the state that will control opening and closing of APP menu*/
        super();
        this.state = {
            
            sidebar: 'sidebarclose'
        }

    }



    /* function that controls opening app menu*/
    openmenu = () => {
        
            this.setState({ sidebar: 'sidebaropen' })

    }

/* function that controls closing app menu*/
    closemenu = () => {
        this.setState({ sidebar: 'sidebarclose' })
    }

    render() {
        const { userInfo } = this.props; 
        return (
            <div className=' '>
                <header className='header header-links'>
                    <div className='brand'>
                        <button onClick={this.openmenu}> &#9776; </button>

                        <Link className=' appName' to={"/"}> Carbon-Intensity App </Link>
                         
                    </div>

                </header>

                <aside className={this.state.sidebar}>
                    <h3> App Menu </h3>
                    <button className='sidebar-close-button' onClick={this.closemenu}> X </button>
                    <ul className='sidebar-list'>

                        <li>

                            <Link to={"/"}><button className='button' onClick={this.closemenu}> Select Date </button> </Link>
                        </li>
                        
                                               

                    </ul>

                    <ul className='sidebar-list'>

                        <li>

                            <Link to={"/plot"}><button className='button' onClick={this.closemenu}> Plot screen </button> </Link>
                        </li>
                    </ul>
                </aside>

               
            </div>
            )
    }


}

export default Navbar;
