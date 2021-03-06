import './App.css';
import AppRouting from './routing/AppRouting';
import { withRouter } from "react-router";
import React from 'react';

function App() {

        return (
            <div className="App">
               <AppRouting />
            </div>
        );
    }

export default withRouter(App);
