import styles from './MainHeader.module.css';

import { useState, useEffect, useContext } from 'react';
import { MdMenuBook, MdLogin, MdLogout } from 'react-icons/md';

import { AuthContext } from '../utils/AuthContext';
import { decodeJWT } from '../utils/decodeJWT';

const MainHeader = ({ onCreatePost }) => {
    const [ name, setName ] = useState('');
    const { auth, appToken, loginWithGoogle, logout } = useContext(AuthContext);

    useEffect(() => {
        if (auth) { 
            const { name } = decodeJWT(appToken)
            setName(name.split(' ')[0]);
        }
    }, [auth, appToken]);

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <MdMenuBook />
                Tutor Hub
            </h1>
            <p>
                {auth ? (
                        <>
                            <button className={styles.button} onClick={logout}>
                                <MdLogout size={18} />
                                Logout
                            </button>
                            <br/>
                            <span className={styles.loginUser}>Logged in as {name} </span>
                        </>
                    ) : (
                        <button className={styles.button} onClick={loginWithGoogle}>
                            <MdLogin size={18} />
                            Login with Google
                        </button>
                    )}
            </p>
        </header>
    )
}

export default MainHeader;