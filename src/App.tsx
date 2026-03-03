/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Streams from './pages/Streams';
import Alternatives from './pages/Alternatives';
import After12th from './pages/After12th';
import Professional from './pages/Professional';
import FAQ from './pages/FAQ';
import Internships from './pages/Internships';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="streams" element={<Streams />} />
            <Route path="alternatives" element={<Alternatives />} />
            <Route path="after-12th" element={<After12th />} />
            <Route path="professional" element={<Professional />} />
            <Route path="internships" element={<Internships />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
