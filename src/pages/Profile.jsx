import axios from 'axios';

import { Container, Form, Button } from 'react-bootstrap';

import { useState, useContext, useEffect } from 'react';

import NameField from '../components/ProfileForm/NameField';
import EmailField from '../components/ProfileForm/EmailField';
import PhoneField from '../components/ProfileForm/PhoneField';
import YearField from '../components/ProfileForm/YearField';
import SubjectsInterestedField from '../components/ProfileForm/SubjectsInterestedField';
import ParentNameField from '../components/ProfileForm/ParentNameField';
import ParentPhoneField from '../components/ProfileForm/ParentPhoneField';
import CityField from '../components/ProfileForm/CityField';

import { AuthContext } from '../utils/AuthContext';

const Profile = () => {
  const { auth, appAuth, appToken } = useContext(AuthContext);
  const [formName, setFormName] = useState('ProfileForm');
  const [profile, setProfile] = useState( { name: '',  email: '', phone: '', 
                                            year: '', subjectsInterested: '',
                                            parentName: '', parentPhone: '', city: ''
                                          });
  const [profileBeforeEdit, setProfileBeforeEdit] = useState({});
  const [isEditing, setIsEditing] = useState(false);


  const getLatestProfile = async (email) => {
    const updatedProfile = await axios.get(`http://localhost:3000/api/students/${email}`, {
      headers: { Authorization: `Bearer ${appToken}` }
    });
    setProfile(updatedProfile.data);
  }

  useEffect(() => {
    setProfile({
      name: appAuth.name,
      email: appAuth.email
    });
    if (auth) { getLatestProfile(appAuth.email) };
  }, [auth, appAuth]);

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));

    // Call the /students endpoint with axios post call 

  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the profile fields to their original values
    setProfile(profileBeforeEdit);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/students', profile, {
        headers: { Authorization: `Bearer ${appToken}` }
      });
      console.log('Profile saved:', response.data);
      setProfile(profile);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  const toggleEdit = () => {
    if (isEditing) {
      handleSave();
    } else {
      setProfileBeforeEdit(profile);
      setIsEditing(true);
    }
  };

  return (
    <Container className="mt-4">
      <h1>Profile Information</h1>
      <Form>
        <NameField value={appAuth.name} formName={formName} />
        <EmailField value={appAuth.email} formName={formName} />
        <PhoneField isEditing={isEditing} value={profile.phone} formName={formName} handleChange={handleChange} />
        <YearField isEditing={isEditing} value={profile.year} formName={formName} handleChange={handleChange} />
        <SubjectsInterestedField isEditing={isEditing} value={profile.subjectsInterested} formName={formName} handleChange={handleChange} />
        <ParentNameField isEditing={isEditing} value={profile.parentName} formName={formName} handleChange={handleChange} />
        <ParentPhoneField isEditing={isEditing} value={profile.parentPhone} formName={formName} handleChange={handleChange} />
        <CityField isEditing={isEditing} value={profile.city} formName={formName} handleChange={handleChange} />
        <Button variant="primary" onClick={toggleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        {isEditing && (
          <Button variant="secondary" onClick={handleCancel} className="ms-2">
            Cancel
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default Profile;
