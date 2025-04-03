import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Login from './pages/Login';
import Home from './pages/Home/Home';
import Welcome from './pages/Welcome/Welcome';
import CreateAccount from './pages/CreateAccount';
import NotFound from './pages/NotFound';

import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import { ThemeProvider } from './context/ThemeContext';
import { AppProvider } from './context/AppContext';
import { MovementPaletteProvider } from './context/ColorContext';

import '/src/assets/styles/custom-theme.css';
import RecoveryEmail from './pages/Welcome/RecoveryPassword/RecoveryEmail';
import ExpiredSession from './pages/ExpiredSession';
import ResetPassword from './pages/Welcome/RecoveryPassword/ResetPassword';
import { UserProvider } from './context/UserContext';
import { LoadingProvider } from './context/LoadingProvider';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider>
        <LoadingProvider>
          <UserProvider>
            <MovementPaletteProvider>
              <Router>
                <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/home" element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/create-account" element={<CreateAccount />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="/recovery-email" element={<RecoveryEmail />} />
                  <Route path="/expired-session" element={<ExpiredSession />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Router>
              <Footer />
            </MovementPaletteProvider>
          </UserProvider>
        </LoadingProvider>
      </ThemeProvider>
    </AppProvider>
  </StrictMode>
);