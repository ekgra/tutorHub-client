import styles from './HomePage.module.css';

import { MdMenuBook, MdLogin, MdLogout } from 'react-icons/md';
import { AuthContext } from '../utils/AuthContext';
import { useEffect, useContext } from 'react';

const HomePage = () => {
    const { auth } = useContext(AuthContext);

    return (
        <p></p>
    )
}

export default HomePage;