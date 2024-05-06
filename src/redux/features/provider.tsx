"use client"
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './../store';

const ReduxProvider = ({children}:any) => {
    return (
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
    );
};

export default ReduxProvider;