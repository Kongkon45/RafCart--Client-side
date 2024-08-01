"use client";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearUser, setUser } from '@/redux/store';
import auth from '@/firebase/firebase.config';
// import LogoutButton from './logout';
import SignupForm from './register';
import LoginForm from './login';

const AuthPage: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(clearUser());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      {!user && <SignupForm />}


      {/* {!user ? (
        <div className="w-1/2">
          <SignupForm />
        </div>
      ) : (
        <LoginForm/>
        // <LogoutButton />
      )} */}
    </div>
  );
};

export default AuthPage;
