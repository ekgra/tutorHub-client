import React from 'react';
import styles from './UserRegistration.module.css';


import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';
import UserProfileForm from '../components/UserProfileForm';


const UserRegistration = () => {
  const { auth, appToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const registerUserDetails = async (data) => {
    try {
      console.log("printing here", data);
  
      const response = await axios.post('https://localhost:3000/api/students', data, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${appToken}`,
        }
      });
  
      console.log('Registration successful:', response.data);
      // Handle successful registration
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
    {
      auth ? 
        <UserProfileForm />
      : null
    }
    </div>
    
  );
};

export default UserRegistration;

// onSubmit={handleSubmit(registerUserDetails)}

