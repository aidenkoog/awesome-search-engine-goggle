import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
// import AppsIcon from '@mui/icons-material/Apps';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../search/Search';

function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_HeaderLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home_HeaderRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <Link to='/apps'><AppsIcon /></Link>
                    <Link to='/profile'><AccountCircleIcon className="home_headerAvatar" /></Link>
                </div>
            </div>
            <div className="home_body">
                <img src="images/filename.jpeg" alt="" />
                <div className="home_inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
