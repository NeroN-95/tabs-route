import {Route, Routes} from 'react-router-dom';
import Navigation from "./Navigation/Navigation";
import React from 'react';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}/>
        </Routes>
    );
}

export default App;
