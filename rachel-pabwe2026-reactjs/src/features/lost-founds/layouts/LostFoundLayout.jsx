import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavbarComponent from '../components/NavbarComponent';
import SidebarComponent from '../components/SidebarComponent';
import { getAccessToken } from '../../../helpers/apiHelper';
// Sesuaikan jika kamu memiliki async thunk untuk mengambil profil aktif (misal: asyncGetMyProfile)

export default function LostFoundLayout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      navigate('/auth/login');
    } else {
      // Dispatch action untuk ambil profil aktif jika diperlukan
      // dispatch(asyncGetMyProfile());
    }
  }, [navigate, dispatch]);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <SidebarComponent />

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Navbar */}
        <NavbarComponent />

        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}