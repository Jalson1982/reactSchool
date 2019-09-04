import React, { Component } from "react";
import SearchBar from './SearchBar';
import DrawerToggleButton from '../components/SideDrawer/DrawerToggleButton';
import './NavBar.css';

const NavBar = props =>(

        <header className ="navbar">                      
            <nav className="navbar_navigation" >
                    <div className='navbar_toggle-botton'>
                        <DrawerToggleButton click={props.drawerClickHandler}/>
                    </div>
                    <div className="navbar_logo">
                        <a className="navbar-brand js-scroll-trigger logo-header" href="#">
                            Logo<img src="images/logo.png" alt=""/>
                         </a>
                    </div>
                <div className='spacer'/>
                <div className="navbar_navigation-items">
                    <ul >
                        <li ><a href="#banner">Home</a></li>
                        <li><a href="#about">Best Movies</a></li>
                        <li><a href="#menu">Best Series</a></li>
                         <li><a href="#our_team">Coming Soon</a></li>
                    </ul>
                </div>
                <SearchBar/>                          
            </nav>
        </header>
)

export default NavBar;