import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navigation/Navbar";

import Hero from './components/sections/Hero'
import HowItWorks from './components/pages/HowItWorks'
import Footer from './components/navigation/Footer'
import Explore from './components/sections/Explore'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/signup'

export default function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Hero />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
      <Footer />
    </Router>
    
    </>
  );
}