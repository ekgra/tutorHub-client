import { useState, useContext } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Signup from './pages/Signup';
import UserRegistration from './pages/UserRegistration';
import MainHeader from './components/MainHeader';
import { AuthProvider } from './utils/AuthContext';
import HomePage from './pages/HomePage';

function App() {
  // const { auth, loginWithGoogle } = useContext(AuthContext);
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  function showModalHandler(event){
    setIsModalVisible(true);
  }
  function closeModalHandler(event) {
    setIsModalVisible(false);
  }

  return (
    <>
      <Router>
        <AuthProvider>
          <MainHeader />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<UserRegistration />} />
            {/* <Route path='/courses' element={<BrowseCourses />} /> */}
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App
