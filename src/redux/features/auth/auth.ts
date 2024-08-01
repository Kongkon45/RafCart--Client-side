import auth from "@/firebase/firebase.config";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          return { data: userCredential.user };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
    signup: builder.mutation({
      queryFn: async ({ email, password }) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          return { data: userCredential.user };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
    logout: builder.mutation({
      queryFn: async () => {
        try {
          await signOut(auth);
          return { data: "Logged out" };
        } catch (error: any) {
          return { error: { message: error.message } };
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } =
  authApi;
