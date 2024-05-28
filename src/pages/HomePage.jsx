import styles from './HomePage.module.css';

import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { decodeJWT } from '../utils/decodeJWT';
import { AuthContext } from '../utils/AuthContext';
import UpdateProfileButton from '../components/UpdateProfileButton';

const HomePage = (onUpdateProfile) => {
    const [ name, setName ] = useState('');
    const { auth, appToken } = useContext(AuthContext); 
    const navigate = useNavigate();

    useEffect(() => {
        if (auth) { 
            const { name } = decodeJWT(appToken)
            setName(name.split(' ')[0]);
        }
    }, [auth, appToken]);

    const handleUpdateProfile = () => {
        navigate('/register');
    }
    return (
        <div className={styles.welcomeContent}>
            {
                auth ? 
                    <div>
                        <h1 className={styles.welcomeContentText}> Welcome {name} </h1> 
                        <UpdateProfileButton onUpdateProfile={handleUpdateProfile}/>
                    </div>
                : null
            }
        </div>
    )
}

export default HomePage;