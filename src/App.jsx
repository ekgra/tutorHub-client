import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Load Global Context
import { AuthProvider } from './utils/AuthContext'

// Load Components
import NavigationBar from './components/NavigationBar'


// Load Pages
import HomePage from './pages/HomePage'
import Courses from './pages/Courses'
import Profile from './pages/Profile'
import About from './pages/About'
import MyLearning from './pages/MyLearning';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <NavigationBar />
          <div className="display-area">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
              <Route path="/myLearning" element={<MyLearning />} />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App
