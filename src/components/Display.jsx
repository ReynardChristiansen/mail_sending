import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmailSending from './EmailSending';


const Display = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<EmailSending />} />
            </Routes>
        </div>
    );
};

export default Display;
