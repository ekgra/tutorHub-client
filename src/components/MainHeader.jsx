import styles from './MainHeader.module.css';

import { MdMenuBook, MdLogin, MdLogout } from 'react-icons/md';
import { AuthContext } from '../utils/AuthContext';
import { useEffect, useContext } from 'react';

const MainHeader = ({ onCreatePost }) => {
    const { auth, loginWithGoogle, logout } = useContext(AuthContext);

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <MdMenuBook />
                Tutor Hub
            </h1>
            <p>
                {auth ? (
                        <button className={styles.button} onClick={logout}>
                            <MdLogout size={18} />
                            Logout
                        </button>
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