import { Outlet, Navigate } from 'react-router-dom';
import { getAccessToken } from '../../../helpers/apiHelper';

export default function AuthLayout() {
  const token = getAccessToken();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Lost & Founds</h1>
          <p className="text-sm text-slate-500">Sistem Informasi Barang Hilang & Temuan</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}