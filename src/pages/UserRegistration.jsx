import React from 'react';
import styles from './UserRegistration.module.css';


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/AuthContext';

// Define the validation schema using yup
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  name: yup.string().required('Name is required'),
  phone: yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  address: yup.string().required('Address is required'),
  parentName: yup.string().required('Parent name is required'),
  parentPhone: yup.string().matches(/^\d{10}$/, 'Parent phone number must be 10 digits').required('Parent phone number is required'),
  school: yup.string().required('School name is required'),
  class: yup.string().required('Class is required'),
  subjects: yup.array().of(yup.string().required()).min(1, 'At least one subject must be selected')
});

const UserRegistration = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth) {
    return (<p className={styles.error}> Unauthorized. Login to begin </p> );
  } else {
    // Initialize react-hook-form with yup resolver
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
      try {
        const response = await fetch('https://your-backend-api.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Registration successful:', result);
          // Handle successful registration
        } else {
          console.error('Registration failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };

    return (
      <div className={styles.registrationForm}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input type="email" {...register('email')} />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>
          <div>
            <label>Name</label>
            <input type="text" {...register('name')} />
            {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          </div>
          <div>
            <label>Phone</label>
            <input type="text" {...register('phone')} />
            {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
          </div>
          <div>
            <label>Address</label>
            <input type="text" {...register('address')} />
            {errors.address && <p className={styles.error}>{errors.address.message}</p>}
          </div>
          <div>
            <label>Parent Name</label>
            <input type="text" {...register('parentName')} />
            {errors.parentName && <p className={styles.error}>{errors.parentName.message}</p>}
          </div>
          <div>
            <label>Parent Phone</label>
            <input type="text" {...register('parentPhone')} />
            {errors.parentPhone && <p className={styles.error}>{errors.parentPhone.message}</p>}
          </div>
          <div>
            <label>School</label>
            <input type="text" {...register('school')} />
            {errors.school && <p className={styles.error}>{errors.school.message}</p>}
          </div>
          <div>
            <label>Class</label>
            <input type="text" {...register('class')} />
            {errors.class && <p className={styles.error}>{errors.class.message}</p>}
          </div>
          <div>
            <label>Subjects</label>
            <div>
              <label>
                <input type="checkbox" value="physics" {...register('subjects')} />
                Physics
              </label>
              <label>
                <input type="checkbox" value="maths" {...register('subjects')} />
                Maths
              </label>
            </div>
            {errors.subjects && <p className={styles.error}>{errors.subjects.message}</p>}
          </div>
          <button className={styles.button} type="submit">Register</button>
        </form>
      </div>
    );
  }
};

export default UserRegistration;
