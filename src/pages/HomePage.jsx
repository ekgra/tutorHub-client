import styles from './Homepage.module.css';
import { Container, Button } from 'react-bootstrap';

import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../utils/AuthContext';

const HomePage = () => {
  const [ name, setName ] = useState('');
  const { auth, appAuth, appToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
        auth ? setName(appAuth.name.split(' ')[0]) : setName('')
  }, [auth, appAuth]);

    const handleUpdateProfile = () => {
      navigate('/profile');
    };

    return (
      <div className={styles.welcomeContent}>
        <Container className="mt-4">
          <h1 className={styles.welcomeText}> Welcome {name} </h1> 
          <h2 className={styles.welcomeText}> Expedite your learning now! </h2> 
          <h3 className={styles.welcomeText}> Browse our Courses and Register for the one you like </h3> 
          { auth ? 
            <div>
              <h4 className={styles.welcomeText}> Complete your profile below to register </h4> 
              <Button onClick={handleUpdateProfile}>Update Profile</Button>
            </div>
          : 
            <h4 className={styles.welcomeText}> Login to begin </h4>
          } 
        </Container>
      </div>
    );
};

export default HomePage;
