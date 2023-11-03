import './DevSidebar.css';
import React, { useState } from 'react';

import SpotifyAuth from './SpotifyAuth';

const spotifyToken = localStorage.getItem('authToken');

//const spotifyToken =  "blahhaha";


const Login = () => {
    return (
        <>
            <div className="LoginPrompt">
                <p>Connect your Spotify profile to get playlists</p>
                <SpotifyAuth />
            </div>
        </>
    )
}

const Decorator = (props) => {
    const { isOpen, toggle, title, colorId } = props;
    return (
        <div className='Decorator' id={colorId}>
            <svg className={`Triangle ${!isOpen ? 'closed' : ''}`} onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <polygon points="10,10 50,90 90,10" fill="white" />
            </svg>
            <h1 onClick={toggle}>{title}</h1>
        </div>
    )
}

const SubDecorator = (props) => {
    const { isOpen, toggle, title } = props;
    return (
        <div className='SubDecorator'>
            <svg className={`Triangle ${!isOpen ? 'closed' : ''}`} onClick={toggle} xmlns="http://www.w3.org/2000/svg" width="100" height="100">
                <polygon points="10,10 50,90 90,10" fill="white" />
            </svg>
            <h1 onClick={toggle}>{title}</h1>
        </div>
    )
}

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <SubDecorator isOpen={isOpen} toggle={toggleMenu} title={"profile / login"} />
            {isOpen && (

                spotifyToken ? (
                    <div className="Profile">
                        <div className='ProfileText'>
                            <h1>Name</h1>
                            <p>Cool Stats</p>
                            <a href='/logout'>logout</a>
                        </div>
                        <img alt='profile of ${}' src='https://placehold.co/70x70'></img>
                    </div>
                ) : (
                    <Login />
                )

            )}
        </>
    );
}

const Playlist = () => {
    return (
        <>
            <div className='Playlist'>
                <img alt='cover of playlist' src='https://placehold.co/70x70'></img>
                <div className='PlaylistText'>
                    <h2>Playlist Name</h2>
                    <p>PlaylistID</p>
                </div>

            </div>

        </>
    )
}

const EmptyMessage = () => {
    return (
        <>
            <p>No Playlists available, please login to Spotify</p>
        </>
    )
}

const PlaylistsContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <SubDecorator isOpen={isOpen} toggle={toggleMenu} title={"playlists"} />
            {isOpen && (
                <div className='PlaylistsContainer'>
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <EmptyMessage />
                </div>
            )}
        </>
    )
}

const SpotifyContainer = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='SubContainer'>
                <Decorator isOpen={isOpen} toggle={toggleMenu} title={"spotify data"} colorId={"SpotifyGreen"} />
                {isOpen && (
                    <>
                        <Profile />
                        <PlaylistsContainer />
                    </>
                )}
            </div>
        </>
    )
}

const DevSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <div className="DevSidebar">
                <Decorator isOpen={isOpen} toggle={toggleMenu} title={"spotify data"} colorId={"Watermelon"} />
                {isOpen && (
                    <SpotifyContainer />
                )}
            </div>

        </>
    );
}


export { DevSidebar };