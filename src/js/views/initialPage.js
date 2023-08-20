import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const InitialPage = () => {
    const { store, actions } = useContext(Context);

    

    return (
        <>
          <h1>this is the initial page</h1>
        </>
    );
};

export default InitialPage;

