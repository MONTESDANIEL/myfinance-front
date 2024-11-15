import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Login from './pages/Login';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import CreateAccount from './pages/CreateAccount';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

import { ThemeProvider } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import { MovementPaletteProvider } from './context/ColorContext';

import '/src/assets/styles/custom-theme.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <MovementPaletteProvider>
      <ThemeProvider>
        <AppProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Footer />
        </AppProvider>
      </ThemeProvider>
    </MovementPaletteProvider>
  </StrictMode>
);