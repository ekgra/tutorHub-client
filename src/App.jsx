import { useState, useContext } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Load Global Context
import { AuthProvider } from './utils/AuthContext';

// Load Components
import MainHeader from './components/MainHeader';

// Load Pages
import HomePage from './pages/HomePage';
import UserRegistration from './pages/UserRegistration';

function App() {
  // // const { auth, loginWithGoogle } = useContext(AuthContext);
  // const [ isModalVisible, setIsModalVisible ] = useState(false);

  // function showModalHandler(event){
  //   setIsModalVisible(true);
  // }
  // function closeModalHandler(event) {
  //   setIsModalVisible(false);
  // }

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
