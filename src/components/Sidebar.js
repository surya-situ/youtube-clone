import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    // early return:
    if(!isMenuOpen) return null;

    return (
        <div>
            <div className='p-5 shadow-lg w-48'>
                <p className='font-bold'></p>
                <ul>
                    <li> <Link to={'/'}>Home</Link></li>
                    <li>Sorts</li>
                    <li>Videos</li>
                    <li>Likes</li>
                </ul>
                <p className='font-bold py-5'>Subscriptions</p>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
                <p className='py-5 font-bold'>Watch later</p>
                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar