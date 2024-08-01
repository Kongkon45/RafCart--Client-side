"use client";
import { useLogoutMutation } from '@/redux/features/auth/auth';
import { clearUser } from '@/redux/store';
import React from 'react';
import { useDispatch } from 'react-redux';

const LogoutButton: React.FC = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const result = await logout({}).unwrap();
      dispatch(clearUser());
    } catch (error) {
      // Handle error case if necessary
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
      disabled={isLoading}
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
};

export default LogoutButton;
