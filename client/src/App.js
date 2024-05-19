import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import Reviews from './components/Reviews';
import PostReview from './components/PostReview';
import StudySection from './components/StudySection';
import { useAuth } from './context/AuthContext';
import UserProfile from './components/UserProfile';
import RoleManagement from './components/RoleManagement';
import ReviewPage from './components/ReviewPage';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/review/:review_id" element={<ReviewPage />} />
        <Route path="/study-mode" element={<StudySection />} />
        <Route path="/post-review" element={isAuthenticated ? <PostReview /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/role-management" element={<RoleManagement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
