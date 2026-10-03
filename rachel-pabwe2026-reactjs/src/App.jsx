import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import AuthLayout from './features/auth/layouts/AuthLayout';
import LostFoundLayout from './features/lost-founds/layouts/LostFoundLayout';

// Semua halaman di-lazy-load (code splitting) agar bundle awal kecil
const LoginPage = lazy(() => import('./features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('./features/auth/pages/RegisterPage'));
const HomePage = lazy(() => import('./features/lost-founds/pages/HomePage'));
const DetailPage = lazy(() => import('./features/lost-founds/pages/DetailPage'));
const UsersPage = lazy(() => import('./features/users/pages/UsersPage'));
const ProfilePage = lazy(() => import('./features/users/pages/ProfilePage'));

function PageLoader() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold text-slate-800">Lost & Founds</h1>
      <p role="status" className="text-slate-500">Memuat halaman...</p>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>

          {/* Protected Dashboard Routes */}
          <Route path="/" element={<LostFoundLayout />}>
            <Route index element={<HomePage />} />
            <Route path="lost-founds/:id" element={<DetailPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}